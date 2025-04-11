import { useEffect, useRef, useState } from "react";

// This is a code snippet to demonstrate why nested components are an anti pattern.

/**
 *  This is just an example for my notes to visualise why inline components are a bad idea.
 *  Updating parent state causes a rerender
 *  Since the function definitions of the child component are not the same between the rerenders,
 *  They will remount instead of rerendering, which is really bad for performance.
 */

function NestedComponentAntiPattern() {
	const [rerenderCount, setRerenderCount] = useState<number>(0);
	const childMountCountRef = useRef<number>(1);
	const childMountCount = childMountCountRef.current;

	const handleMount = () =>
		(childMountCountRef.current = childMountCountRef.current + 1);

	const NestedComponentAntiPatternChild = ({
		handleMount,
	}: {
		handleMount: () => void;
	}) => {
		const [childRerenderCount, setChildRerenderCount] = useState(0);

		useEffect(() => {
			handleMount();
		}, [handleMount]);
		return (
			<button onClick={() => setChildRerenderCount((prev) => prev + 1)}>
				Child rerendered {childRerenderCount} time(s)
			</button>
		);
	};

	return (
		<div>
			<div>Child component mounts : {childMountCount}</div>
			<div style={{ display: "flex" }}>
				<button onClick={() => setRerenderCount((prev) => prev + 1)}>
					Parent rerendered {rerenderCount} time(s)
				</button>
				<NestedComponentAntiPatternChild handleMount={handleMount} />
			</div>
		</div>
	);
}

export default NestedComponentAntiPattern;
