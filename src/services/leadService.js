/**
 * Lead capture service for Nexus Pune
 * Saves every form to Google Sheets and asks the Apps Script to email the right inbox.
 */

export const SALES_NOTIFY_EMAIL = 'info@nexuspune.in';
export const CAREERS_NOTIFY_EMAIL = 'hr@nexuspune.in';
export const CP_NOTIFY_EMAIL = 'samarth@nexuspune.in';

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

function isChannelPartnerInquiry(data = {}) {
  const category = String(data.category || data.formCategory || '').toLowerCase();
  const formType = String(data.formType || '');
  return (
    category === 'channel-partner' ||
    category === 'cp' ||
    data?.isCP === true ||
    String(data?.isCP || '').toLowerCase() === 'yes' ||
    String(data?.cp || '').toLowerCase() === 'yes' ||
    /channel partner/i.test(formType)
  );
}

function resolveNotifyTarget(data = {}) {
  const category = String(data.category || data.formCategory || '').toLowerCase();
  const formType = String(data.formType || '').toLowerCase();
  const isCareer =
    category === 'careers' ||
    category === 'career' ||
    category === 'hr' ||
    formType.includes('career') ||
    formType.includes('resume') ||
    formType.includes('cv');

  if (isCareer) {
    return {
      category: 'careers',
      notifyEmail: CAREERS_NOTIFY_EMAIL,
      notifyLabel: 'Careers / HR',
    };
  }

  if (isChannelPartnerInquiry(data)) {
    return {
      category: 'channel-partner',
      notifyEmail: CP_NOTIFY_EMAIL,
      notifyLabel: 'Channel Partner',
    };
  }

  return {
    category: 'sales',
    notifyEmail: SALES_NOTIFY_EMAIL,
    notifyLabel: 'Sales Enquiries',
  };
}

/**
 * Submits form data to Google Sheet and triggers email notification
 * @param {Object} data - Form data with fields (name, phone, email, project, message, etc.)
 * @returns {Promise<{success: boolean, error?: string, simulated?: boolean}>}
 */
export async function submitLeadToGoogleSheet(data) {
  try {
    const cpStatus = isChannelPartnerInquiry(data) ? 'Yes' : 'No';
    const notify = resolveNotifyTarget(data);

    const payload = {
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
      sheetId: GOOGLE_SHEET_ID,
      spreadsheetId: GOOGLE_SHEET_ID,
      sheetUrl: GOOGLE_SHEET_URL,
      ...data,
      category: notify.category,
      formCategory: notify.category,
      notifyEmail: notify.notifyEmail,
      mailTo: notify.notifyEmail,
      notifyLabel: notify.notifyLabel,
      sendEmail: true,
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
