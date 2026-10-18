// Envoi des demandes vers l'app (Supabase Edge Function).
// Partagé entre le formulaire (LeadForm) et la bulle flottante (DevisBubble).

export const LEAD_ENDPOINT = 'https://zawhjurtnoosnfuicxfe.supabase.co/functions/v1/formulaire-site'
export const LEAD_SITE = 's-pac'
export const LEAD_SECRET = '3653dfb02cd4a8d8635cdde77ea39e51c59a0c940ee10a67'

/** Domaines pour lesquels un entretien demande le nombre d'unités */
export const AVEC_UNITES = ['Pompe à chaleur', 'Climatisation']

/** Chaque prestation part vers le bon type de lead (et la bonne commission) */
export function leadType(domaine: string, prestation: string, unites: string): string {
  if (prestation === 'Dépannage') return 't-pac-depannage'
  if (prestation === 'Entretien') {
    const demandeUnites = AVEC_UNITES.includes(domaine)
    return demandeUnites && unites.startsWith('1') ? 't-pac-entretien-mono' : 't-pac-entretien'
  }
  return 't-pac-install'
}
