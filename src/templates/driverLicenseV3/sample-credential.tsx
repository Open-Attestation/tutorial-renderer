import { v3 } from "@govtechsg/open-attestation";

export interface DriverLicenseDocument extends v3.OpenAttestationDocument {
  credentialSubject: {
    id: string;
    name: string;
    class: { type: string; effectiveDate: string }[];
  };
}

export const driverLicense: DriverLicenseDocument = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://schemata.openattestation.com/com/openattestation/1.0/DrivingLicenceCredential.json",
    "https://schemata.openattestation.com/com/openattestation/1.0/OpenAttestation.v3.json",
    "https://schemata.openattestation.com/com/openattestation/1.0/CustomContext.json"
  ],
  reference: "SERIAL_NUMBER_123",
  name: "Republic of Singapore Driving Licence",
  issuanceDate: "2010-01-01T19:23:24Z",
  validFrom: "2010-01-01T19:23:24Z",
  issuer: {
    id: "https://example.com",
    name: "DEMO STORE"
  },
  type: ["VerifiableCredential", "DrivingLicenceCredential"],
  credentialSubject: {
    id: "did:example:JOHN_DOE_DID",
    name: "John Doe",
    class: [
      {
        type: "3",
        effectiveDate: "2010-01-01T19:23:24Z"
      },
      {
        type: "3A",
        effectiveDate: "2010-01-01T19:23:24Z"
      }
    ]
  },
  openAttestationMetadata: {
    template: {
      name: "CUSTOM_TEMPLATE",
      type: v3.TemplateType.EmbeddedRenderer,
      url: "https://localhost:3000/renderer"
    },
    proof: {
      type: v3.ProofType.OpenAttestationProofMethod,
      method: v3.Method.Did,
      value: "did:ethr:0xE712878f6E8d5d4F9e87E10DA604F9cB564C9a89",
      revocation: {
        type: v3.RevocationType.None
      }
    },
    identityProof: {
      type: v3.IdentityProofType.DNSDid,
      identifier: "did:ethr:0xE712878f6E8d5d4F9e87E10DA604F9cB564C9a89"
    }
  },
  attachments: [
    {
      fileName: "sample.pdf",
      mimeType: "application/pdf",
      data: "BASE64_ENCODED_FILE"
    }
  ]
};
