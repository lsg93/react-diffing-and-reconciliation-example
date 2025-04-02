import { useState } from "react";
import Input from "./Input";

function App() {
	const [isCompany, setIsCompany] = useState(false);

	return (
		<>
			<div>Rest of form...</div>

			<div>
				{isCompany ? (
					<Input
						id="company-tax-id-number"
						placeholder="Enter your company ID."
					/>
				) : (
					<div>???</div>
				)}
			</div>
		</>
	);
}

export default App;
