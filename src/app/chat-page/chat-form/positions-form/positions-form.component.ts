import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ChatService} from '../../../shared/services/chat.services';
import {Chat, Chatrooms} from '../../../shared/interfaces';
import {MaterialInstance, MaterialService} from '../../../shared/classes/material.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

const myChats: Chat[] = [];

@Component({
    selector: 'app-positions-form',
    templateUrl: './positions-form.component.html',
    styleUrls: ['./positions-form.component.css']
})
export class PositionsFormComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input('chatId') chatId: string;
    @ViewChild('modal') modalRef: ElementRef;

    chats: Chatrooms[] = [];
    model: MaterialInstance;
    form: FormGroup;
    isChatAdd = false;
    data = new Date();


    constructor(private chatService: ChatService) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(null, Validators.required)

        });
        this.chatService.fetch().subscribe(
            data => {
                const {rows} = data.chatrooms;
                this.chats = rows;


                console.log('---data--->', this.chats);
            }
        );
        // получаем список всех групп по категории
        // this.chatService.fetch(this.chatId).subscribe(chats => {
        //     this.chats = chats;
        // }); for working with backend

        // this.chatService.fetch().subscribe(chats=>{
        //     console.log('-------->',chats)
        // })


    }

    ngAfterViewInit(): void {

        this.model = MaterialService.initModa(this.modalRef);
    }

    ngOnDestroy(): void {
        this.model.destroy();
    }


    onSelectChat(chat: Chat) {
        this.model.open();

    }

    onAddChat() {
        this.model.open();


    }

    onCancel() {
        this.model.close();
    }

    onSubmit() {
        console.log('-------->');
        this.form.disable();
        const chat: Chat = {
            name: this.form.value.name,
            chat_type: 'group'
        };

        // if (chat.name === null) {
        //     this.form.enable();
        //     this.model.close();
        //     return;
        // }
        this.form.enable();
        this.chatService.create(chat).subscribe(
            resp => {
                console.log(resp);
            }
        );
        // this.chats.push(chat);
        // this.form.value.name = '';
        // console.log(chat);

        // this.chatService.create(chat).subscribe(
        //     chat => {
        //         MaterialService.toast('чат создан');
        //         this.chats.push(chat);
        //     },
        //     error => {
        //         this.form.enable();
        //         MaterialService.toast(error.error.message);
        //     }
        //)


    }

    onDeleted(chat: Chat) {
        this.chats.splice(this.chats.indexOf(chat), 1);
        console.log(chat);

    }
}
