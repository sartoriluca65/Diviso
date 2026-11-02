# Diviso

Applicazione web per dividere il conto tra amici: inserimento delle voci, ripartizione delle spese e lettura assistita degli scontrini.

**Versione attualmente pubblicata:** https://sartoriluca65.github.io/

## Organizzazione
- `index.html`: codice dell'app Diviso.
- `.cursorrules` e `.cursor/rules/lavoro-italiano.mdc`: regole comuni degli altri progetti.
- `.github/workflows/verify.yml` e `scripts/check-structure.mjs`: controllo automatico minimo della struttura.

## Pubblicazione e dipendenze
Il sito principale resta nel repository `sartoriluca65.github.io`. Questo repository separato è una copia di lavoro, **non** la sorgente automaticamente pubblicata sul sito principale.
Alcune immagini, script di analisi e collegamenti continuano a fare riferimento al dominio originale; prima di pubblicare Diviso su un nuovo indirizzo occorre renderli autonomi e verificare tutte le funzioni.

## Dati personali
I dati conservati nel browser non sono inclusi nel repository. Prima di cambiare dominio o percorso dell'app, esportare eventuali dati personali: l'archiviazione locale non si trasferisce automaticamente.

## Verifiche
Eseguire `node scripts/check-structure.mjs`. Il workflow GitHub Actions esegue lo stesso controllo su push e pull request. Si tratta di un controllo strutturale, non di un test funzionale completo.

## Modifiche
Seguire le regole comuni: creare un ramo `feat/`, `fix/` o `chore/`, verificare, quindi aprire una pull request. Non effettuare deploy o merge senza autorizzazione.
