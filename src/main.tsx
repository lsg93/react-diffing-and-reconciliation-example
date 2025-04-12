import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FormWithRerenderWithBug, {
	FormWithRerenderWithBugFixedByArray,
	FormWithRerenderWithBugFixedByControlledComponents,
} from "./FormWithRerender";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<FormWithRerenderWithBugFixedByArray />
	</StrictMode>
);
