import { Component, OnInit } from '@angular/core';



@Component({
  // selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Nenhum servidor foi criado!';
  serverName = '';
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'O servidor foi criado! E o seu nome é ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetServerName() {
    this.serverName = '';
  }

  
}
