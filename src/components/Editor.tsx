import React from "react";
import MDEditor, {
  commands,
  ICommand,
  TextState,
  TextAreaTextApi,
} from "@uiw/react-md-editor";

export default function EditorMarkdown() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div data-color-mode="light">
      <MDEditor
        value={value}
        onChange={val => {
          setValue(val!);
        }}
      />
    </div>
  );
}
