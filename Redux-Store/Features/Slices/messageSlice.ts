import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

interface InitialState {
  messages: [];
};

const initialState: { messages: Message[]} = {
    messages: [],
    };

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<Message>) {
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = messageSlice.actions;

export const selectAllMessages = createSelector(
  (state: { message: InitialState }) => state.message.messages,
  messages => messages
);

export default messageSlice.reducer;