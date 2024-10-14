/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import CancelBuild from "./functions/cancel_build.ts";
import RestartBuild from "./functions/restart_build.ts";
import TriggerBuild from "./functions/trigger_build.ts";

const Travisci = {
  functions: {
    /**
     * @see The {@link https://api.slack.com/reference/connectors/travisci/cancel_build CancelBuild} documentation.
     */
    CancelBuild,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/travisci/restart_build RestartBuild} documentation.
     */
    RestartBuild,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/travisci/trigger_build TriggerBuild} documentation.
     */
    TriggerBuild,
  },
} as const;

export default Travisci;
