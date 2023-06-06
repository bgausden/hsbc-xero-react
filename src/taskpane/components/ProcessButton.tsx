import React from "react";
import { PrimaryButton } from "@fluentui/react/lib/Button";

/* global console */

export interface IButtonExampleProps {}

export const ProcessButton: React.FunctionComponent<IButtonExampleProps> = () => {
  return <PrimaryButton text="Process" onClick={_alertClicked} allowDisabledFocus />;
};

function _alertClicked(): void {
  console.log("Clicked");
}

export default ProcessButton;
