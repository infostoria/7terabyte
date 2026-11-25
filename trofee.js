/* =====================================================================
   SALA TROFEELOR – singurul fișier pe care îl modifici, prof. Veronica
   =====================================================================

   Cum adaugi un trofeu nou:
   1. Pune poza în folderul „trofee” (lângă acest fișier).
      Nume simplu, fără spații și diacritice, de ex.: olimpiada-tic-2027.jpg
   2. Copiază un bloc { ... }, de la acolada deschisă la cea închisă,
      și lipește-l PRIMUL în listă (cele mai noi apar sus).
   3. Schimbă textele dintre ghilimele. Fiecare trofeu are un „id” unic.
   4. Salvează fișierul și urcă-l din nou pe site, peste cel vechi.

   Reguli: doar prenumele și clasa elevilor, fără nume de familie.
   ===================================================================== */

window.TROFEE = [
  {
    id: "exemplu-2",
    concurs: "EXEMPLU – Concursul de informatică",
    premiu: "Premiul I",
    elevi: "Ana, Matei – clasa a VI-a C",
    data: "noiembrie 2026",
    imagine: "trofee/exemplu-2.jpg"
  },
  {
    id: "exemplu-1",
    concurs: "EXEMPLU – Proiect Erasmus+",
    premiu: "Diplomă de participare",
    elevi: "Clasa a V-a A",
    data: "octombrie 2026",
    imagine: "trofee/exemplu-1.jpg"
  }
];

/* Inimioare și steluțe comune pentru toți copiii (opțional).
   Lasă "" și fiecare copil își vede doar propriile reacții.
   Dacă urmezi pasul opțional din ghid (Google Sheets), lipește aici adresa primită. */
window.CONFIG_7TB = {
  reactiiUrl: ""
};
