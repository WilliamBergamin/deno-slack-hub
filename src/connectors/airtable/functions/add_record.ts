/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05UG04QC4X#/functions/add_record",
  title: "Add a record",
  input_parameters: {
    properties: {
      base_id: {
        type: Schema.types.string,
        description: "Select a base",
        title: "Base",
      },
      table_id: {
        type: Schema.types.string,
        description: "Select a table",
        title: "Table",
      },
      column_values: { type: Schema.types.object, title: "Columns" },
      airtable_access_token: {
        type: Schema.slack.types.oauth2,
        title: "Airtable access token",
      },
    },
    required: ["base_id", "table_id", "column_values", "airtable_access_token"],
  },
  output_parameters: {
    properties: {
      record_id: { type: Schema.types.string, title: "Record ID" },
      record_url: { type: Schema.types.string, title: "Record URL" },
    },
    required: [],
  },
});