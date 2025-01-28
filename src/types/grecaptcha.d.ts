declare global {
  interface Window {
    grecaptcha: {
      execute: (widgetId?: string) => Promise<string>;
      render: (
        container: string | HTMLElement,
        parameters: {
          sitekey: string;
          size: "invisible";
          callback?: (token: string) => void;
        },
      ) => string;
      reset: (widgetId?: string) => void;
      getResponse: (widgetId?: string) => string;
    };
  }
}

export {};
