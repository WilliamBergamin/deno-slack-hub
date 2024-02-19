/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05RF94AFB3#/functions/update_feature_flag_state",
  title: "Update a feature flag's state",
  description: "Set a flag's state to ON or OFF",
  input_parameters: {
    properties: {
      project_key: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "Project",
      },
      feature_flag_key: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "Feature flag",
      },
      environment_key: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "Environment key",
      },
      feature_flag_state: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "Feature flag state",
        enum: ["turnFlagOn", "turnFlagOff"],
      },
      comment: {
        type: Schema.types.string,
        description: "Add comments",
        title: "Comment",
      },
      launchdarkly_access_token: {
        type: Schema.slack.types.oauth2,
        description: "LaunchDarkly Credential to use",
        title: "LaunchDarkly access token",
      },
    },
    required: [
      "project_key",
      "feature_flag_key",
      "environment_key",
      "feature_flag_state",
      "launchdarkly_access_token",
    ],
  },
  output_parameters: {
    properties: {
      name: {
        type: Schema.types.string,
        description: "Feature flag name",
        title: "Feature flag name",
      },
      description: {
        type: Schema.types.string,
        description: "Feature flag description",
        title: "Feature flag description",
      },
      key: {
        type: Schema.types.string,
        description: "Feature flag key",
        title: "Feature flag key",
      },
      environment_key: {
        type: Schema.types.string,
        description: "Environment key",
        title: "Environment key",
      },
      comment: {
        type: Schema.types.string,
        description: "Comment",
        title: "Feature flag comment",
      },
      feature_flag_state: {
        type: Schema.types.string,
        description: "Feature flag state",
        title: "Feature flag state",
      },
    },
    required: ["name"],
  },
});
