import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeesDTO } from '@app/Models/EmployeesDTO.interface';
import { environment } from '@Environments/environment.development';
import { Login } from '@Models/login.interface'
import { Observable } from 'rxjs';
import { ApiResponse } from '@Models/response.interface';
import { RecoverPassword } from '@Models/recover-password.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  public SignIn(_data: Login): Observable<ApiResponse<EmployeesDTO>> {
    return this.http.get<ApiResponse<EmployeesDTO>>(`${environment.apiUrl}Login?email=${_data.Email}&password=${_data.Password}`);
  }

  public Send(_data: RecoverPassword): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${environment.apiUrl}Login`, _data);
  }
}
