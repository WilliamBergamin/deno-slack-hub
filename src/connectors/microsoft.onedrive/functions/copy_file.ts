/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05QGK4DF8A#/functions/copy_file",
  title: "Copy a file",
  input_parameters: {
    properties: {
      onedrive_access_token: {
        type: Schema.slack.types.oauth2,
        description: "Microsoft credential to use",
        title: "Microsoft access token",
      },
      file_id: {
        type: Schema.types.string,
        description: "Select file",
        title: "File ID",
      },
      new_file_name: {
        type: Schema.types.string,
        description: "Enter text",
        title: "New file name",
      },
    },
    required: ["onedrive_access_token", "file_id", "new_file_name"],
  },
  output_parameters: {
    properties: {
      response: { type: Schema.types.string, title: "Response" },
      new_file_name: { type: Schema.types.string, title: "New file name" },
      file_url: { type: Schema.types.string, title: "File URL" },
    },
    required: ["response"],
  },
});
