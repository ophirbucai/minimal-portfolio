import { Slot, type SlotProps } from "@radix-ui/react-slot";
import DOMPurify from "dompurify";
import { useMemo } from "react";

interface Props extends SlotProps {
  asChild?: boolean;
  content?: string;
}
export const InnerHTML = ({ asChild, content, ...props }: Props) => {
  const Comp = asChild ? Slot : "span";
  const purifiedContent = useMemo(() => content && DOMPurify.sanitize(content), [content]);
  return (
    // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
    purifiedContent && <Comp dangerouslySetInnerHTML={{ __html: purifiedContent }} {...props} />
  );
};
