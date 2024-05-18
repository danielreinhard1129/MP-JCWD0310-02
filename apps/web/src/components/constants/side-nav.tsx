import { BookOpenCheck, CalendarPlus2, LayoutDashboard , Banknote } from "lucide-react";
import { type NavItem } from "@/app/types";

export const NavItems: NavItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/organizer-dashboard",
    color: "text-sky-500",
  },
  {
    title: "Events",
    icon: BookOpenCheck,
    href: "/organizer-dashboard/event",
    color: "text-orange-500",
    isChidren: true,
    children: [
      {
        title: "Create Events",
        icon: CalendarPlus2,
        color: "text-yellow-500",
        href: "/organizer-dashboard/event/create-event",
      },
      {
        title: "Manage Event",
        icon: BookOpenCheck,
        color: "text-blue-500",
        href: "/organizer-dashboard/event/manage-event",
      },
      {
        title: "Transaction",
        icon: Banknote,
        color: "text-green-500",
        href: "/organizer-dashboard/transaction",
      },
    ],
  },
];