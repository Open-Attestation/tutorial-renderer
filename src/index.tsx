import React from "react";
import ReactDOM from "react-dom";
import { FramedDocumentRenderer, PdfRenderer, utils } from "@govtechsg/decentralized-renderer-react-components";
import { registry } from "./templates";

ReactDOM.render(
  <FramedDocumentRenderer
    templateRegistry={registry}
    attachmentToComponent={attachment => {
      if (utils.getAttachmentMimeType(attachment) === "application/pdf") {
        // eslint-disable-next-line react/display-name
        return () => <PdfRenderer attachment={attachment} />;
      }
      return null;
    }}
  />,
  document.getElementById("root")
);
