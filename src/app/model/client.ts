import { Adresse } from './adresse';
export class Client {
  id: number=0;
  nom: string='';
  prenom: string='';
  telephone: string='';
  adresse: Adresse={rue:'', codePostal:'', ville:''};
}
