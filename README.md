# Diviso

Applicazione web indipendente per dividere il conto tra amici, ripartire le spese e leggere scontrini tramite OCR.

## Pubblicazione

Questo repository contiene il codice della versione autonoma. **Indirizzo previsto dopo l'attivazione di GitHub Pages:** https://sartoriluca65.github.io/Diviso/

La vecchia versione pubblicata su https://sartoriluca65.github.io/ resta separata e non viene modificata.

Per pubblicare: **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**. La pubblicazione richiede che la funzione Pages sia abilitata per il repository.

## Dipendenze

- `index.html`: applicazione completa.
- `diviso-logo.svg`: logo e icona locali, senza collegamenti al sito originale.
- Google Fonts: caricamento facoltativo di caratteri web.
- Tesseract.js via jsDelivr: caricato soltanto quando si usa la scansione OCR; questa funzione richiede Internet. Il resto dell'app non dipende dal sito originale.
- I link verso le altre app Lukiapp sono semplici collegamenti di navigazione.

Il codice di tracciamento del portale originale non viene caricato.

## Dati e cambio indirizzo

Diviso salva i dati nel browser con la chiave `diviso-v2`. **I dati locali non si trasferiscono automaticamente** passando dal vecchio indirizzo al nuovo: sono due origini web distinte. Conservare la vecchia app e i suoi dati prima di cambiare indirizzo.

## Sviluppo e controlli

Le regole comuni sono in `.cursorrules` e `.cursor/rules/lavoro-italiano.mdc`. Eseguire `node scripts/check-structure.mjs`. GitHub Actions verifica automaticamente la struttura per ogni pull request.

Modificare il codice su un ramo separato e aprire una pull request. Non modificare direttamente `main`.
