import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NirComponent } from './nir/nir.component';
import { NirFormatPipe } from './nir-format.pipe';
import { PasswordComponent } from './password/password.component';

@NgModule({
  declarations: [
    AppComponent,
    NirComponent,
    NirFormatPipe,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
