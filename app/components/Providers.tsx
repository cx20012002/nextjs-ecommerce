'use client';

import { ReactNode } from 'react';
import { CartProvider as USCProvider } from 'use-shopping-cart';

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="nextjs-ecommerce-three-dun.vercel.app/stripe/success"
      cancelUrl="nextjs-ecommerce-three-dun.vercel.app/stripe/error"
      currency="NZD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}
