import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Incidents',
  templateUrl: './incidents.component.html',
})
export class Incidents implements OnInit{
  title = 'Incidents';

  ngOnInit(){
    console.log('Incidents.component cargado !!');
  }
}
