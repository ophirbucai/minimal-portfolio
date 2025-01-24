import { render } from "@testing-library/react";

import { ThemeProvider } from "@/context/theme";
import App from "./app";

describe("App", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ThemeProvider>
        <App />
      </ThemeProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
