import { Suspense } from "react";
import { Dashboard, DashboardSkeleton } from "@/components/Dashboard";

export default function HomePage() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <Dashboard />
    </Suspense>
  );
}
