import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  texto !: string; 
  num2 !: number; 
  
  ordenSelected = 0;
  verSeleccion: string = '';
  estado = [0,1,2,3,4];

  constructor(){
  }  
  transform(value: string, ...args:any[]): any {
  }
}