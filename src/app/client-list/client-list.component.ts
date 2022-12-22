import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  client: any = [];

  constructor(
    public service: ClientService
  ) { }

  ngOnInit() {
    this.loadClients()
  }


  loadClients() {
    return this.service.getClients().subscribe((data: {}) => { console.log(data);
      this.client = data;
    })
  }

  deleteClient(id:number) {
    if (window.confirm('Etes-vous sûr que vous voulez supprimer?')){
      this.service.deleteClient(id).subscribe(data => {
        this.loadClients()
      })
    }
  }

}
