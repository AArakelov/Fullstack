import {Component, OnInit} from '@angular/core';
import {ChatService} from '../../shared/services/chat.services';

@Component({
    selector: 'app-chat-dialig',
    templateUrl: './chat-dialig.component.html',
    styleUrls: ['./chat-dialig.component.css']
})
export class ChatDialigComponent implements OnInit {


    constructor(private chatservice: ChatService) {
    }

    ngOnInit() {
        console.log('----->');
        this.chatservice.fetch().subscribe(value => {
            console.log(value);

        });
    }


}
