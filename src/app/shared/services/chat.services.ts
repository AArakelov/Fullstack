import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Chat, Chatrooms} from '../interfaces';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root'
})

export class ChatService {
    constructor(private http: HttpClient,
                private authService: AuthService) {
    }


    // получение чата
    fetch(): Observable<any[]> {
        console.log('-----fetchService------>')
        return this.http.get<any[]>(`api/v1/chatrooms`);
    }

    // Создание чата
    create(chat: Chat): Observable<Chat> {
        // const headers = new HttpHeaders({
        //     'Authorization': `Bearer ${this.authService.getToken()}`
        // });

        return this.http.post<Chat>(`/api/v1/chatrooms`, chat);


    }

}
