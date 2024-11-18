/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import AddANote from "./functions/add_a_note.ts";
import CreateIncident from "./functions/create_incident.ts";
import EscalateIncident from "./functions/escalate_incident.ts";
import ResolveIncident from "./functions/resolve_incident.ts";
import SendStatusUpdate from "./functions/send_status_update.ts";

const Pagerduty = {
  functions: {
    /**
     * @see The {@link https://api.slack.com/reference/connectors/pagerduty/add_a_note AddANote} documentation.
     */
    AddANote,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/pagerduty/create_incident CreateIncident} documentation.
     */
    CreateIncident,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/pagerduty/escalate_incident EscalateIncident} documentation.
     */
    EscalateIncident,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/pagerduty/resolve_incident ResolveIncident} documentation.
     */
    ResolveIncident,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/pagerduty/send_status_update SendStatusUpdate} documentation.
     */
    SendStatusUpdate,
  },
} as const;

export default Pagerduty;
