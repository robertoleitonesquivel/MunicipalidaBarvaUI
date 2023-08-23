
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { finalize, tap } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';
import { EmployeesDTO } from '@app/Models/EmployeesDTO.interface';
import { ApiResponse } from '@Models/response.interface';
import { Login } from '@Models/login.interface';

import { CommonService } from '@Services/common.service';
import { LoginService } from '@Services/login.service';

import { regexEmail } from '@Utils/constantes';
import { RecoverPassword } from '@app/Models/recover-password.interface';
import { AlertsService } from '@app/Services/alerts.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /*FORMULARIOS */
  frmLogin!: FormGroup;
  frmRecoverPassword!: FormControl;

  /*VARIABLES */
  hide: boolean = true;
  recoverPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginSvc: LoginService,
    private commonSvc: CommonService,
    private alertsSvc:AlertsService
  ) {

  }


  ngOnInit(): void {
    this.OnLoad();
  }

  private OnLoad(): void {
    this.frmLogin = this.fb.group({
      Email: ['', [Validators.required, Validators.pattern(regexEmail)]],
      Password: ['', [Validators.required]]
    });
    this.frmRecoverPassword = new FormControl('', [Validators.required, Validators.pattern(regexEmail)]);
  }

  public SignIn(_data: Login): void {

    this.commonSvc.show();
    this.loginSvc.SignIn(_data).pipe(
      finalize(() => this.commonSvc.hide())
    ).subscribe({
      next: (callback: ApiResponse<EmployeesDTO>) => {
        console.log(callback)
      },
      error: (error: HttpErrorResponse) => {
        console.log(error)
      }
    });
  }

  public Send(_email: string): void {
    this.commonSvc.show();
    this.loginSvc.Send({ Email: _email } as RecoverPassword).pipe(
      tap(res => this.frmRecoverPassword.reset()),
      tap(res=>this.alertsSvc.Success(res.Message)),
      finalize(() => this.commonSvc.hide())
    ).subscribe({
      next: (callback:ApiResponse<string>) => {
        console.log(callback,'subcribe');
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    });
  }
}
