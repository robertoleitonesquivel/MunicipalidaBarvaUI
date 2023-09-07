import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '@Services/common.service';
import { UpdatePassword, UpdatePasswordSend } from '@Models/updatePassword.interface';
import { UpdatePasswordService } from '@Services/update-password.service';
import { finalize, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '@Models/response.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertsService } from '@Services/alerts.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  /*FORMULARIOS */
  frmUpdatePassword!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private commonSvc: CommonService,
    private updataPasswordSvc: UpdatePasswordService,
    private activatedRoute: ActivatedRoute,
    private alertSvc: AlertsService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.onLoad();
  }

  private onLoad(): void {
    this.frmUpdatePassword = this.fb.group({
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]],
      Token: [this.activatedRoute.snapshot.queryParamMap.get('token') ?? '', Validators.required]
    });
  }

  public Update(_data: UpdatePassword): void {
    this.commonSvc.show();
    this.updataPasswordSvc.updatePassword({ Password: _data.Password, Token: _data.Token } as UpdatePasswordSend).pipe(
      tap(res => {
        this.alertSvc.Success(res.Message);
        this.router.navigate(['login']);
      }),
      finalize(() => this.commonSvc.hide())
    ).subscribe({
      next: (res: ApiResponse<string>) => {
      },
      error: (error: HttpErrorResponse) => {
        this.alertSvc.Error(error.error);
      }
    });

  }
}
