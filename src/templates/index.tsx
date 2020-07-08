import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./template";
import styled from "@emotion/styled";
import { Template } from "./template/template";

export const registry: TemplateRegistry<any> = {
  custom: templates,
  red: [
    {
      id: "custom-red",
      label: "Red Custom Template",
      template: styled(Template)`
        color: red;
      `
    }
  ]
};
