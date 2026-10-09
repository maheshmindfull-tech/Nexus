/**
 * Lead capture service for Nexus Pune
 * Connects directly to Google Sheets via Google Apps Script Web App
 */

// Paste your Google Apps Script Web App URL here or in .env (VITE_GOOGLE_SHEETS_URL)
export const GOOGLE_SHEETS_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_SHEETS_URL ||
  'https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec';

/**
 * Submits form data to Google Sheet
 * @param {Object} data - Form data with fields (name, phone, email, project, message, etc.)
 * @returns {Promise<{success: boolean, error?: string, simulated?: boolean}>}
 */
export async function submitLeadToGoogleSheet(data) {
  try {
    const payload = {
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
      ...data,
    };

    // If script URL is still placeholder, gracefully log so frontend flows continue without crash
    if (GOOGLE_SHEETS_SCRIPT_URL.includes('YOUR_SCRIPT_ID_HERE')) {
      console.warn(
        '⚠️ Google Sheets Web App URL not set yet. Follow the steps to add your URL. Captured payload:',
        payload
      );
      return { success: true, simulated: true };
    }

    // Send payload using no-cors to handle Google Apps Script 302 redirect cleanly
    await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to submit lead to Google Sheet:', error);
    return { success: false, error: error.message };
  }
}
