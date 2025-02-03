/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import GetIncident from "./get_incident.ts";

Deno.test("GetIncident can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_GetIncident_slack_function",
    title: "Test GetIncident",
    description: "This is a generated test to test GetIncident",
  });
  testWorkflow.addStep(GetIncident, {
    incident_number: "test",
    servicenow_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A07AYPT9X4P#/functions/get_incident");
  assertEquals(actual.inputs, {
    incident_number: "test",
    servicenow_access_token: "test",
  });
});

Deno.test("All outputs of Slack function GetIncident should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_GetIncident_slack_function",
    title: "Test GetIncident",
    description: "This is a generated test to test GetIncident",
  });
  const step = testWorkflow.addStep(GetIncident, {
    incident_number: "test",
    servicenow_access_token: "test",
  });
  assertExists(step.outputs.incident_sys_id);
  assertExists(step.outputs.incident_short_description);
  assertExists(step.outputs.incident_state);
  assertExists(step.outputs.incident_number);
  assertExists(step.outputs.incident_priority);
  assertExists(step.outputs.incident_url);
  assertExists(step.outputs.incident);
  assertExists(step.outputs.timestamp_started);
  assertExists(step.outputs.timestamp_completed);
});
