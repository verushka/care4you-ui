import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Department2',
  templateUrl: './department2.component.html',
})
export class Department2 implements OnInit{
  title = 'Department2';

  ngOnInit(){
    console.log('Department2.component cargado !!');
  }
}
