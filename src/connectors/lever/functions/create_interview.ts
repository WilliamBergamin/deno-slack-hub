/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A063ZSXC719#/functions/create_interview",
  title: "Create an interview",
  description: "Create an interview for an opportunity",
  input_parameters: {
    properties: {
      opportunity_id: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "Opportunity",
      },
      perform_as: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "Perform this create on behalf of a specified user",
      },
      panel_id: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "Panel",
      },
      subject: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Interview subject",
      },
      location: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Interview location",
      },
      date: {
        type: Schema.slack.types.timestamp,
        description: "Enter text",
        title: "Interview date",
      },
      duration: {
        type: Schema.types.number,
        description: "Enter text",
        title: "Interview duration in minutes",
      },
      interviewers: {
        type: Schema.types.array,
        description: "Please select options",
        title: "Interviewers",
        items: { type: Schema.types.string },
      },
      feedback_template_id: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "Feedback template",
      },
      note: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Note for panel",
      },
    },
    required: [
      "opportunity_id",
      "perform_as",
      "panel_id",
      "date",
      "duration",
      "interviewers",
    ],
  },
  output_parameters: {
    properties: {
      interview_id: {
        type: Schema.types.string,
        description: "New interview ID",
        title: "Interview ID",
      },
      interview_url: {
        type: Schema.types.string,
        description: "interview URL",
        title: "Interview URL",
      },
    },
    required: ["interview_id"],
  },
});
