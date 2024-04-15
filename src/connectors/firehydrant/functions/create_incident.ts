/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05TG2LEXPV#/functions/create_incident",
  title: "Create an incident",
  input_parameters: {
    properties: {
      name: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Incident name",
      },
      description: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Description",
      },
      priority: {
        type: Schema.types.string,
        description: "Select an option",
        title: "Priority",
      },
      severity: {
        type: Schema.types.string,
        description: "Select an option",
        title: "Severity",
      },
      team_ids: {
        type: Schema.types.array,
        description: "Select teams to be assigned",
        title: "Teams",
        items: { type: Schema.types.string },
      },
    },
    required: ["name"],
  },
  output_parameters: {
    properties: {
      incident_id: { type: Schema.types.string, title: "Incident ID" },
      incident_url: { type: Schema.types.string, title: "Incident URL" },
      incident_description: {
        type: Schema.types.string,
        title: "Incident description",
      },
      priority: { type: Schema.types.string, title: "Incident priority" },
      severity: { type: Schema.types.string, title: "Incident severity" },
    },
    required: [],
  },
});
