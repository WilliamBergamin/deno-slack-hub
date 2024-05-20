/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import SendEmail from "./send_email.ts";

Deno.test("SendEmail can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_SendEmail_slack_function",
    title: "Test SendEmail",
    description: "This is a generated test to test SendEmail",
  });
  testWorkflow.addStep(SendEmail, {
    subject: "test",
    email_body: "test",
    outlook_email_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A05Q22Z3N8P#/functions/send_email");
  assertEquals(actual.inputs, {
    subject: "test",
    email_body: "test",
    outlook_email_access_token: "test",
  });
});
