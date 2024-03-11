/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import UpdateIncident from "./update_incident.ts";

Deno.test("UpdateIncident can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_UpdateIncident_slack_function",
    title: "Test UpdateIncident",
    description: "This is a generated test to test UpdateIncident",
  });
  testWorkflow.addStep(UpdateIncident, { incident_id: "test" });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A05TG2LEXPV#/functions/update_incident");
  assertEquals(actual.inputs, { incident_id: "test" });
});

Deno.test("All outputs of Slack function UpdateIncident should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_UpdateIncident_slack_function",
    title: "Test UpdateIncident",
    description: "This is a generated test to test UpdateIncident",
  });
  const step = testWorkflow.addStep(UpdateIncident, { incident_id: "test" });
  assertExists(step.outputs.incident_id);
  assertExists(step.outputs.incident_url);
  assertExists(step.outputs.incident_description);
  assertExists(step.outputs.priority);
  assertExists(step.outputs.severity);
});
