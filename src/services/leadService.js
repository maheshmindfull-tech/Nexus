/**
 * Lead capture service for Nexus Pune
 * Connects directly to Google Sheets via Google Apps Script Web App
 */

// Target Google Sheet for all Nexus website contact & enquiry forms
export const GOOGLE_SHEET_ID =
  import.meta.env.VITE_GOOGLE_SHEET_ID ||
  '1b0-Eh7DHDNVJpVjbTAO3yfX1LZRO0nFm9CroEv1z4us';

export const GOOGLE_SHEET_URL =
  import.meta.env.VITE_GOOGLE_SHEET_URL ||
  'https://docs.google.com/spreadsheets/d/1b0-Eh7DHDNVJpVjbTAO3yfX1LZRO0nFm9CroEv1z4us/edit?gid=0#gid=0';

// Deployed Google Apps Script Web App URL
export const GOOGLE_SHEETS_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_SHEETS_URL ||
  'https://script.google.com/macros/s/AKfycby1xU_WPDIbbSfMmTBlMtIXB99oLmDL_yYgCz3wOE64fekBlV0Zx76CyJ5P5igAdxEh/exec';

/**
 * Submits form data to Google Sheet
 * @param {Object} data - Form data with fields (name, phone, email, project, message, etc.)
 * @returns {Promise<{success: boolean, error?: string, simulated?: boolean}>}
 */
export async function submitLeadToGoogleSheet(data) {
  try {
    const isCpInquiry =
      data?.isCP === true ||
      String(data?.isCP || '').toLowerCase() === 'yes' ||
      String(data?.cp || '').toLowerCase() === 'yes' ||
      /channel partner|\bcp\b/i.test(String(data?.formType || ''));

    const cpStatus = isCpInquiry ? 'Yes' : 'No';

    const payload = {
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
      sheetId: GOOGLE_SHEET_ID,
      spreadsheetId: GOOGLE_SHEET_ID,
      sheetUrl: GOOGLE_SHEET_URL,
      ...data,
      cp: cpStatus,
      isCP: cpStatus,
    };

    // If script URL is still placeholder, gracefully log so frontend flows continue without crash
    if (GOOGLE_SHEETS_SCRIPT_URL.includes('YOUR_SCRIPT_ID_HERE')) {
      console.warn(
        '⚠️ Google Sheets Web App URL not set yet. Follow the steps to add your URL. Captured payload:',
        payload
      );
      return { success: true, simulated: true };
    }

    // Use text/plain with no-cors so browsers send the full JSON body without a CORS preflight block
    await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to submit lead to Google Sheet:', error);
    return { success: false, error: error.message };
  }
}
