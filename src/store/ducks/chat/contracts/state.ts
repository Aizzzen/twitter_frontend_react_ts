export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface Message {
    id: string;
}

export interface ChatState {
    user: any;
    items: Message[] | any;
    loading_state: LoadingState;
}
