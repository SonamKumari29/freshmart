import { Card, Button, Input, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-6">
          <div className="flex items-center gap-6 mb-8">
            <div className="relative h-24 w-24 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="text-muted-foreground">john.doe@example.com</p>
            </div>
          </div>

          <Tabs value="details" onValueChange={() => {}}>
            <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
              <TabsTrigger value="details">Personal Details</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="addresses">Addresses</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="mt-6">
              <div className="space-y-4">
                <Input label="First Name" defaultValue="John" />
                <Input label="Last Name" defaultValue="Doe" />
                <Input label="Email" type="email" defaultValue="john.doe@example.com" />
                <Input label="Phone" type="tel" defaultValue="+1 234 567 890" />
                <Button variant="primary">Save Changes</Button>
              </div>
            </TabsContent>

            {/* Additional tabs content for orders and addresses */}
          </Tabs>
        </Card>
      </div>
    </div>
  );
} 