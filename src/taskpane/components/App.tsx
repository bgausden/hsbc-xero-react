import * as React from "react";
import { IStackItemProps, IStackProps, Stack, StackItem } from "@fluentui/react";
import Header from "./Header";
import Progress from "./Progress";
import FileLoader from "./FileLoader";
import ProcessButton from "./ProcessButton";
import MessageBar from "./MessageBar";
import { useState } from "react";

/* global Excel, require  */

export interface AppProps {
  title: string;
  isOfficeInitialized: boolean;
}

export interface AppState {
  messageBarVisible: boolean;
}

const verticalStackProps: IStackProps = {
  grow: true,
  styles: { root: { overflow: "hidden", width: "100%" } },
  tokens: { childrenGap: 10, padding: 10 },
};

const stackItemProps: IStackItemProps = {
  align: "center",
  styles: { root: { padding: 10 } },
};

/* export default class App extends React.Component<AppProps, AppState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      messageBarVisible: false,
    };
  }

  componentDidMount() {
    this.setState({
      messageBarVisible: true,
    });
  }

  click = async () => {
    try {
      await Excel.run(async (context) => {
        /**
         * Insert your Excel code here
         */
/* const range = context.workbook.getSelectedRange();

// Read the range address
range.load("address");

// Update the fill color
range.format.fill.color = "yellow";

await context.sync();
console.log(`The range address was ${range.address}.`);
      });
    } catch (error) {
  console.error(error);
}
  }; */

/* render() {
  const { title, isOfficeInitialized } = this.props;

  if (!isOfficeInitialized) {
    return (
      <Progress
        title={title}
        logo={require("./../../../assets/logo-filled.png")}
        message="Please sideload your addin to see app body."
      />
    );
  }

  return (
    <div className="ms-welcome">
      <Header logo={require("./../../../assets/logo-filled.png")} title={this.props.title} message="HSBC Xero" />
      <Stack {...verticalStackProps}>
        <StackItem {...stackItemProps}>
          <MessageBar />
        </StackItem>
        <StackItem {...stackItemProps}>
          <div className="ms-welcome__main">
            <h2 className="ms-font-xl ms-fontWeight-semilight ms-fontColor-neutralPrimary ms-u-slideUpIn20">
              {"Convert HSBC Tx CSV to Xero CSV"}
            </h2>
          </div>
        </StackItem>
        <StackItem {...stackItemProps}>
          <FileLoader />
        </StackItem>
        <StackItem {...stackItemProps} align="end">
          <ProcessButton />
        </StackItem>
      </Stack>
    </div>
  );
} */
/* } */

const App: React.FC<AppProps> = (props) => {
  const [state, setState] = useState<AppState>({
    messageBarVisible: false,
  });
  const { title, isOfficeInitialized } = props;

  if (!isOfficeInitialized) {
    return (
      <Progress
        title={title}
        logo={require("./../../../assets/logo-filled.png")}
        message="Please sideload your addin to see app body."
      />
    );
  }

  return (
    <div>
      <Header logo={require("./../../../assets/logo-filled.png")} title={title} message="HSBC Xero" />
      <Stack {...verticalStackProps}>
        <StackItem {...stackItemProps}>
          <MessageBar />
        </StackItem>
        <StackItem {...stackItemProps}>
          <div className="ms-welcome__main">
            <h2 className="ms-font-xl ms-fontWeight-semilight ms-fontColor-neutralPrimary ms-u-slideUpIn20">
              {"Convert HSBC Tx CSV to Xero CSV"}
            </h2>
          </div>
        </StackItem>
        <StackItem {...stackItemProps}>
          <FileLoader />
        </StackItem>
        <StackItem {...stackItemProps} align="end">
          <ProcessButton />
        </StackItem>
      </Stack>
    </div>
  );
};

export default App;
