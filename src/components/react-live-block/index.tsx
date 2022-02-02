import React, { useState } from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import CodeContainer from "../code-container";
import CopyButton from "../copy-button";
import scope from "../react-live-scope";
import { liveEditorStyle, liveErrorStyle } from "../styles";

const liveCodePreview = {
  fontFamily: "body",
  marginTop: "0.5rem",
  padding: "0.3rem",
  borderWidth: 1,
  borderRadius: "12px"
};

const EditableNotice = (props: any) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "full",
        top: "-1.25em",
        roundedTop: "8px",
        bg: "#011627",
        py: "2",
        zIndex: "0",
        letterSpacing: "wide",
        color: "gray.400",
        fontSize: "xs",
        fontWeight: "semibold",
        textAlign: "center",
        textTransform: "uppercase",
        pointerEvents: "none"
      }}
      {...props}
    >
      Cool
    </div>
  );
};

function ReactLiveBlock({ editable, rawCode, ...rest }) {
  const [editorCode, setEditorCode] = useState(rawCode.trim());
  const onChange = (newCode) => setEditorCode(newCode.trim());
  const liveProviderProps = {
    code: editorCode,
    scope,
    ...rest
  };
  return (
    <LiveProvider {...liveProviderProps}>
      <LivePreview style={liveCodePreview} />
      <div style={{ position: "relative", zIndex: 0 }}>
        {editable && (
          <CodeContainer>
            <LiveEditor onChange={onChange} style={liveEditorStyle} />
          </CodeContainer>
        )}
        <CopyButton code={editorCode} />
        {editable && <EditableNotice />}
      </div>
      {editable && <LiveError style={liveErrorStyle} />}
    </LiveProvider>
  );
}

export default ReactLiveBlock;
