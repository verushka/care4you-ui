import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'SecurityEquipment',
  templateUrl: './securityEquipment.component.html',
})
export class SecurityEquipment implements OnInit{
  title = 'SecurityEquipment';

  ngOnInit(){
    console.log('SecurityEquipment.component cargado !!');
  }
}
