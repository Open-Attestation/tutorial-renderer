import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface TemplateCertificate extends Document {
  recipient: string;
}

export const templateCertificate: TemplateCertificate = {
  recipient: "John Doe"
};
