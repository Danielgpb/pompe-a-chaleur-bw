# PAC — domaines, entretien et nouvelles commissions

**Date : 2026-07-15 · Validé par Daniel** (conversation du 15/7, corrections comprises)

## Nouvelles règles métier (côté app Suivi Leads)

| Type de lead (s-pac) | Circuit | Commission par défaut |
|---|---|---|
| Installation (`t-pac-install`) | devis | **10 % sur le Matériel uniquement** (plus rien sur la main-d'œuvre) ; Nico peut ajouter un extra / d'autres lignes via l'éditeur existant |
| Dépannage (`t-pac-depannage`) | direct | forfait 25 € (inchangé, 10 % au-delà de 250 €) |
| **Entretien mono-split** (`t-pac-entretien-mono`, nouveau) | direct | forfait **15 €** |
| **Entretien** (`t-pac-entretien`, nouveau) | direct | forfait **25 €** (2 unités et plus, ou autre domaine) |

Nouveau champ à choix sur le site s-pac : **Domaine** = Pompe à chaleur,
Climatisation, Chauffage, Solaire, Sanitaire, Ventilation.

Application en prod : SQL via le dashboard Supabase (Chrome de Daniel),
migration `0016_pac_entretien_domaines.sql` gardée dans le repo de l'app.

## Formulaire du site pompe-a-chaleur-bw.be (LeadForm.astro)

Aujourd'hui : 4 radios « service » ; seul « Dépannage urgent » est routé vers
`t-pac-depannage`, tout le reste (y compris Entretien !) part en
`t-pac-install` — bug corrigé par cette refonte.

Nouvelle structure :
1. **Domaine** (6 boutons) : Pompe à chaleur / Climatisation / Chauffage /
   Solaire / Sanitaire / Ventilation
2. **Prestation** (3 boutons) : Installation / Dépannage / Entretien
3. Si Entretien **et** domaine PAC ou Climatisation : « Combien d'unités ? »
   → « 1 (mono-split) » ou « 2 ou plus »

Routage vers l'app :
- Installation → `t-pac-install`
- Dépannage → `t-pac-depannage`
- Entretien 1 mono-split (PAC/Clim) → `t-pac-entretien-mono`
- Entretien autre → `t-pac-entretien`

`champs` envoyés : Domaine, Commune, Logement (+ Unités pour l'entretien).
Le champ « Service » actuel disparaît (remplacé par Domaine + le type).
Le reste du composant (WhatsApp après envoi, page /devis, honeypot,
messages d'erreur) ne change pas.

## Ordre de déploiement

1. SQL en prod (types + champ Domaine) — sinon le site pointerait vers des
   types inexistants (erreur 400 « type de lead introuvable »).
2. Site Astro : build + déploiement Netlify (site friendly-naiad-cd8a7b,
   pompe-a-chaleur-bw.be).

## Tests

- App : lead de test par type (mono → 15 €, entretien → 25 €, install →
  ligne Matériel 10 %) — en local mode démo pour l'UI, et vérification SQL
  en prod.
- Site : parcours complet en local (npm run dev) pour les 4 routages, puis
  un envoi réel de test en prod (lead à supprimer ensuite).
