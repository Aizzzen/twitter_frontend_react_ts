import { RootState } from '../../store';
import {ChatsState, LoadingState} from './contracts/state';

export const selectChats = (state: RootState): ChatsState => state.chats;

export const selectChatsItems = (state: RootState) => selectChats(state).items;
