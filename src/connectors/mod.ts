/** This file was autogenerated on Mon Oct 09 2023. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import Asana from "./asana/mod.ts";
import AtlassianBitbucket from "./atlassian.bitbucket/mod.ts";
import Calendly from "./calendly/mod.ts";
import Clickup from "./clickup/mod.ts";
import Docusign from "./docusign/mod.ts";
import Giphy from "./giphy/mod.ts";
import GithubCloud from "./github.cloud/mod.ts";
import Gitlab from "./gitlab/mod.ts";
import GoogleCalendar from "./google.calendar/mod.ts";
import GoogleMail from "./google.mail/mod.ts";
import GoogleMeet from "./google.meet/mod.ts";
import GoogleSheets from "./google.sheets/mod.ts";
import GoogleTasks from "./google.tasks/mod.ts";
import GreenhouseRecruiting from "./greenhouse.recruiting/mod.ts";
import Guru from "./guru/mod.ts";
import Intercom from "./intercom/mod.ts";
import JiraCloud from "./jira.cloud/mod.ts";
import Lucid from "./lucid/mod.ts";
import MicrosoftOnedrive from "./microsoft.onedrive/mod.ts";
import MicrosoftOutlookCalendar from "./microsoft.outlook.calendar/mod.ts";
import MicrosoftOutlookEmail from "./microsoft.outlook.email/mod.ts";
import MicrosoftTeams from "./microsoft.teams/mod.ts";
import Miro from "./miro/mod.ts";
import Notion from "./notion/mod.ts";
import Pagerduty from "./pagerduty/mod.ts";
import Salesforce from "./salesforce/mod.ts";
import Smartsheet from "./smartsheet/mod.ts";
import Synk from "./synk/mod.ts";
import Webex from "./webex/mod.ts";
import Wrike from "./wrike/mod.ts";
import Zoom from "./zoom/mod.ts";

const Connectors = {
  Asana,
  AtlassianBitbucket,
  Calendly,
  Clickup,
  Docusign,
  Giphy,
  GithubCloud,
  Gitlab,
  GoogleCalendar,
  GoogleMail,
  GoogleMeet,
  GoogleSheets,
  GoogleTasks,
  GreenhouseRecruiting,
  Guru,
  Intercom,
  JiraCloud,
  Lucid,
  MicrosoftOnedrive,
  MicrosoftOutlookCalendar,
  MicrosoftOutlookEmail,
  MicrosoftTeams,
  Miro,
  Notion,
  Pagerduty,
  Salesforce,
  Smartsheet,
  Synk,
  Webex,
  Wrike,
  Zoom,
} as const;

export default Connectors;
