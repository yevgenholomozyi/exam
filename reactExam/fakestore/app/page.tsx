import { Suspense } from "react";

import Products from "@/modules/products";
import Skeleton from "@/components/Skeleton";

export default function Home() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Products />
    </Suspense>
  );
}
