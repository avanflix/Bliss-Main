import BlissOneNavbar from '@/components/BlissOneNavbar';
import BlissOneFooter from '@/components/BlissOneFooter';

export const metadata = {
  title: 'Bliss One - Premium Residential Development | Bliss Ventures',
  description: 'Discover Bliss One - Yamnampet, a premium residential development by Bliss Ventures. Experience luxury living with modern architecture, exceptional amenities, and prime location in Hyderabad.',
  keywords: 'Bliss One, Yamnampet, residential, luxury apartments, Hyderabad, real estate, Bliss Ventures',
};

export default function BlissOneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <BlissOneNavbar />
      <main className="flex-1">
        {children}
      </main>
      <BlissOneFooter />
    </div>
  );
}
