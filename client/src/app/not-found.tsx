'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 4 seconds
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, 4000);

    // Clean up the timer when component unmounts
    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src={getAssetPath('/images/404_page.jpeg')}
          alt="404 Page Not Found"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
