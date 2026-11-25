/* 7 TeraByte – inimioare și steluțe comune pentru Sala trofeelor.
   Se lipește în Google Sheets → Extensii → Apps Script (vezi CUM-PUBLIC.txt, pasul opțional).
   Salvează numărătorile într-o foaie numită „Reactii”: id trofeu | inimioare | steluțe. */

function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const foaie = ss.getSheetByName("Reactii") || ss.insertSheet("Reactii");
  const p = e.parameter || {};

  if (p.action === "add" && p.id && (p.tip === "inima" || p.tip === "stea")) {
    const lacat = LockService.getScriptLock();
    lacat.waitLock(5000);
    try {
      const date = foaie.getDataRange().getValues();
      let rand = date.findIndex(r => r[0] === p.id);
      if (rand < 0) { foaie.appendRow([p.id, 0, 0]); rand = foaie.getLastRow() - 1; }
      const coloana = p.tip === "inima" ? 2 : 3;
      const celula = foaie.getRange(rand + 1, coloana);
      const delta = p.delta === "-1" ? -1 : 1;
      celula.setValue(Math.max(0, (Number(celula.getValue()) || 0) + delta));
    } finally {
      lacat.releaseLock();
    }
  }

  const rezultat = {};
  foaie.getDataRange().getValues().forEach(r => {
    if (r[0]) rezultat[r[0]] = { inima: Number(r[1]) || 0, stea: Number(r[2]) || 0 };
  });
  return ContentService.createTextOutput(JSON.stringify(rezultat))
    .setMimeType(ContentService.MimeType.JSON);
}
