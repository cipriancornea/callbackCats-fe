import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserResponseDtoToUserAdapter} from "../adapters/user-response.dto-to-user.adapter";
import {UserToUserRequestDtoAdapter} from "../adapters/user-to-user-request.dto.adapter";
import {User} from "../models/user";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";
import {UserResponseDto} from "../models/dto/user-response.dto";

@Injectable({
  providedIn: 'root'
})
export class UserRepository {
  public apiServerUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private userResponseDtoToUserAdapter: UserResponseDtoToUserAdapter,
    private userToUserRequestDtoAdapter: UserToUserRequestDtoAdapter
  ) {
  }

  signUp(user: User): Observable<User> {
    let userRequest = this.userToUserRequestDtoAdapter.adapt(user);
    return this.http.post<UserResponseDto>(`${this.apiServerUrl}/sign-up`, userRequest);
  }

  login() {
    return this.http.post(`${this.apiServerUrl}/login`, {"username": "corffffnea", "password": "ciprifffan"}).subscribe(res => console.log(res));
  }

}
