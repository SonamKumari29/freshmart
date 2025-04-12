export default function DeliveryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <main className="container py-6">
        {children}
      </main>
    </div>
  )
}