import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ContactUs',
  templateUrl: './contactUs.component.html',
})
export class ContactUs implements OnInit{
  title = 'ContactUs';

  ngOnInit(){
    console.log('ContactUs.component cargado !!');
  }
}
