import { useCallback, useEffect, useRef } from "react";

export const useTitle = (title: string, changeImmediately = false) => {
  const originalTitle = useRef(document.title);

  const changeTitle = useCallback(() => {
    document.title = `${title} | Ophir Bucai`;
  }, [title]);

  const revertChangeTitle = useCallback(() => {
    document.title = originalTitle.current;
  }, []);

  useEffect(() => {
    if (changeImmediately) {
      changeTitle();
    }

    return revertChangeTitle;
  }, [changeImmediately, changeTitle, revertChangeTitle]);

  return {
    revertChangeTitle,
    changeTitle,
  };
};
