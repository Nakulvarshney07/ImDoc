import { FaHome, FaProjectDiagram, FaCog, FaImage, FaFilePdf, FaHistory, FaFolderOpen,FaFileAudio  } from "react-icons/fa";
import Link from "next/link";

interface SideBarProps {
  isCollapsed?: boolean;
}

export default function SideBar({ isCollapsed = false }: SideBarProps) {
  const topNavItems = [
    { name: "Home", icon: <FaHome />, href: "/" },
    { name: "Image/Pdf", icon: <FaFolderOpen />	, href: "/dashboard/chat" },
     { name: "Audio Notes", icon: <FaFileAudio  />, href: "/dashboard/audioCon" },
    { name: "History", icon: <FaHistory/>, href: "/dashboard/history" },
   

  ];

  const bottomNavItems = [
    { name: "Settings", icon: <FaCog />, href: "/dashboard/settings" },
  ];

  const renderNavItem = (item: any, idx: number) => (
    <Link
      key={idx}
      href={item.href}
      className={`flex items-center gap-3 px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all 
        ${isCollapsed ? "justify-center" : "justify-start"}`}
    >
      <span className="text-xl text-neutral-600">{item.icon}</span>
      <span
        className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${
          isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
        }`}
      >
        {item.name}
      </span>
    </Link>
  );

  return (
    <div className="flex flex-col h-full py-4 gap-5 bg-gray-100">
      <div className="flex flex-col gap-4">
        {topNavItems.map(renderNavItem)}
      </div>

      <div className="mt-auto flex flex-col gap-2">
        {bottomNavItems.map((item, idx) => renderNavItem(item, idx + topNavItems.length))}
      </div>
    </div>
  );
}