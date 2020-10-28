import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Pipe1HoraPipe } from './pipes/pipe1-hora.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Pipe1HoraPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
