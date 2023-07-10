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
    id: string;
    text: string;
    created_at: string;
    photos?: [];
    username: string
    fullname?: string
    likes?: number;
    comments: Comment[];
}

export interface TweetsState {
    items: Tweet[];
    loading_state: LoadingState;
    add_form_state: AddFormState;
}

export interface Comment {
    id?: number;
    text: string;
    created_at?: Date;
    tweet: number;
    user: number;
}
