/**
 * Nexus Pune — Google Apps Script Web App
 *
 * What it does:
 * 1. Saves every website form to the Google Sheet
 * 2. Emails sales leads to info@nexuspune.in
 * 3. Emails career resume submissions to hr@nexuspune.in
 * 4. Emails Channel Partner inquiries to samarth@nexuspune.in
 *
 * Deploy / update:
 * 1. Open the Google Sheet used by the website
 * 2. Extensions → Apps Script
 * 3. Replace the script with this file
 * 4. Deploy → Manage deployments → Edit → New version → Deploy
 * 5. Keep "Execute as: Me" and "Who has access: Anyone"
 * 6. Copy the Web App URL into VITE_GOOGLE_SHEETS_URL if it changed
 */

var SALES_EMAIL = 'info@nexuspune.in';
var CAREERS_EMAIL = 'hr@nexuspune.in';
var CP_EMAIL = 'samarth@nexuspune.in';
var SHEET_NAME = 'Sheet1';

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, service: 'Nexus lead capture' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var data = parseBody_(e);
    var sheet = getSheet_(data);
    var notify = resolveNotify_(data);

    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      data.formType || '',
      notify.category,
      data.name || '',
      data.email || '',
      data.phone || '',
      data.project || data.role || '',
      data.company || '',
      data.experience || '',
      data.portfolioLink || '',
      data.reraNumber || '',
      data.message || '',
      data.cp || data.isCP || 'No',
      notify.email,
      data.sourceUrl || '',
    ]);

    if (data.sendEmail !== false) {
      sendLeadEmail_(data, notify);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, emailedTo: notify.email }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function parseBody_(e) {
  if (!e || !e.postData || !e.postData.contents) return {};
  try {
    return JSON.parse(e.postData.contents);
  } catch (err) {
    return {};
  }
}

function getSheet_(data) {
  var spreadsheet = data.spreadsheetId || data.sheetId
    ? SpreadsheetApp.openById(data.spreadsheetId || data.sheetId)
    : SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.getSheets()[0];
  ensureHeader_(sheet);
  return sheet;
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() > 0) return;
  sheet.appendRow([
    'Timestamp',
    'Form Type',
    'Category',
    'Name',
    'Email',
    'Phone',
    'Project / Role',
    'Company',
    'Experience',
    'Portfolio / Resume Link',
    'RERA',
    'Message',
    'Channel Partner',
    'Emailed To',
    'Source URL',
  ]);
}

function resolveNotify_(data) {
  var category = String(data.category || data.formCategory || '').toLowerCase();
  var formType = String(data.formType || '').toLowerCase();
  var explicit = String(data.notifyEmail || data.mailTo || '').trim().toLowerCase();
  var cpFlag = String(data.cp || data.isCP || '').toLowerCase();

  var isCareer =
    category === 'careers' ||
    category === 'career' ||
    category === 'hr' ||
    formType.indexOf('career') !== -1 ||
    formType.indexOf('resume') !== -1 ||
    formType.indexOf('cv') !== -1 ||
    explicit === CAREERS_EMAIL;

  if (isCareer) {
    return { category: 'careers', email: CAREERS_EMAIL, label: 'Careers / HR' };
  }

  var isCp =
    category === 'channel-partner' ||
    category === 'cp' ||
    cpFlag === 'yes' ||
    formType.indexOf('channel partner') !== -1 ||
    explicit === CP_EMAIL;

  if (isCp) {
    return { category: 'channel-partner', email: CP_EMAIL, label: 'Channel Partner' };
  }

  return { category: 'sales', email: SALES_EMAIL, label: 'Sales Enquiries' };
}

function sendLeadEmail_(data, notify) {
  var subject = notify.category === 'careers'
    ? 'New resume submission — Nexus Careers'
    : notify.category === 'channel-partner'
      ? 'New Channel Partner inquiry — Nexus Website'
      : 'New sales enquiry — Nexus Website';

  if (data.project || data.role) {
    subject += ' | ' + (data.project || data.role);
  }

  var lines = [
    'A new form was submitted on nexuspune.in',
    '',
    'Inbox: ' + notify.label + ' (' + notify.email + ')',
    'Form: ' + (data.formType || 'Website form'),
    'Category: ' + notify.category,
    'Time: ' + (data.timestamp || ''),
    'Page: ' + (data.sourceUrl || ''),
    '',
    'Name: ' + (data.name || ''),
    'Email: ' + (data.email || ''),
    'Phone: ' + (data.phone || ''),
    'Project / Role: ' + (data.project || data.role || ''),
    'Company: ' + (data.company || ''),
    'Experience: ' + (data.experience || ''),
    'Portfolio / Resume: ' + (data.portfolioLink || ''),
    'RERA: ' + (data.reraNumber || ''),
    'Channel Partner: ' + (data.cp || data.isCP || 'No'),
    '',
    'Message:',
    data.message || '(none)',
  ];

  MailApp.sendEmail({
    to: notify.email,
    replyTo: data.email || notify.email,
    subject: subject,
    body: lines.join('\n'),
  });
}
