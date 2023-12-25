/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import SelectWorksheetRow from "./select_worksheet_row.ts";

Deno.test("SelectWorksheetRow can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_SelectWorksheetRow_slack_function",
    title: "Test SelectWorksheetRow",
    description: "This is a generated test to test SelectWorksheetRow",
  });
  testWorkflow.addStep(SelectWorksheetRow, {
    workbook: "test",
    worksheet_name: "test",
    column_name: "test",
    cell_value: "test",
    excel_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(
    actual.function_id,
    "A05UVANN1S4#/functions/select_worksheet_row",
  );
  assertEquals(actual.inputs, {
    workbook: "test",
    worksheet_name: "test",
    column_name: "test",
    cell_value: "test",
    excel_access_token: "test",
  });
});

Deno.test("All outputs of Slack function SelectWorksheetRow should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_SelectWorksheetRow_slack_function",
    title: "Test SelectWorksheetRow",
    description: "This is a generated test to test SelectWorksheetRow",
  });
  const step = testWorkflow.addStep(SelectWorksheetRow, {
    workbook: "test",
    worksheet_name: "test",
    column_name: "test",
    cell_value: "test",
    excel_access_token: "test",
  });
  assertExists(step.outputs.column_values);
  assertExists(step.outputs.row_index);
});