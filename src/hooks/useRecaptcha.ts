import { useCallback, useEffect, useRef, useState } from "react";

type UseRecaptchaProps = {
  containerId: string;
  shouldLoad?: boolean;
};

export const useRecaptcha = ({ containerId, shouldLoad = true }: UseRecaptchaProps) => {
  const [recaptchaLoaded, setRecaptchaLoaded] = useState<boolean>(false);
  const [recaptchaWidget, setRecaptchaWidget] = useState<string | null>(null);

  useEffect(() => {
    if (!shouldLoad) return;

    let script: HTMLScriptElement | undefined = Array.from(document.scripts).find((script) =>
      script.src.startsWith("https://www.google.com/recaptcha/api.js"),
    );

    if (script && window.grecaptcha && "render" in window.grecaptcha) {
      setRecaptchaLoaded(true);
      return;
    }

    script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (window.grecaptcha && "render" in window.grecaptcha) {
        setRecaptchaLoaded(true);
      }
    };

    document.body.appendChild(script);
  }, [shouldLoad]);

  useEffect(() => {
    if (recaptchaLoaded && window.grecaptcha && recaptchaWidget === null) {
      const widget = window.grecaptcha.render(containerId, {
        sitekey: import.meta.env.VITE_PUBLIC_RECAPTCHA_SITE_KEY,
        size: "invisible",
      });
      setRecaptchaWidget(widget);
    }
  }, [recaptchaLoaded, recaptchaWidget, containerId]);

  const executeRecaptcha = useCallback(() => {
    if (recaptchaWidget !== null && window.grecaptcha) {
      window.grecaptcha.reset(recaptchaWidget);
      return window.grecaptcha.execute(recaptchaWidget);
    }
  }, [recaptchaWidget]);

  return {
    executeRecaptcha,
    recaptchaLoaded,
  };
};
