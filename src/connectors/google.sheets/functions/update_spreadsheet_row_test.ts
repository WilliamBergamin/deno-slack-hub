/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import UpdateSpreadsheetRow from "./update_spreadsheet_row.ts";

Deno.test("UpdateSpreadsheetRow can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_UpdateSpreadsheetRow_slack_function",
    title: "Test UpdateSpreadsheetRow",
    description: "This is a generated test to test UpdateSpreadsheetRow",
  });
  testWorkflow.addStep(UpdateSpreadsheetRow, {
    spreadsheet_id: "test",
    sheet_title: "test",
    column_name: "test",
    cell_value: "test",
    updated_values: "test",
    google_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(
    actual.function_id,
    "A04MG80N5CY#/functions/update_spreadsheet_row",
  );
  assertEquals(actual.inputs, {
    spreadsheet_id: "test",
    sheet_title: "test",
    column_name: "test",
    cell_value: "test",
    updated_values: "test",
    google_access_token: "test",
  });
});
