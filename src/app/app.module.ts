import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from  '@angular/forms';
import { TempletFromComponent } from './components/templet-from/templet-from.component';
import { ReactiveForm1Component } from './components/reactive-form1/reactive-form1.component';
import { FormsModule} from '@angular/forms';
import { ReactiveForm2Component } from './components/reactive-form2/reactive-form2.component';
import { ReactiveForm3Component } from './components/reactive-form3/reactive-form3.component';
@NgModule({
  declarations: [
    AppComponent,
    TempletFromComponent,
    ReactiveForm1Component,
    ReactiveForm2Component,
    ReactiveForm3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
