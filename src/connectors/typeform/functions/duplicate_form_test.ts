/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import DuplicateForm from "./duplicate_form.ts";

Deno.test("DuplicateForm can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_DuplicateForm_slack_function",
    title: "Test DuplicateForm",
    description: "This is a generated test to test DuplicateForm",
  });
  testWorkflow.addStep(DuplicateForm, {
    form_id: "test",
    form_title: "test",
    typeform_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A05T70HT5E1#/functions/duplicate_form");
  assertEquals(actual.inputs, {
    form_id: "test",
    form_title: "test",
    typeform_access_token: "test",
  });
});

Deno.test("All outputs of Slack function DuplicateForm should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_DuplicateForm_slack_function",
    title: "Test DuplicateForm",
    description: "This is a generated test to test DuplicateForm",
  });
  const step = testWorkflow.addStep(DuplicateForm, {
    form_id: "test",
    form_title: "test",
    typeform_access_token: "test",
  });
  assertExists(step.outputs.form_id);
  assertExists(step.outputs.form_title);
  assertExists(step.outputs.form_url);
});
