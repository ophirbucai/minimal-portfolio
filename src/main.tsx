import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import App from "./app/app";

import { Dialog } from "@radix-ui/react-dialog";
import { ThemeProvider } from "./context/theme/theme-context.provider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <ThemeProvider>
      <Dialog>
        <App />
      </Dialog>
    </ThemeProvider>
  </StrictMode>,
);
