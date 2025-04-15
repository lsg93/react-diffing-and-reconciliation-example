import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MemoisedListExample from "./components/MemoisedListExample";
import FormWithRerenderWithBug, {
	FormWithRerenderWithBugFixedByArray,
	FormWithRerenderWithBugFixedByControlledComponents,
} from "./FormWithRerender";

createRoot(document.getElementById("root")!).render(
	// <StrictMode>
	<MemoisedListExample />
	// </StrictMode>
);
