import theme from "prism-react-renderer/themes/nightOwl";
import React, { lazy, useEffect } from "react";
import { useBoolean } from "../../hooks/use-boolean";
import CodeContainer from "../code-container";
import CopyButton from "../copy-button";
import Highlight from "../highlight";

import ReactLiveBlock from "../react-live-block";

function CodeBlock(props: any) {
  const [isMounted, { on }] = useBoolean();
  useEffect(
    /**
     * Lazily-load <ReactLiveBlock /> to save bundle size.
     */
    on,
    [on]
  );
  const {
    className,
    live = true,
    manual,
    render,
    children,
    viewlines,
    ln,
    mountStylesheet = false
  } = props.children.props;

  const _live = live === "true" || live === true;

  const language = className?.replace(/language-/, "");
  const rawCode = children.trim();

  const reactLiveBlockProps = {
    rawCode,
    language,
    theme,
    noInline: manual,
    mountStylesheet
  };

  if (isMounted && language === "jsx" && _live === true) {
    return <ReactLiveBlock editable {...reactLiveBlockProps} />;
  }

  if (isMounted && render) {
    /**
     * @TODO Not sure if this is even used?
     */
    return (
      <div style={{ marginTop: 32 }}>
        <ReactLiveBlock editable={false} {...reactLiveBlockProps} />
      </div>
    );
  }

  return (
    <div style={{ position: "relative", zIndex: 0 }}>
      <CodeContainer>
        <Highlight
          codeString={rawCode}
          language="jsx"
          theme={theme}
          metastring={ln}
          showLines={viewlines}
        />
      </CodeContainer>
      <CopyButton code={rawCode} />
    </div>
  );
}

export default CodeBlock;
