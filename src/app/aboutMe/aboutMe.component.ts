import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'AboutMe',
  templateUrl: './aboutMe.component.html',
})
export class AboutMe implements OnInit{
  title = 'AboutMe';

  ngOnInit(){
    console.log('AboutMe.component cargado !!');
  }
}
