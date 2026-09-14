---
name: handoff
description: Met à jour HANDOFF.md en fin de session ou avant de redémarrer une conversation neuve. Utiliser quand l'utilisateur dit « handoff », « on s'arrête là », « résume pour la prochaine session », ou après 30 à 50 échanges.
---

# Procédure
1. Lire `HANDOFF.md` actuel et `git log --oneline -15`.
2. Réécrire le fichier entier, sections fixes :
   - **État** : ce qui est en production, ce qui est en cours sur la branche.
   - **Décisions** : choix pris pendant la session et pourquoi (une ligne chacun).
   - **Dette connue** : tableau sujet / volume / priorité.
   - **Prochaines étapes** : 3 à 5 actions, ordonnées, avec le skill ou le fichier à ouvrir.
   - **Ne pas toucher** : fichiers sensibles et raison.
3. Mettre la date du jour en tête.
4. Rester sous 60 lignes. Un lecteur neuf doit pouvoir reprendre sans relire la conversation.
5. Commit : `docs: update HANDOFF`.
