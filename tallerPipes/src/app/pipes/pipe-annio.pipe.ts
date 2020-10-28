import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeAnnio'
})
export class PipeAnnioPipe implements PipeTransform {

  date : Date;

  currentDate : Date;


  transform(fecha: string): string {

    this.currentDate = new Date();

    this.date = new Date(fecha);

    /**
     * validación fecha
     */
    if(this.date.getFullYear() == this.currentDate.getFullYear()){

      return "Conectado este año";

    }else{
      return this.date.toDateString();
    }
    
  }

}
