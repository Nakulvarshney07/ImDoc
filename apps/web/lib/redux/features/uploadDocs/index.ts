import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FileItem = {
  id: string;
  file: File;
  preview?: string;
  type: "image" | "pdf";
};

type State = {
  files: FileItem[];
  isFirstMessage: boolean;
};

const initialState: State = {
  files: [],
  isFirstMessage: true,
};

const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    addFiles: (state, action: PayloadAction<FileItem[]>) => {
      const total = state.files.length + action.payload.length;
      if (total > 5) return;

      state.files.push(...action.payload);
    },

    removeFile: (state, action: PayloadAction<string>) => {
      state.files = state.files.filter(f => f.id !== action.payload);
    },

    clearFiles: (state) => {
      state.files = [];
    },

    markFirstMessageSent: (state) => {
      state.isFirstMessage = false;
    },
  },
});

export const { addFiles, removeFile, clearFiles, markFirstMessageSent } = uploadSlice.actions;
export default uploadSlice.reducer;