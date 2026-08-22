// Source unique de vérité pour les chiffres et identifiants de l'entreprise.
// Mettre à jour ICI : le carrousel d'avis, le schema HVACBusiness, les phrases
// d'autorité des pages zones et le footer se mettent à jour automatiquement.

export const SITE_URL = 'https://pompe-a-chaleur-bw.be'
export const BUSINESS_NAME = 'Pompe à chaleur BW'
export const PHONE_E164 = '+32-2-886-14-57'
export const PHONE_DISPLAY = '02 / 886 14 57'

/** Note Google (format affiché) et nombre d'avis — vérifiés sur la fiche GBP le 22/08/2026 */
export const RATING_DISPLAY = '5,0'
export const RATING_VALUE = '5.0'
export const REVIEWS_COUNT = 33

/** Nombre de communes couvertes par des pages dédiées */
export const COMMUNES_COUNT = 12

/** Google Business Profile */
export const GBP_PLACE_ID = 'ChIJGygpLsJ9wUcRevtsE36kKUA'
export const GBP_CID = '4623407353871268730'
export const GBP_MAPS_URL = `https://www.google.com/maps?cid=${GBP_CID}`
export const GBP_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${GBP_PLACE_ID}`

/**
 * Numéro d'entreprise (BCE) — obligation légale belge sur le site.
 * Renseigner au format "BE 0123.456.789" : il s'affichera automatiquement
 * dans le footer, les mentions légales et le schema (vatID).
 */
export const VAT_NUMBER: string | null = null

/**
 * Chiffres d'expérience optionnels pour la phrase d'autorité des pages zones
 * (ex. EXPERIENCE_YEARS = 15, INSTALLATIONS_COUNT = 300). Laisser null si inconnu :
 * la phrase se construit alors uniquement sur les faits vérifiables (agréments, note Google).
 */
export const EXPERIENCE_YEARS: number | null = null
export const INSTALLATIONS_COUNT: number | null = null
