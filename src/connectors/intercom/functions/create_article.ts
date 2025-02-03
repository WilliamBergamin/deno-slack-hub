/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05S4UJGUQK#/functions/create_article",
  title: "Create an article",
  input_parameters: {
    properties: {
      title: {
        type: Schema.types.string,
        description: "Enter title",
        title: "Title",
      },
      description: {
        type: Schema.types.string,
        description: "Enter description",
        title: "Description",
      },
      body: {
        type: Schema.types.string,
        description: "Enter body",
        title: "Body",
      },
      author_id: {
        type: Schema.types.string,
        description: "Select an author",
        title: "Author",
      },
      state: {
        type: Schema.types.string,
        title: "State",
        enum: ["published", "draft"],
      },
      intercom_access_token: {
        type: Schema.slack.types.oauth2,
        title: "Intercom access token",
      },
    },
    required: [
      "title",
      "description",
      "body",
      "author_id",
      "state",
      "intercom_access_token",
    ],
  },
  output_parameters: {
    properties: {
      article_id: { type: Schema.types.string, title: "Article ID" },
      title: { type: Schema.types.string, title: "Title" },
      description: { type: Schema.types.string, title: "Description" },
      body: { type: Schema.types.string, title: "Body" },
      state: { type: Schema.types.string, title: "State" },
      article_url: { type: Schema.types.string, title: "Article URL" },
    },
    required: [],
  },
});
