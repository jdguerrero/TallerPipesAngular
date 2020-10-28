import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe5MismoMes'
})
export class Pipe5MismoMesPipe implements PipeTransform {

  date : Date;

  currentDate : Date;


  transform(fecha: string): string {

    this.currentDate = new Date();

    this.date = new Date(fecha);

    /**
     * validación fecha
     */
    if(this.date.getFullYear() == this.currentDate.getFullYear() && this.date.getMonth() == this.currentDate.getMonth()){

      return "Conectado este mes";

    }else{
      return this.date.toDateString();
    }
    
  }

}
