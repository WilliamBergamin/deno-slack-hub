/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import AddToEvent from "./functions/add_to_event.ts";
import CreateEvent from "./functions/create_event.ts";

const GoogleCalendar = {
  functions: {
    /**
     * @see The {@link https://api.slack.com/reference/connectors/google.calendar/add_to_event AddToEvent} documentation.
     */
    AddToEvent,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/google.calendar/create_event CreateEvent} documentation.
     */
    CreateEvent,
  },
} as const;

export default GoogleCalendar;
