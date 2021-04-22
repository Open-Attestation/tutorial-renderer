import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { DriverLicenseDocument } from "./sample-credential";

const style = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    color: #0099cc;
  }
  .class-item {
    padding-top: 10px;
  }
`;

export const Template: FunctionComponent<TemplateProps<DriverLicenseDocument>> = ({ document }) => {
  const { id, name, class: classes } = document.credentialSubject;

  return (
    <div css={style} id="custom-template">
      <h4>{document.name}</h4>
      <small>{id}</small>
      <div>Name: {name}</div>
      {classes.map(({ type, effectiveDate }) => (
        <div className="class-item">
          <div>Type: {type}</div>
          <div>Effective Date: {new Date(effectiveDate).toDateString()}</div>
        </div>
      ))}
    </div>
  );
};
