'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';
import { ColorType } from '@/components/theme-color-context';
import AnimatedBackground from '@/components/ui/animated-background';

export default function NotFound() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [countdown, setCountdown] = useState(4);

  // Define the color themes and their corresponding ColorType
  const colorTypes: ColorType[] = ['blue', 'green', 'purple', 'orange'];
  const styles = [
    // Blue theme
    {
      text: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700',
      buttonText: 'text-white',
    },
    // Green theme
    {
      text: 'text-green-600',
      button: 'bg-green-600 hover:bg-green-700',
      buttonText: 'text-white',
    },
    // Purple theme
    {
      text: 'text-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700',
      buttonText: 'text-white',
    },
    // Orange theme
    {
      text: 'text-orange-600',
      button: 'bg-orange-600 hover:bg-orange-700',
      buttonText: 'text-white',
    },
  ];

  // Set up color cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % styles.length);
    }, 3000); // Change color every 3 seconds

    return () => clearInterval(interval);
  }, [styles.length]);

  // Auto redirect to home page after 4 seconds with countdown
  useEffect(() => {
    if (countdown <= 0) {
      router.push('/');
      return;
    }

    const countdownTimer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(countdownTimer);
  }, [countdown, router]);

  // Get current style and color
  const currentStyle = styles[currentIndex];
  const currentColor = colorTypes[currentIndex];

  return (
    <div className="fixed inset-0 w-full h-full">
      {/* Animated background with particles */}
      <AnimatedBackground currentColor={currentColor} />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {/* 404 Image */}
        <div className="mb-8 transition-transform duration-300 hover:scale-105" style={{ maxWidth: '350px' }}>
          <Image
            src={getAssetPath('/404.png')}
            alt="404 Error"
            width={350}
            height={350}
            className={`w-full h-auto transition-opacity duration-1000 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsImageLoaded(true)}
            priority
          />
        </div>

        {/* Error message */}
        <div className="text-center px-4 max-w-md">
          <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${currentStyle.text} transition-colors duration-1000`}>
            Page Not Found
          </h2>

          <p className="text-gray-800 mb-6 text-lg">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          {/* Return home button */}
          <Link
            href="/"
            className={`inline-block px-6 py-3 rounded-md ${currentStyle.button} ${currentStyle.buttonText} font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-lg`}
          >
            Return Home
          </Link>

          {/* Countdown indicator */}
          <p className="mt-4 text-sm text-gray-600">
            Redirecting to home page in {countdown} second{countdown !== 1 ? 's' : ''}...
          </p>
        </div>
      </div>
    </div>
  );
}
