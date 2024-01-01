/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A066PC9JKJ7#/functions/create_virtual_card",
  title: "Create new virtual card",
  description: "Create an async task to request for new virtual card.",
  input_parameters: {
    properties: {
      user_id: {
        type: Schema.types.string,
        description: "Select a user",
        title: "User",
      },
      card_name: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Card name",
      },
      amount_limit: {
        type: Schema.types.number,
        description: "Enter amount",
        title: "Amount",
      },
      interval: {
        type: Schema.types.string,
        description: "Select an option",
        title: "Frequency",
        enum: [
          "ANNUAL",
          "DAILY",
          "MONTHLY",
          "QUARTERLY",
          "TERTIARY",
          "TOTAL",
          "WEEKLY",
          "YEARLY",
        ],
      },
      ramp_access_token: {
        type: Schema.slack.types.oauth2,
        description: "Ramp Credential to use",
        title: "Ramp access token",
      },
    },
    required: [
      "user_id",
      "card_name",
      "amount_limit",
      "interval",
      "ramp_access_token",
    ],
  },
  output_parameters: {
    properties: {
      user_id: { type: Schema.types.string, title: "User ID" },
      deferred_task_id: {
        type: Schema.types.string,
        title: "Deferred task ID",
      },
    },
    required: ["user_id", "deferred_task_id"],
  },
});
