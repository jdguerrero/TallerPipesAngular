import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1Hora'
})
export class Pipe1HoraPipe implements PipeTransform {

  date : Date;

  currentDate : Date;


  transform(fecha: string): string {

    this.currentDate = new Date();

    this.date = new Date(fecha);

    if(this.date.getFullYear() == this.currentDate.getFullYear() && this.date.getMonth() == this.currentDate.getMonth() && this.date.getDay() == this.currentDate.getDay() && this.date.getHours() == this.currentDate.getHours()){

      return "Conectado Hace Pocos Minutos";

    }else{
      return this.date.toDateString();
    }
    
  }

}
