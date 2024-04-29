/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import CreateCard from "./create_card.ts";

Deno.test("CreateCard can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateCard_slack_function",
    title: "Test CreateCard",
    description: "This is a generated test to test CreateCard",
  });
  testWorkflow.addStep(CreateCard, {
    collection_id: "test",
    card_title: "test",
    share_status: "test",
    guru_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A05RT1HSRRU#/functions/create_card");
  assertEquals(actual.inputs, {
    collection_id: "test",
    card_title: "test",
    share_status: "test",
    guru_access_token: "test",
  });
});

Deno.test("All outputs of Slack function CreateCard should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateCard_slack_function",
    title: "Test CreateCard",
    description: "This is a generated test to test CreateCard",
  });
  const step = testWorkflow.addStep(CreateCard, {
    collection_id: "test",
    card_title: "test",
    share_status: "test",
    guru_access_token: "test",
  });
  assertExists(step.outputs.card_id);
  assertExists(step.outputs.card_title);
  assertExists(step.outputs.card_url);
  assertExists(step.outputs.verification_state);
});
