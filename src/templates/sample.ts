import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface TemplateCertificate extends Document {
  recipient: { name: string };
}

export const templateCertificate: TemplateCertificate = {
  recipient: { name: "John Doe" }
};
