export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export enum AddFormState {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface Tweet {
    _id: string;
    text: string;
    user: {
        fullName: string;
        userName: string;
        avatarUrl: string;
    };
}

export interface TweetsState {
    items: Tweet[];
    loading_state: LoadingState;
    add_form_state: AddFormState;
}
