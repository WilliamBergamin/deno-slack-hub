/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05QNBAB4UA#/functions/create_folder",
  title: "Create a folder",
  input_parameters: {
    properties: {
      box_access_token: {
        type: Schema.slack.types.oauth2,
        title: "Box Access Token",
      },
      name: {
        type: Schema.types.string,
        description: "Enter a name",
        title: "Folder name",
      },
      parent_folder_id: {
        type: Schema.types.string,
        description: "Select a folder",
        title: "Parent folder",
      },
    },
    required: ["box_access_token", "name"],
  },
  output_parameters: {
    properties: {
      id: { type: Schema.types.string, title: "Folder ID" },
      web_link: { type: Schema.types.string, title: "Folder URL" },
    },
    required: ["id", "web_link"],
  },
});
