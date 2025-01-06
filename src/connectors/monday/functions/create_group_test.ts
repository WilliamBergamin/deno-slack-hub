/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import CreateGroup from "./create_group.ts";

Deno.test("CreateGroup can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateGroup_slack_function",
    title: "Test CreateGroup",
    description: "This is a generated test to test CreateGroup",
  });
  testWorkflow.addStep(CreateGroup, {
    monday_access_token: "test",
    board_id: "test",
    group_name: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A05U2T0F8PP#/functions/create_group");
  assertEquals(actual.inputs, {
    monday_access_token: "test",
    board_id: "test",
    group_name: "test",
  });
});

Deno.test("All outputs of Slack function CreateGroup should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateGroup_slack_function",
    title: "Test CreateGroup",
    description: "This is a generated test to test CreateGroup",
  });
  const step = testWorkflow.addStep(CreateGroup, {
    monday_access_token: "test",
    board_id: "test",
    group_name: "test",
  });
  assertExists(step.outputs.group_id);
  assertExists(step.outputs.group_name);
});
