import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FormWithRerender from "./FormWithRerender";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<FormWithRerender />
	</StrictMode>
);
