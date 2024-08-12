/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05UG19KZ3K#/functions/create_candidate_and_assign_to_job",
  title: "Create a candidate and assign to job",
  input_parameters: {
    properties: {
      job_id: {
        type: Schema.types.string,
        description: "Select a job",
        title: "Job",
      },
      first_name: {
        type: Schema.types.string,
        description: "Enter text",
        title: "First name",
      },
      last_name: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Last name",
      },
      email: {
        type: Schema.types.string,
        description: "Enter email",
        title: "Email",
      },
      phone_number: {
        type: Schema.types.string,
        description: "Enter phone number",
        title: "Phone number",
      },
    },
    required: ["job_id", "first_name", "last_name", "email"],
  },
  output_parameters: {
    properties: {
      candidate_id: { type: Schema.types.string, title: "Candidate ID" },
      first_name: { type: Schema.types.string, title: "First name" },
      last_name: { type: Schema.types.string, title: "Last name" },
      email: { type: Schema.types.string, title: "Email" },
      phone_number: { type: Schema.types.string, title: "Phone number" },
    },
    required: ["candidate_id", "first_name", "last_name", "email"],
  },
});
