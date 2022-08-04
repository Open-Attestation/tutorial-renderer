import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { TemplateCertificateV3 } from "../sample";
import { Trophy } from "../../trophy";

const style = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    color: #0099cc;
  }
  .recipient {
    font-weight: bold;
    color: #ff9933;
  }
  .issuer {
    font-size: 0.7rem;
  }
`;

export const Template: FunctionComponent<TemplateProps<TemplateCertificateV3>> = ({ document }) => {
  const issuer = document.openAttestationMetadata.identityProof.identifier;
  const recipient = document.credentialSubject.recipient.name;

  return (
    <div css={style} id="custom-template">
      <Trophy />
      <h4>🎉🎉 Congratulations 🎉🎉</h4>
      <div>You have successfully finished the v3 OpenAttestation tutorial by issuing this certificate to</div>
      <div className="recipient">{recipient}</div>
      <div className="issuer">Issued by {issuer}</div>
    </div>
  );
};
