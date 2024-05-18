
import { ThemeToggle } from "@/components/Layout/ThemeToggle";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/Layout/MobileSideBar";
import Link from "next/link";
import { Boxes } from "lucide-react";
import { UserNav } from "@/components/Layout/UserNav";
import { Button } from "@/components/ui/button";

export default function Header() {
    const user = {
        name : '',
        email : '',
        image : ''
    };

    return (
        <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
            <nav className="flex h-16 items-center justify-between px-4">
                <Link
                    href={"/"}
                    className="hidden items-center justify-between gap-2 md:flex"
                >
                    <Boxes className="h-6 w-6" />
                    <h1 className="text-lg font-semibold">TuneTix</h1>
                </Link>
                <div className={cn("block md:!hidden")}>
                    <MobileSidebar />
                </div>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                        <UserNav user={user} />
                </div>
            </nav>
        </div>
    );
}