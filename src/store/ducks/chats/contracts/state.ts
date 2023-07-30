export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface Chat {
    id: string;
}

export interface ChatsState {
    items: Chat[] | any;
    loading_state: LoadingState;
}
