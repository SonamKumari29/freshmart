"use client";

import * as React from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const notifications = [
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
  const [unreadCount, setUnreadCount] = React.useState(notifications.length);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
              {unreadCount}
            </span>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0">
        <div className="p-4 border-b">
          <h3 className="font-semibold">Notifications</h3>
        </div>
        <div className="divide-y max-h-[300px] overflow-auto">
          {notifications.map((notification) => (
            <div key={notification.id} className="p-4 hover:bg-accent cursor-pointer">
              <div className="flex items-start gap-2">
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{notification.title}</h4>
                  <p className="text-sm text-muted-foreground">{notification.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                </div>
                {notification.type === "offer" && (
                  <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 text-xs">
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