import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FileItem = {
  id: string;
  file: File;
  preview?: string;
  type: "image" | "pdf";
};


type State = {
  files: FileItem[];
};

const initialState: State = {
  files: [],
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
  },
});

export const { addFiles, removeFile, clearFiles } = uploadSlice.actions;
export default uploadSlice.reducer;