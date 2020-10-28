import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe2Horas'
})
export class Pipe2HorasPipe implements PipeTransform {

  date : Date;

  currentDate : Date;


  transform(fecha: string): string {

    this.currentDate = new Date();

    this.date = new Date(fecha);

    /**
     * validación fecha
     */
    if(this.date.getFullYear() == this.currentDate.getFullYear() && this.date.getMonth() == this.currentDate.getMonth() && this.date.getDay() == this.currentDate.getDay()){


      let horaActual = this.currentDate.getHours();

      let horaEntrada = this.date.getHours();

      if(horaEntrada>(horaActual-6)){
        return "Conectado Hace Pocas Horas";
      }else{
        return this.date.toDateString();
      }



    }else{
      return this.date.toDateString();
    }
    
  }

}
