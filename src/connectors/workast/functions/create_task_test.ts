/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import CreateTask from "./create_task.ts";

Deno.test("CreateTask can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateTask_slack_function",
    title: "Test CreateTask",
    description: "This is a generated test to test CreateTask",
  });
  testWorkflow.addStep(CreateTask, {
    workast_access_token: "test",
    space_id: "test",
    summary: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A0630UXR0AE#/functions/create_task");
  assertEquals(actual.inputs, {
    workast_access_token: "test",
    space_id: "test",
    summary: "test",
  });
});

Deno.test("All outputs of Slack function CreateTask should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateTask_slack_function",
    title: "Test CreateTask",
    description: "This is a generated test to test CreateTask",
  });
  const step = testWorkflow.addStep(CreateTask, {
    workast_access_token: "test",
    space_id: "test",
    summary: "test",
  });
  assertExists(step.outputs.id);
  assertExists(step.outputs.task_url);
  assertExists(step.outputs.status);
});
