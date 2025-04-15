import { memo, useEffect, useRef, useState } from "react";

/**
 * The following code is a really simple example of the difference between
 * Child components that are memoised, and those that are not.
 * While memoisation is not active, the children are components which are not memoised, so they re-render each time the parent rerenders.
 * While memoisation is active, the children are the same component, but memoised. As props do not update between renders (the array is stable), they do not rerender.
 **/

const elements = ["Element 1", "Element 2", "Element 3"];

function ListElement({ element }: { element: string }) {
	const childRenderCountRef = useRef<number>(1);

	useEffect(() => {
		childRenderCountRef.current = childRenderCountRef.current + 1;
	});

	return (
		<div>
			<p>{element}</p>
			<p>List element has rendered {childRenderCountRef.current} time(s)</p>
		</div>
	);
}

const MemoisedListElement = memo(ListElement);

function MemoizedListExample() {
	const [memoisation, setMemoisation] = useState<boolean>(false);
	const [parentRenderCount, setParentRenderCount] = useState<number>(1);

	const handleMemoisation = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setMemoisation(e.target.checked);
		incrementRenderCount();
	};

	const incrementRenderCount = (): void => {
		setParentRenderCount((prev) => prev + 1);
	};

	const memoisationStatus = memoisation ? "ON" : "OFF";
	const Element = memoisation ? MemoisedListElement : ListElement;

	return (
		<div>
			<header>Memoised List example - Memoisation {memoisationStatus}</header>
			<section>
				<label>Use Memoisation? :</label>
				<input type="checkbox" onChange={handleMemoisation} />
			</section>
			<section>
				<p>Parent has rendered {parentRenderCount} time(s)</p>
			</section>
			<section>
				{elements.map((element, index) => {
					// Can use index as key here, as the array is stable between renders of this component.
					return <Element key={index} element={element} />;
				})}
			</section>
			<footer>
				<button onClick={incrementRenderCount}>Rerender parent</button>
			</footer>
		</div>
	);
}

export default MemoizedListExample;
