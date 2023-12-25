/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import UnlockCard from "./unlock_card.ts";

Deno.test("UnlockCard can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_UnlockCard_slack_function",
    title: "Test UnlockCard",
    description: "This is a generated test to test UnlockCard",
  });
  testWorkflow.addStep(UnlockCard, {
    user_id: "test",
    card_id: "test",
    ramp_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A066PC9JKJ7#/functions/unlock_card");
  assertEquals(actual.inputs, {
    user_id: "test",
    card_id: "test",
    ramp_access_token: "test",
  });
});

Deno.test("All outputs of Slack function UnlockCard should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_UnlockCard_slack_function",
    title: "Test UnlockCard",
    description: "This is a generated test to test UnlockCard",
  });
  const step = testWorkflow.addStep(UnlockCard, {
    user_id: "test",
    card_id: "test",
    ramp_access_token: "test",
  });
  assertExists(step.outputs.deferred_task_id);
});