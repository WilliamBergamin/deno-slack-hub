/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05KRJM7BH6#/functions/add_spreadsheet_row",
  title: "Add to spreadsheet",
  description: "Add a row to a Quip spreadsheet",
  input_parameters: {
    properties: {
      spreadsheet_id: {
        type: Schema.types.string,
        description: "Select a spreadsheet",
        title: "Spreadsheet",
      },
      sheet_name: {
        type: Schema.types.string,
        description: "Select a Sheet",
        title: "Sheet",
      },
      columns: {
        type: Schema.types.object,
        description: "Columns",
        title: "Columns",
      },
      quip_access_token: {
        type: Schema.slack.types.oauth2,
        title: "Whose account should be adding rows to the spreadsheet?",
      },
    },
    required: ["spreadsheet_id", "sheet_name", "columns", "quip_access_token"],
  },
  output_parameters: {
    properties: {
      spreadsheet_id: {
        type: Schema.types.string,
        description: "Spreadsheet ID",
        title: "Spreadsheet ID",
      },
      spreadsheet_url: {
        type: Schema.types.string,
        description: "Spreadsheet URL",
        title: "Spreadsheet URL",
      },
      title: {
        type: Schema.types.string,
        description: "Spreadsheet title",
        title: "Spreadsheet title",
      },
    },
    required: ["spreadsheet_id"],
  },
});
