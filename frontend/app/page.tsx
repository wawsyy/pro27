import { ProductionDeltaDemo } from "@/components/ProductionDeltaDemo";

// Disable static generation since this page uses Web3 wallet connections
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col gap-8 items-center sm:items-start w-full px-3 md:px-0">
        <ProductionDeltaDemo />
      </div>
    </main>
  );
}

