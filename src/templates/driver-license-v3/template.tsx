import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { DriverLicenseDocument } from "./sample-credential";
import background from "./images/driver-license-background.png";
import {PrintWatermark} from '../../print-watermark';

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
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const Template: FunctionComponent<TemplateProps<DriverLicenseDocument>> = ({ document }) => {
  const { name, class: classes, licenseNumber, birthDate } = document.credentialSubject;
  const splitBirthDate = birthDate.split("-").map(data => parseInt(data, 10));
  const splitIssuedDate = document.issuanceDate
    .split("T")[0]
    .split("-")
    .map(data => parseInt(data, 10));

  return (
    <div css={style} id="custom-template">
      <h4>{document.name}</h4>
      <div
        css={css`
          width: 600px;
          height: 350px;
          position: relative;
          background-image: url(${background});
          background-repeat: no-repeat;
          background-size: 600px;
          height: 350px;
          color: black;
          .license-number {
            position: absolute;
            text-transform: uppercase;
            font-size: 22px;
            top: 68px;
            left: 330px;
            text-shadow: 1.5px 0 black; // make bolder
            font-weight: bold;
            letter-spacing: 8px;
          }
          .license-driver-name {
            text-shadow: 1.5px 0 black; // make bolder
            position: absolute;
            text-transform: uppercase;
            font-size: 16px;
            top: 120px;
            left: 250px;
            font-weight: bold;
            letter-spacing: 2px;
          }
          .license-driver-birth-date {
            text-shadow: 1px 0 black; // make bolder
            position: absolute;
            font-size: 12px;
            top: 198px;
            left: 310px;
            font-weight: bold;
            letter-spacing: 2px;
          }
          .license-issuance-date {
            text-shadow: 1px 0 black; // make bolder
            position: absolute;
            font-size: 12px;
            top: 220px;
            left: 310px;
            font-weight: bold;
            letter-spacing: 2px;
          }
        `}
      >
        <PrintWatermark />
        <span className="license-number">{licenseNumber}</span>
        <span className="license-driver-name">{name}</span>
        <span className="license-driver-birth-date">
          {splitBirthDate[2]} {months[splitBirthDate[1] - 1]} {splitBirthDate[0]}
        </span>
        <span className="license-issuance-date">
          {splitIssuedDate[2]} {months[splitIssuedDate[1] - 1]} {splitIssuedDate[0]}
        </span>
      </div>
      {classes.map(({ type, effectiveDate }, key) => (
        <div className="class-item" key={key}>
          <div>Type: {type}</div>
          <div>Effective Date: {new Date(effectiveDate).toDateString()}</div>
        </div>
      ))}
    </div>
  );
};
