/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import CreatePhysicalCard from "./functions/create_physical_card.ts";
import CreateSpendRequest from "./functions/create_spend_request.ts";
import CreateVirtualCard from "./functions/create_virtual_card.ts";
import GetSpendRequest from "./functions/get_spend_request.ts";
import SuspendCard from "./functions/suspend_card.ts";
import TerminateCard from "./functions/terminate_card.ts";
import UnlockCard from "./functions/unlock_card.ts";

const Ramp = {
  functions: {
    /**
     * @see The {@link https://api.slack.com/reference/connectors/ramp/create_physical_card CreatePhysicalCard} documentation.
     */
    CreatePhysicalCard,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/ramp/create_spend_request CreateSpendRequest} documentation.
     */
    CreateSpendRequest,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/ramp/create_virtual_card CreateVirtualCard} documentation.
     */
    CreateVirtualCard,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/ramp/get_spend_request GetSpendRequest} documentation.
     */
    GetSpendRequest,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/ramp/suspend_card SuspendCard} documentation.
     */
    SuspendCard,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/ramp/terminate_card TerminateCard} documentation.
     */
    TerminateCard,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/ramp/unlock_card UnlockCard} documentation.
     */
    UnlockCard,
  },
} as const;

export default Ramp;
