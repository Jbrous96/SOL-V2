import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import './globals.css';

export const metadata = {
  title: 'Shops Of Legacy - Global Business Directory',
  description: 'Discover exceptional businesses worldwide, with roots in Plano, Texas. Join our curated directory of legacy-making enterprises.',
  keywords: 'Shops of Legacy, Plano business directory, global businesses, Shops of Legacy Plano, heritage businesses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        GeistSans.variable,
        GeistMono.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}