import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type Message = {
  id: string;
  prompt: string;
  response: string;
  images?: string[];
};

type ChatState = {
  conversationId: string | null;
  messages: Message[];
};

const initialState: ChatState = {
  conversationId: null,
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setConversationId: (state, action: PayloadAction<string>) => {
      state.conversationId = action.payload;
    },

    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },

    clearChat: (state) => {
      state.conversationId = null;
      state.messages = [];
    },
  },
});

export const { setConversationId, addMessage, clearChat } = chatSlice.actions;
export default chatSlice.reducer;