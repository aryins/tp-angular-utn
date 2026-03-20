import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

interface User {
    avatar: ImageDataSettings;
    name: string;
    estado: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    private baseAPI = "https://fakestoreapi.com/users";
    constructor(private http: HttpClient) {  }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.baseAPI);
    }

    addUser(user: User): Observable<User> {
        return this.http.post<User>(this.baseAPI, user);
    }

    deleteUser(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseAPI}/${id}`);
    }
}
