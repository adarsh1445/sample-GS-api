import { Icontact } from "../controllers/contactcontroller";
import { google } from "googleapis"

export const newcontactData = async (contact: Icontact) => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: "./crendentials.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });
    const spreadsheetId = "1Rq9sn3FokX2URum9wHPitRuKfAxQHx3_9yk3L27Sz7A";
    const range = "Sheet1!A:D";

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[contact.name, contact.email, contact.phoneNumber, contact.message]],
      },
    });

    console.log(`${response.data.updates?.updatedCells} cells added`);
  } catch (error: any) {
    console.error("Google Sheets API returned an error:", error);
    throw new Error("Internal Server Error" + error.message);
  }
};
