import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'SecurityPolitics',
  templateUrl: './securityPolitics.component.html',
})
export class SecurityPolitics implements OnInit{
  title = 'SecurityPolitics';

  ngOnInit(){
    console.log('SecurityPolitics.component cargado !!');
  }
}
