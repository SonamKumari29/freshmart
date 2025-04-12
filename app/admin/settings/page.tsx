"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function AdminSettings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <div className="grid gap-6">
        {/* Store Settings */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Store Settings</h2>
          <div className="space-y-4">
            <div>
              <Label>Store Name</Label>
              <Input defaultValue="FreshMart" className="max-w-md" />
            </div>
            <div>
              <Label>Store Email</Label>
              <Input defaultValue="contact@freshmart.com" type="email" className="max-w-md" />
            </div>
            <div>
              <Label>Store Phone</Label>
              <Input defaultValue="+91 1234567890" type="tel" className="max-w-md" />
            </div>
            <div>
              <Label>Store Address</Label>
              <Input defaultValue="123, Main Street, Mumbai, India" className="max-w-md" />
            </div>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between max-w-md">
              <div>
                <Label>Order Notifications</Label>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Receive notifications for new orders
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between max-w-md">
              <div>
                <Label>Low Stock Alerts</Label>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Get notified when products are running low
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between max-w-md">
              <div>
                <Label>Customer Reviews</Label>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Notifications for new customer reviews
                </p>
              </div>
              <Switch />
            </div>
          </div>
        </Card>

        {/* Payment Settings */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Payment Settings</h2>
          <div className="space-y-4">
            <div>
              <Label>Currency</Label>
              <Input defaultValue="₹ (INR)" className="max-w-md" />
            </div>
            <div className="flex items-center justify-between max-w-md">
              <div>
                <Label>Cash on Delivery</Label>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Allow cash on delivery payments
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between max-w-md">
              <div>
                <Label>Online Payments</Label>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Accept online payments
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button size="lg">Save Changes</Button>
        </div>
      </div>
    </div>
  );
} 