/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import UpdateTask from "./update_task.ts";

Deno.test("UpdateTask can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_UpdateTask_slack_function",
    title: "Test UpdateTask",
    description: "This is a generated test to test UpdateTask",
  });
  testWorkflow.addStep(UpdateTask, { workspace_gid: "test", task_gid: "test" });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A05KUFPF86S#/functions/update_task");
  assertEquals(actual.inputs, { workspace_gid: "test", task_gid: "test" });
});

Deno.test("All outputs of Slack function UpdateTask should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_UpdateTask_slack_function",
    title: "Test UpdateTask",
    description: "This is a generated test to test UpdateTask",
  });
  const step = testWorkflow.addStep(UpdateTask, {
    workspace_gid: "test",
    task_gid: "test",
  });
  assertExists(step.outputs.assignee);
  assertExists(step.outputs.task_name);
  assertExists(step.outputs.start_at);
  assertExists(step.outputs.due_at);
  assertExists(step.outputs.description);
  assertExists(step.outputs.created_at);
  assertExists(step.outputs.permalink_url);
});
