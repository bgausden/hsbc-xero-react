import React from "react";
import { Label } from "@fluentui/react/lib/Label";

interface FluentLabelProps {
  htmlFor: string;
  text: string;
}

const FluentLabel: React.FC<FluentLabelProps> = ({ htmlFor, text }) => {
  return <Label htmlFor={htmlFor}>{text}</Label>;
};

export default FluentLabel;
