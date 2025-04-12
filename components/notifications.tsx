"use client";

import * as React from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  type: "success" | "info" | "offer";
}

const notifications: Notification[] = [
  {
    id: 1,
    title: "Order Placed Successfully!",
    message: "Your order #FM2024046 has been placed.",
    time: "2 minutes ago",
    type: "success"
  },
  {
    id: 2,
    title: "Order Out for Delivery",
    message: "Your order will arrive in 15 minutes.",
    time: "5 minutes ago",
    type: "info"
  },
  {
    id: 3,
    title: "New Offer Available!",
    message: "Get 20% off on all fruits today.",
    time: "1 hour ago",
    type: "offer"
  },
  {
    id: 4,
    title: "Weekend Special Deal",
    message: "Buy 1 Get 1 Free on all dairy products.",
    time: "2 hours ago",
    type: "offer"
  }
];

export function Notifications() {
  const [unreadCount, setUnreadCount] = React.useState<number>(notifications.length);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-8 w-8 sm:h-9 sm:w-9">
          <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-red-500 text-[8px] sm:text-[10px] font-medium text-white flex items-center justify-center">
              {unreadCount}
            </span>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] sm:w-80 p-0" align="end">
        <div className="p-3 sm:p-4 border-b">
          <h3 className="text-sm sm:text-base font-semibold">Notifications</h3>
        </div>
        <div className="divide-y max-h-[250px] sm:max-h-[300px] overflow-auto">
          {notifications.map((notification) => (
            <div key={notification.id} className="p-3 sm:p-4 hover:bg-accent cursor-pointer">
              <div className="flex items-start gap-2">
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-medium truncate">{notification.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{notification.message}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">{notification.time}</p>
                </div>
                {notification.type === "offer" && (
                  <span className="shrink-0 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-green-100 text-green-600 text-[10px] sm:text-xs">
                    Offer
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
} 