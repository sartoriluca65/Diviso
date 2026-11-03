# Risultati di integrazione su copie — 3 novembre 2026

Dati esclusivamente sintetici, contesti Chromium nuovi e servizi esterni bloccati. Nessun archivio personale, browser esistente o database operativo utilizzato. Applicazioni originali non modificate.

I test eseguono i sorgenti applicativi del commit `bfda2393a4ee83434d63769e807d51f003974e2c` (per il repository iOS soltanto verifica statica dello schema, non esecuzione).

| Copia applicativa | Nuovo toolkit: apertura e riapertura | Diagnostica dei lettori nativi |
|---|---|---|
| Diviso | PASS | Nessun difetto nei casi provati |

Flusso: archivio inventato aperto nell’app; cattura in sola lettura; controllo del pacchetto; scrittura tramite adattatore SOLO di test in un secondo contesto vuoto su loopback; apertura e ricarica della copia originale dell’app; confronto di dati e allegati. Nessun importatore operativo viene aggiunto all’app.

## Esiti da non confondere


## Controlli affinati nel nuovo toolkit

Rifiuto di veicoli senza nome, regole Cochi incompatibili con il lettore, anagrafica clinica mancante e riferimenti file clinici non validi. Fixture aggiornate per rispettare gli schemi delle app. Per iOS, UUID controllati prima di produrre una copia. Non sono introdotte migrazioni o cancellazioni.

Test del toolkit: 30 test JavaScript per copia (23 core, 4 compatibilità, 3 staging). Tutti passati. SHA-256 e confronto dei byte non sostituiscono i controlli applicativi sopra distinti.

## Limiti e rollback

Nessuna garanzia su servizi remoti, account operativi, Safari, OCR, disponibilità delle email o ripristino di file oltre il limite prudenziale di 64 MiB. Le condizioni native pericolose sopra indicate sono blocchi all’uso operativo del relativo lettore: non interpretare PASS del toolkit come correzione dell’app.

Rollback: lasciare il ramo non unito. Sono cambiati soltanto strumenti/test/documentazione sotto tools/backup; nessun avvio applicativo li importa. Per tornare alla prima preparazione, selezionare il commit precedente sul ramo dopo revisione; non ripristinare database, cancellare chiavi o migrare dati. Le copie valide sono conservate e le destinazioni esistenti vengono rifiutate.
