export interface User {
    email: string
    password: string
    username?: string

}

export interface Category {
    name: string
    imagSrc?: string
    user?: string
    _id?: string

}

export class Chat {
    name?: string;
    chat_type?: ChatType;
    user?: User;
    id?: string;
    rows?: any;
    count?: number;


}
export interface Message {
    massage: string


}

export interface Rows {
    rows?: Array<Chat[]>;
}


export interface ChatType {
    chat_type?: string;
}

export interface Chatrooms {
    count?: number;
    rows?: Array<Rows[]>

}
