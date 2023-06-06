import * as React from "react";
import { MessageBar, MessageBarType } from "@fluentui/react/lib/MessageBar";
import { Link } from "@fluentui/react/lib/Link";
import { MessageBarButton } from "@fluentui/react/lib/Button";

const SuccessExample = () => (
  <MessageBar
    actions={
      <div>
        <MessageBarButton>OK</MessageBarButton>
      </div>
    }
    messageBarType={MessageBarType.success}
    isMultiline={false}
  >
    Success MessageBar with single line and action buttons.
    <Link href="www.bing.com" target="_blank" underline>
      Visit our website.
    </Link>
  </MessageBar>
);

const MessageBarBasicExample: React.FunctionComponent = () => {
  return <SuccessExample />;
};

export default MessageBarBasicExample;
