import { ApiResponse } from '@Models/response.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdatePasswordSend } from '@Models/updatePassword.interface';
import { Observable } from 'rxjs';
import { environment } from '@Environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UpdatePasswordService {

  constructor(private http: HttpClient) { }


  public updatePassword(_data: UpdatePasswordSend): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${environment.apiUrl}Login/UpdatePassword`, _data);
  }

  public verifyToken(_token: string): Observable<ApiResponse<boolean>> {
    return this.http.get<ApiResponse<boolean>>(`${environment.apiUrl}Login/VerifyToken?token=${_token}`);
  }

}
