import { IStackProps, Stack, StackItem } from "@fluentui/react/lib/Stack";
import { DefaultButton } from "@fluentui/react/lib/Button";
import React, { useRef, useState } from "react";
import FluentLabel from "./FluentLabel";

/* global console */

const horizontalStackProps: IStackProps = {
  //grow: true,
  horizontal: true,
  styles: { root: { overflow: "hidden", width: "100%" } },
  tokens: { childrenGap: 10, padding: 10 },
};

const FileLoader = () => {
  const [fileContents, setFileContents] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setFileContents(event.target.result as string);
      console.log(fileContents);
    };
    reader.readAsText(file);
  };

  return (
    <>
      <Stack {...horizontalStackProps}>
        <StackItem>
          <FluentLabel htmlFor="fileInput" text="Choose a file:" />
        </StackItem>
        <StackItem>
          <DefaultButton text="Browse" onClick={() => fileInputRef.current?.click()} />
        </StackItem>
      </Stack>
      <Stack>
        <StackItem>
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            onChange={handleFileChange}
            ref={fileInputRef}
            className="hidden"
          />
        </StackItem>
      </Stack>
    </>
  );
};

export default FileLoader;
