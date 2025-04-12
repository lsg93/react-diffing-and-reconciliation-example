import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FormWithRerenderWithBug, {
	FormWithRerenderWithBugFixedByControlledComponents,
} from "./FormWithRerender";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<FormWithRerenderWithBugFixedByControlledComponents />
	</StrictMode>
);
