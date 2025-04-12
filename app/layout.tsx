import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Footer } from "@/components/ui/footer";
import { MainNav } from "@/components/main-nav";
import { ChatBox } from "@/components/ui/chat-box";

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'FreshMart - Online Grocery Store',
  description: 'Your one-stop shop for fresh groceries and daily essentials',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const isAdminPage = pathname.startsWith('/admin');

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        'min-h-screen font-sans antialiased flex flex-col',
        'bg-[#f0f5f9] dark:bg-gray-900',
        'text-gray-900 dark:text-gray-100',
        poppins.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainNav />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ChatBox />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}