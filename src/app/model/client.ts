import { CompteEpargne } from './compteEpargne';
import { Adresse } from './adresse';
import { CompteCourant } from './compteCourant';
export class Client {
  id: number=0;
  nom: string='';
  prenom: string='';
  telephone: string='';
  adresse: Adresse={rue:'', codePostal:'', ville:''};
  cc: CompteCourant = { solde: 0.0, numeroCompte: 0, date: new Date(), decouvert: 0.0 }
  compteEp: CompteEpargne={ solde: 0.0, numeroCompte: 0, date: new Date(), interet: 0}

}
