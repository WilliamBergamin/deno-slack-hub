/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import CreateItem from "./create_item.ts";

Deno.test("CreateItem can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateItem_slack_function",
    title: "Test CreateItem",
    description: "This is a generated test to test CreateItem",
  });
  testWorkflow.addStep(CreateItem, {
    monday_access_token: "test",
    board_id: "test",
    item_name: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A05U2T0F8PP#/functions/create_item");
  assertEquals(actual.inputs, {
    monday_access_token: "test",
    board_id: "test",
    item_name: "test",
  });
});

Deno.test("All outputs of Slack function CreateItem should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateItem_slack_function",
    title: "Test CreateItem",
    description: "This is a generated test to test CreateItem",
  });
  const step = testWorkflow.addStep(CreateItem, {
    monday_access_token: "test",
    board_id: "test",
    item_name: "test",
  });
  assertExists(step.outputs.item_id);
  assertExists(step.outputs.item_name);
});
