/** This file was autogenerated on Mon Sep 18 2023. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import Asana from "./asana/mod.ts";
import Calendly from "./calendly/mod.ts";
import Docusign from "./docusign/mod.ts";
import Giphy from "./giphy/mod.ts";
import GithubCloud from "./github.cloud/mod.ts";
import Gitlab from "./gitlab/mod.ts";
import GoogleSheets from "./google.sheets/mod.ts";
import JiraCloud from "./jira.cloud/mod.ts";
import Lucid from "./lucid/mod.ts";
import Pagerduty from "./pagerduty/mod.ts";
import Salesforce from "./salesforce/mod.ts";
import Webex from "./webex/mod.ts";
import Wrike from "./wrike/mod.ts";
import Zoom from "./zoom/mod.ts";

const Connectors = {
  Asana,
  Calendly,
  Docusign,
  Giphy,
  GithubCloud,
  Gitlab,
  GoogleSheets,
  JiraCloud,
  Lucid,
  Pagerduty,
  Salesforce,
  Webex,
  Wrike,
  Zoom,
} as const;

export default Connectors;
