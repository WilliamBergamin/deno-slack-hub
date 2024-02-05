/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import GetForm from "./get_form.ts";

Deno.test("GetForm can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_GetForm_slack_function",
    title: "Test GetForm",
    description: "This is a generated test to test GetForm",
  });
  testWorkflow.addStep(GetForm, {
    form_id: "test",
    typeform_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A05T70HT5E1#/functions/get_form");
  assertEquals(actual.inputs, {
    form_id: "test",
    typeform_access_token: "test",
  });
});

Deno.test("All outputs of Slack function GetForm should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_GetForm_slack_function",
    title: "Test GetForm",
    description: "This is a generated test to test GetForm",
  });
  const step = testWorkflow.addStep(GetForm, {
    form_id: "test",
    typeform_access_token: "test",
  });
  assertExists(step.outputs.form);
  assertExists(step.outputs.form_id);
  assertExists(step.outputs.form_title);
  assertExists(step.outputs.form_url);
  assertExists(step.outputs.form_fields);
});
