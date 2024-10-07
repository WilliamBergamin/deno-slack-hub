/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import SendSms from "./functions/send_sms.ts";

const Twilio = {
  functions: {
    /**
     * @see The {@link https://api.slack.com/reference/connectors/twilio/send_sms SendSms} documentation.
     */
    SendSms,
  },
} as const;

export default Twilio;
