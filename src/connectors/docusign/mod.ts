/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import CreateEnvelope from "./functions/create_envelope.ts";
import SendEnvelope from "./functions/send_envelope.ts";

const Docusign = {
  functions: {
    /**
     * @see The {@link https://api.slack.com/reference/connectors/docusign/create_envelope CreateEnvelope} documentation.
     */
    CreateEnvelope,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/docusign/send_envelope SendEnvelope} documentation.
     */
    SendEnvelope,
  },
} as const;

export default Docusign;