import React from "react";
import { useClipboard } from "../../hooks/use-clipboard";
import { ButtonOptions } from "../types";

interface CopyButtonProps extends ButtonOptions {
  code: string;
}

function CopyButton({ code, ...props }: CopyButtonProps) {
  const { hasCopied, onCopy } = useClipboard(code);

  return (
    <button
      style={{
        position: "absolute",
        textTransform: "uppercase",
        colorScheme: "teal",
        fontSize: "xs",
        height: "24px",
        top: 0,
        zIndex: 1,
        right: "1.25em"
      }}
      {...props}
      onClick={onCopy}
    >
      {hasCopied ? "Copied" : "Copy"}
    </button>
  );
}

export default CopyButton;
