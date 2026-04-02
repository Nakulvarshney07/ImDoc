import SideBar from "@/components/common/sidebar";
import DashboardShell from "@/components/common/DashboardShell";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
     
      <DashboardShell>
        {children}
      </DashboardShell>
      
    </section>
  );
}