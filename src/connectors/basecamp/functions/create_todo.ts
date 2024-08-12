/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05UU55CFFA#/functions/create_todo",
  title: "Create a to-do",
  input_parameters: {
    properties: {
      domain: {
        type: Schema.types.string,
        description: "Select an account",
        title: "Account",
      },
      project_id: {
        type: Schema.types.string,
        description: "Select a project",
        title: "Project",
      },
      todo_list_id: {
        type: Schema.types.string,
        description: "Select a to-do list",
        title: "To-do list",
      },
      content: {
        type: Schema.types.string,
        description: "Enter text",
        title: "To-do",
      },
      description: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Description",
      },
      assignee_id: {
        type: Schema.types.array,
        description: "Select a member",
        title: "Assignee",
        items: { type: Schema.types.string },
      },
      starts_on: {
        type: Schema.slack.types.date,
        description: "Select a date",
        title: "Starts on",
      },
      due_on: {
        type: Schema.slack.types.date,
        description: "Select a date",
        title: "Due on",
      },
      basecamp_access_token: {
        type: Schema.slack.types.oauth2,
        title: "Basecamp access token",
      },
    },
    required: [
      "domain",
      "project_id",
      "todo_list_id",
      "content",
      "basecamp_access_token",
    ],
  },
  output_parameters: {
    properties: {
      id: { type: Schema.types.string, title: "To-do ID" },
      content: { type: Schema.types.string, title: "To-do" },
      url: { type: Schema.types.string, title: "To-do URL" },
    },
    required: ["id", "content", "url"],
  },
});
