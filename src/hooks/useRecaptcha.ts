import { useCallback, useEffect, useRef, useState } from "react";

type UseRecaptchaProps = {
  containerId: string;
  shouldLoad?: boolean;
};

export const useRecaptcha = ({ containerId, shouldLoad = true }: UseRecaptchaProps) => {
  const [recaptchaLoaded, setRecaptchaLoaded] = useState<boolean>(false);
  const [recaptchaWidget, setRecaptchaWidget] = useState<string | null>(null);
  const checkLoadRef = useRef<number | null>(null);

  useEffect(() => {
    let script: HTMLScriptElement | undefined = Array.from(document.scripts).find((script) =>
      script.src.startsWith("https://www.google.com/recaptcha/api.js"),
    );

    if (!script) {
      script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    if (shouldLoad && !recaptchaLoaded) {
      checkLoadRef.current = window.setInterval(() => {
        if (window.grecaptcha && "render" in window.grecaptcha) {
          setRecaptchaLoaded(true);
        }
      }, 300);
    }

    return () => {
      checkLoadRef.current && clearInterval(checkLoadRef.current);
    };
  }, [shouldLoad, recaptchaLoaded]);

  useEffect(() => {
    if (recaptchaLoaded && window.grecaptcha && recaptchaWidget === null) {
      const widget = window.grecaptcha.render(containerId, {
        sitekey: import.meta.env.VITE_PUBLIC_RECAPTCHA_SITE_KEY,
        size: "invisible",
      });
      setRecaptchaWidget(widget);
    }
  }, [recaptchaLoaded, recaptchaWidget, containerId]);

  const executeRecaptcha = useCallback(async () => {
    if (recaptchaWidget !== null && window.grecaptcha) {
      window.grecaptcha.reset(recaptchaWidget);
      const token = await window.grecaptcha.execute(recaptchaWidget);
      return token;
    }
  }, [recaptchaWidget]);

  return {
    executeRecaptcha,
    recaptchaLoaded,
  };
};
