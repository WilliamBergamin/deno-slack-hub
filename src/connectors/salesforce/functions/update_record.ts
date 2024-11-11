/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A04T99UKKQE#/functions/update_record",
  title: "Update a record",
  description: "Update a Salesforce record",
  input_parameters: {
    properties: {
      salesforce_object_name: {
        type: Schema.types.string,
        description: "Select an option...",
        title: "Salesforce object",
      },
      record_id: { type: Schema.types.string, title: "Record" },
      updates: { type: Schema.types.object, title: "Updates" },
      salesforce_access_token: {
        type: Schema.slack.types.oauth2,
        title: "Salesforce Access Token",
      },
    },
    required: [
      "salesforce_object_name",
      "record_id",
      "salesforce_access_token",
    ],
  },
  output_parameters: {
    properties: {
      code: { type: Schema.types.integer, title: "Response" },
      record_url: { type: Schema.types.string, title: "Record URL" },
      record_id: { type: Schema.types.string, title: "Record ID" },
    },
    required: [],
  },
});
