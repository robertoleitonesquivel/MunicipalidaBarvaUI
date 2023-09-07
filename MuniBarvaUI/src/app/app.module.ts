import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from '@Components/loader/loader.component'
import { MatSnackBar } from '@angular/material/snack-bar';
import { PrincipalComponent } from './Components/principal/principal.component';
import { EmployeesComponent } from './Components/employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    PrincipalComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
