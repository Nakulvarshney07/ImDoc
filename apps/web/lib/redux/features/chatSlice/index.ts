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

    clearMessages: (state) => {
      state.messages = [];
    },
    // last message ma response add karna ka liya 
    updateLastMessage: (state, action: PayloadAction<{ response: string }>) => {
      const last = state.messages[state.messages.length - 1];
      if (last) {
        last.response = action.payload.response;
      }
    },
  },
});

export const {
  setConversationId,
  addMessage,
  clearMessages,
  updateLastMessage,
} = chatSlice.actions;
export default chatSlice.reducer;
