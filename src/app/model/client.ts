import { CompteEpargne } from './compteEpargne';
import { Adresse } from './adresse';
import { CompteCourant } from './compteCourant';
export class Client {
  id: number=0;
  nom: string='';
  prenom: string='';
  telephone: string='';
  adresse: Adresse={rue:'', codePostal:'', ville:''};
  compteCourant: CompteCourant={
    solde: 100,
    numeroCompte: 0
  }
  compteEpargne: CompteEpargne={
    solde: 0,
    numeroCompte: 0
  }

}
