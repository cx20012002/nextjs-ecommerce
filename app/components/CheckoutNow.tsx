'use client';

import { Button } from '@/components/ui/button';
import { useShoppingCart } from 'use-shopping-cart';

export default function CheckoutNow({ price_id }: { price_id: string }) {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

  return (
    <Button
      variant="outline"
      onClick={() => {
        buyNow(price_id);
      }}
    >
      Checkout Now
    </Button>
  );
}
