'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

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
      <img
        src={`${basePath}/images/404_page.jpeg`}
        alt="404 Page Not Found"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
    </div>
  );
}
