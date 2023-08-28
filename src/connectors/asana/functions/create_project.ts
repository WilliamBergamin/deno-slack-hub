/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05KUFPF86S#/functions/create_project",
  title: "Create a project",
  description: "Creates an Asana project",
  input_parameters: {
    properties: {
      workspace_gid: { type: Schema.types.string, title: "Workspace" },
      team: { type: Schema.types.string, title: "Team" },
      project_name: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Project name",
      },
      start_on: { type: Schema.slack.types.date, title: "Start on" },
      due_on: { type: Schema.slack.types.date, title: "Due on" },
      description: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Description",
      },
      collaborators: {
        type: Schema.types.array,
        title: "Collaborators",
        items: { type: Schema.slack.types.user_id },
      },
      asana_access_token: {
        type: Schema.slack.types.oauth2,
        description: "Asana credential to use",
        title: "Asana Access Token",
      },
    },
    required: ["workspace_gid", "team", "project_name"],
  },
  output_parameters: {
    properties: {
      team: {
        type: Schema.types.string,
        description: "The team the project is shared with.",
        title: "Team",
      },
      workspace: {
        type: Schema.types.string,
        description: "The workspace the project exists within",
        title: "Workspace",
      },
      project_name: {
        type: Schema.types.string,
        description: "The name of the project",
        title: "Project name",
      },
      description: {
        type: Schema.types.string,
        description: "The description for the project",
        title: "Description",
      },
      created_at: {
        type: Schema.types.string,
        description: "The datetime the project was created at",
        title: "Created at",
      },
      start_on: {
        type: Schema.types.string,
        description: "The datetime the project is to be started on",
        title: "Start on",
      },
      due_on: {
        type: Schema.types.string,
        description: "The datetime the project is due on",
        title: "Due on",
      },
      permalink_url: {
        type: Schema.types.string,
        description: "Link for the created project",
        title: "Link to project",
      },
      collaborator_emails: {
        type: Schema.types.array,
        description: "Emails of the Collaborators with comma separated",
        title: "Collaborator emails",
        items: { type: Schema.types.string },
      },
    },
    required: ["project_name", "permalink_url"],
  },
});
