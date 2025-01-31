import { DesktopSideNav, MobileSideNav } from "@/components/links";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <DesktopSideNav />
            < MobileSideNav />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">{children}</div>
        </div>
    );
}