import { render } from "@testing-library/react";

import { ThemeProvider } from "@/context/theme";
import { Dialog } from "@radix-ui/react-dialog";
import App from "./app";

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
