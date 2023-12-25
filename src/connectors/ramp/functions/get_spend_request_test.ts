/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import GetSpendRequest from "./get_spend_request.ts";

Deno.test("GetSpendRequest can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_GetSpendRequest_slack_function",
    title: "Test GetSpendRequest",
    description: "This is a generated test to test GetSpendRequest",
  });
  testWorkflow.addStep(GetSpendRequest, {
    spend_request_id: "test",
    ramp_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A066PC9JKJ7#/functions/get_spend_request");
  assertEquals(actual.inputs, {
    spend_request_id: "test",
    ramp_access_token: "test",
  });
});

Deno.test("All outputs of Slack function GetSpendRequest should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_GetSpendRequest_slack_function",
    title: "Test GetSpendRequest",
    description: "This is a generated test to test GetSpendRequest",
  });
  const step = testWorkflow.addStep(GetSpendRequest, {
    spend_request_id: "test",
    ramp_access_token: "test",
  });
  assertExists(step.outputs.id);
  assertExists(step.outputs.display_name);
  assertExists(step.outputs.description);
  assertExists(step.outputs.icon);
  assertExists(step.outputs.interval);
  assertExists(step.outputs.amount_limit);
});