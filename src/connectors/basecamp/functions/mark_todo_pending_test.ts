/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import MarkTodoPending from "./mark_todo_pending.ts";

Deno.test("MarkTodoPending can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_MarkTodoPending_slack_function",
    title: "Test MarkTodoPending",
    description: "This is a generated test to test MarkTodoPending",
  });
  testWorkflow.addStep(MarkTodoPending, {
    domain: "test",
    project_id: "test",
    todo_list_id: "test",
    todo_id: "test",
    basecamp_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A05UU55CFFA#/functions/mark_todo_pending");
  assertEquals(actual.inputs, {
    domain: "test",
    project_id: "test",
    todo_list_id: "test",
    todo_id: "test",
    basecamp_access_token: "test",
  });
});

Deno.test("All outputs of Slack function MarkTodoPending should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_MarkTodoPending_slack_function",
    title: "Test MarkTodoPending",
    description: "This is a generated test to test MarkTodoPending",
  });
  const step = testWorkflow.addStep(MarkTodoPending, {
    domain: "test",
    project_id: "test",
    todo_list_id: "test",
    todo_id: "test",
    basecamp_access_token: "test",
  });
  assertExists(step.outputs.id);
});
