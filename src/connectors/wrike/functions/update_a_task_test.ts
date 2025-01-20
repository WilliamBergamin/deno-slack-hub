/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import UpdateATask from "./update_a_task.ts";

Deno.test("UpdateATask can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_UpdateATask_slack_function",
    title: "Test UpdateATask",
    description: "This is a generated test to test UpdateATask",
  });
  testWorkflow.addStep(UpdateATask, {
    task: "test",
    wrike_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A05MDPYMGJC#/functions/update_a_task");
  assertEquals(actual.inputs, { task: "test", wrike_access_token: "test" });
});

Deno.test("All outputs of Slack function UpdateATask should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_UpdateATask_slack_function",
    title: "Test UpdateATask",
    description: "This is a generated test to test UpdateATask",
  });
  const step = testWorkflow.addStep(UpdateATask, {
    task: "test",
    wrike_access_token: "test",
  });
  assertExists(step.outputs.task_id);
  assertExists(step.outputs.account_id);
  assertExists(step.outputs.title);
  assertExists(step.outputs.status);
  assertExists(step.outputs.assignees);
});
