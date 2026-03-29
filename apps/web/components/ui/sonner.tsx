"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      position="top-center"
      expand
      closeButton
      duration={4000}
      toastOptions={{
        classNames: {
          toast:
            "!bg-white !text-gray-600 !border !border-gray-200 !shadow-xl !rounded-xl px-5 py-4 flex items-center gap-3",

          title: "!font-medium !text-gray-900",
          description: "!text-gray-500",

          closeButton:
            "!bg-gray-100 !text-gray-600 hover:!bg-gray-200 hover:!text-gray-900 rounded-full p-1.5",
        },
      }}
    />
  );
};

export { Toaster };
