import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./template";
import { templates as templatesV3 } from "./template-v3";

export const registry: TemplateRegistry<any> = {
  main: templates,
  mainV3: templatesV3
};
