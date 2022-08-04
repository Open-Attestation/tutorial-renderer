import { v2, v3 } from "@govtechsg/open-attestation";

export interface TemplateCertificate extends v2.OpenAttestationDocument {
  recipient: { name: string };
}

export const templateCertificate: TemplateCertificate = {
  recipient: { name: "John Doe" },
  issuers: [
    {
      name: "Hello",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "v2.example.com"
      }
    }
  ]
};

export interface TemplateCertificateV3 extends v3.OpenAttestationDocument {
  credentialSubject: {
    recipient: { name: string };
  };
}

export const templateCertificateV3: TemplateCertificateV3 = {
  "@context": [],
  issuer: {
    name: "Name",
    id: "id"
  },
  type: "Credential",
  credentialSubject: {
    recipient: { name: "John Doe" }
  },
  issuanceDate: "2020-01-02",
  openAttestationMetadata: {
    identityProof: {
      type: v3.IdentityProofType.DNSTxt,
      identifier: "v3.example.com"
    },
    proof: {
      value: "abcd",
      type: v3.ProofType.OpenAttestationProofMethod,
      method: v3.Method.DocumentStore,
      revocation: {
        type: v3.RevocationType.None
      }
    }
  }
};
