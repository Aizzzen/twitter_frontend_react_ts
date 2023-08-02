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
    next: boolean;
    items: Message[] | any;
    loading_state: LoadingState;
}
