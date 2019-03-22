import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Department3',
  templateUrl: './department3.component.html',
})
export class Department3 implements OnInit{
  title = 'Department3';

  ngOnInit(){
    console.log('Department3.component cargado !!');
  }
}
