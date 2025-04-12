"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

export function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="w-12 h-12 rounded-full shadow-lg bg-primary hover:bg-primary/90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <MessageCircle className="w-5 h-5" />
          )}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80">
          <Card className="shadow-xl">
            <div className="p-4 border-b">
              <h3 className="font-semibold">Chat with Us</h3>
              <p className="text-sm text-muted-foreground">We're here to help!</p>
            </div>
            <div className="p-4 h-80 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm">Hello! How can we help you today?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 rounded-lg border bg-background"
                />
                <Button size="sm">Send</Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
} 