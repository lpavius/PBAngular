import { Client } from './../model/client';
import { ClientService } from './../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-compte',
  templateUrl: './client-compte.component.html',
  styleUrls: ['./client-compte.component.css']
})
export class ClientCompteComponent implements OnInit {

  id = this.activatedRoute.snapshot.params['id'];
  clientDetails : any= {};
  selectedCompte = '1';


  constructor(private service: ClientService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.clientDetails = new Client;
  }


  ngOnInit(): void {
    this.service.getClient(this.id).subscribe((data: {}) =>
    {
      this.clientDetails = data;
    })
  }
  showCompte(){
    // this.service.showCompte(this.id, this.clientDetails).subscribe(data =>{
    //     this.router.navigate(['/clients-list'])
      this.router.navigate(['/clients-list']);
        return false;
  }

  gotoList() {
      this.router.navigate(['/clients-list']);
      return false;
  }

  onSelected(event: any): void {
    this.selectedCompte = event.target.value
  }

}
