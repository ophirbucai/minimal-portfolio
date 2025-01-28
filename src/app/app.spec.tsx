import { render } from "@testing-library/react";

import { ThemeProvider } from "@/context/theme";
import App from "./app";
import { Dialog } from "@radix-ui/react-dialog";

describe("App", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ThemeProvider>
        <Dialog>
          <App />
        </Dialog>
      </ThemeProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
