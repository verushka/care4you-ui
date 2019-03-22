import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Department1',
  templateUrl: './department1.component.html',
})
export class Department1 implements OnInit{
  title = 'Department1';

  ngOnInit(){
    console.log('Department1.component cargado !!');
  }
}
