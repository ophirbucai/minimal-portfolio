import createDOMPurify from "dompurify";

const purifier = createDOMPurify();
purifier.addHook("afterSanitizeAttributes", (node) => {
  if ("target" in node) {
    node.setAttribute("target", "_blank");
    node.setAttribute("rel", "noreferrer noopener");
  }
});

export const sanitize = purifier.sanitize;
