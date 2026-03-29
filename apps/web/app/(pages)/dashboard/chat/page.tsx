"use client";
import {
  Camera,
  Plus,
  Image,
  SendHorizontal,
  Paperclip,
  Satellite,
} from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { toast } from "sonner";
import { addFiles, removeFile } from "@/lib/redux/features/uploadDocs";
import { FileItem } from "@/lib/redux/features/uploadDocs";

export default function ChatPage() {
  const dispatch = useAppDispatch();
  const files = useAppSelector((state) => state.upload.files);

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
  }

  function mapFiles(fileList: FileList | null): FileItem[] {
    if (!fileList) return [];

    return Array.from(fileList).map((file): FileItem => {
      const isImage = file.type.includes("image");

      return {
        id: crypto.randomUUID(),
        file,
        type: isImage ? "image" : "pdf",
        preview: isImage ? URL.createObjectURL(file) : undefined,
      };
    });
  }

  function handlePhotoSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const mapped = mapFiles(e.target.files);

    if (files.length + mapped.length > 5) {
      toast.error("Max 5 files allowed", {
        icon: "⚠️",
      });
      return;
    }

    dispatch(addFiles(mapped));
  }

  function handleDocSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const mapped = mapFiles(e.target.files);

    if (files.length + mapped.length > 5) {
      toast.error("Max 5 files allowed", {
        icon: "⚠️",
      });
      return;
    }

    dispatch(addFiles(mapped));
  }

  function handleAddAttachment() {
    document.getElementById("docInput")?.click();
  }

  function handleAddPhoto() {
    document.getElementById("photoInput")?.click();
  }

  function handleTakePhoto() {
    document.getElementById("cameraInput")?.click();
  }

  return (
    <>
      {/* HIDDEN INPUTS */}

      <input
        type="file"
        accept="image/*"
        multiple
        id="photoInput"
        className="hidden"
        onChange={handlePhotoSelected}
      />

      <input
        type="file"
        accept="image/*"
        capture="environment"
        id="cameraInput"
        className="hidden"
        onChange={handlePhotoSelected}
      />

      <input
        type="file"
        accept="application/pdf"
        multiple
        id="docInput"
        className="hidden"
        onChange={handleDocSelected}
      />

     
      <div className="flex flex-col h-screen bg-white pl-64"></div>
      <div className="flex flex-col h-screen bg-white pl-64">
        <div className="flex-1 overflow-y-auto p-6 space-y-6 mb-32">
          {/* Messages will render here */}
        </div>

        {/* --- BOTTOM INPUT AREA --- */}

        <div className="fixed bottom-0 left-64 right-0 bg-white p-4">
          <div className="max-w-5xl mx-auto px-4">
            {files.length > 0 && (
              <div className="flex gap-2 flex-wrap mb-2">
                {files.map((f) => (
                  <div key={f.id} className="relative border rounded p-2">
                    {f.type === "image" ? (
                      <img
                        src={f.preview}
                        className="w-20 h-20 object-cover rounded"
                      />
                    ) : (
                      <div className="w-20 h-20 flex items-center justify-center bg-gray-200 rounded text-xs">
                        📄 PDF
                      </div>
                    )}

                    <button
                      onClick={() => dispatch(removeFile(f.id))}
                      className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
            <form
              onSubmit={handleSend}
              className="relative flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-2xl p-2 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all shadow-inner"
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="self-end p-2 hover:bg-gray-200 rounded-full text-gray-500"
                  >
                    <Plus size={24} />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-50 p-2 rounded-xl shadow-lg">
                  <DropdownMenuItem
                    onClick={handleTakePhoto}
                    className="py-3 px-3 text-base gap-3 "
                  >
                    <Camera size={20} />
                    Take Photo
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    onClick={handleAddPhoto}
                    className="py-3 px-3 text-base gap-3"
                  >
                    <Image size={20} />
                    Add Photo
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    onClick={handleAddAttachment}
                    className="py-3 px-3 text-base gap-3"
                  >
                    <Paperclip size={20} />
                    Add Documents
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <textarea
                placeholder="Describe your task..."
                rows={1}
                onInput={(e) => {
                  const target = e.currentTarget;
                  target.style.height = "auto";
                  target.style.height =
                    Math.min(target.scrollHeight, 120) + "px";
                }}
                onKeyDown={(e) =>
                  e.key === "Enter" && !e.shiftKey && handleSend(e)
                }
                className="w-full bg-transparent border-none focus:ring-0 resize-none text-sm text-gray-800 outline-none max-h-[120px] overflow-y-auto transition-all duration-100 ease-in-out"
              />

              <button
                type="submit"
                className="self-end mb-1 p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-sm"
              >
                <SendHorizontal size={20} />
              </button>
            </form>

            {/* The "mistakes" line */}
            <p className="text-[11px] text-center text-gray-400 mt-3 tracking-wide">
              ImDoc can make mistakes. Check important info.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
