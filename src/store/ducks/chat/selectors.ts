import { RootState } from '../../store';
import {ChatState, LoadingState} from './contracts/state';

export const selectChat = (state: RootState): ChatState => state.chat;

export const selectChatItems = (state: RootState) => selectChat(state).items;

export const selectChatUser = (state: RootState) => selectChat(state).user;
export const selectIsNextLink = (state: RootState) => selectChat(state).next;
