import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Pipe1HoraPipe } from './pipes/pipe1-hora.pipe';
import { Pipe2HorasPipe } from './pipes/pipe2-horas.pipe';
import { Pipe3DiaPipe } from './pipes/pipe3-dia.pipe';
import { Pipe4Horas24Pipe } from './pipes/pipe4-horas24.pipe';
import { Pipe5MismoMesPipe } from './pipes/pipe5-mismo-mes.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Pipe1HoraPipe,
    Pipe2HorasPipe,
    Pipe3DiaPipe,
    Pipe4Horas24Pipe,
    Pipe5MismoMesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
