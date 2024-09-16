/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import AddWorksheetRow from "./functions/add_worksheet_row.ts";
import DeleteWorksheetRow from "./functions/delete_worksheet_row.ts";
import SelectWorksheetRow from "./functions/select_worksheet_row.ts";
import UpdateWorksheetRow from "./functions/update_worksheet_row.ts";

const MicrosoftExcel = {
  functions: {
    /**
     * @see The {@link https://api.slack.com/reference/connectors/microsoft.excel/add_worksheet_row AddWorksheetRow} documentation.
     */
    AddWorksheetRow,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/microsoft.excel/delete_worksheet_row DeleteWorksheetRow} documentation.
     */
    DeleteWorksheetRow,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/microsoft.excel/select_worksheet_row SelectWorksheetRow} documentation.
     */
    SelectWorksheetRow,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/microsoft.excel/update_worksheet_row UpdateWorksheetRow} documentation.
     */
    UpdateWorksheetRow,
  },
} as const;

export default MicrosoftExcel;
