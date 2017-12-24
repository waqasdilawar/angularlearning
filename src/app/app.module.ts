import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FetchDataComponent } from './Components/fetchdata/fetchdata.component';
import { PolicyFormComponent } from './Components/policyforms/policyform.component';


@NgModule({
  declarations: [
    AppComponent,
    PolicyFormComponent,
    FetchDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
