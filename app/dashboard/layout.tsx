import { DesktopSideNav, MobileSideNav } from "@/components/links";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <DesktopSideNav />
            < MobileSideNav />
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}