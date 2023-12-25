/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import AddWorksheetRow from "./add_worksheet_row.ts";

Deno.test("AddWorksheetRow can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_AddWorksheetRow_slack_function",
    title: "Test AddWorksheetRow",
    description: "This is a generated test to test AddWorksheetRow",
  });
  testWorkflow.addStep(AddWorksheetRow, {
    workbook: "test",
    worksheet_name: "test",
    columns: "test",
    excel_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A05UVANN1S4#/functions/add_worksheet_row");
  assertEquals(actual.inputs, {
    workbook: "test",
    worksheet_name: "test",
    columns: "test",
    excel_access_token: "test",
  });
});

Deno.test("All outputs of Slack function AddWorksheetRow should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_AddWorksheetRow_slack_function",
    title: "Test AddWorksheetRow",
    description: "This is a generated test to test AddWorksheetRow",
  });
  const step = testWorkflow.addStep(AddWorksheetRow, {
    workbook: "test",
    worksheet_name: "test",
    columns: "test",
    excel_access_token: "test",
  });
  assertExists(step.outputs.workbook_id);
  assertExists(step.outputs.worksheet_url);
  assertExists(step.outputs.worksheet_name);
});