/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import UpdateRow from "./update_row.ts";

Deno.test("UpdateRow can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_UpdateRow_slack_function",
    title: "Test UpdateRow",
    description: "This is a generated test to test UpdateRow",
  });
  testWorkflow.addStep(UpdateRow, {
    sheet: "test",
    select_row: "test",
    updated_values: "test",
    smartsheet_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A05SEF35LQY#/functions/update_row");
  assertEquals(actual.inputs, {
    sheet: "test",
    select_row: "test",
    updated_values: "test",
    smartsheet_access_token: "test",
  });
});

Deno.test("All outputs of Slack function UpdateRow should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_UpdateRow_slack_function",
    title: "Test UpdateRow",
    description: "This is a generated test to test UpdateRow",
  });
  const step = testWorkflow.addStep(UpdateRow, {
    sheet: "test",
    select_row: "test",
    updated_values: "test",
    smartsheet_access_token: "test",
  });
  assertExists(step.outputs.smartsheet_url);
  assertExists(step.outputs.sheet_id);
  assertExists(step.outputs.row);
  assertExists(step.outputs.updated_column_values);
});