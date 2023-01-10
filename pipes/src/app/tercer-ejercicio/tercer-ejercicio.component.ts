import { Component } from '@angular/core';


@Component({
  selector: 'app-tercer-ejercicio',
  templateUrl: './tercer-ejercicio.component.html',
  styleUrls: ['./tercer-ejercicio.component.css']
})

export class TercerEjercicioComponent {
  fecha ='';
  fa!:Date;
  tiempo='';

  calcular():void{
    if(!this.fecha){
      this.fecha =new Date().toLocaleDateString();
    }
    this.fa=new Date();
    let fecha2= new Date(this.fecha).getTime();
    let numero= this.fa.getTime()- fecha2;

    if(numero >= 86400000) {
      let dias  = Math.floor(numero / 86400000);
      this.tiempo = `Hace ${dias} dias.`
    }else if(3600000 <=numero) {
      let hrs = Math.floor(numero / 3600000);
      this.tiempo = `Hace ${hrs} horas.`
    }else if(60000 <= numero) {
      let min  = Math.floor(numero / 60000);
      this.tiempo = `Hace ${min} minutos.`
    }else {
      let sec  = Math.floor(numero / 1000);
      this.tiempo = `Hace ${sec} segundos.`
    }
}
}
