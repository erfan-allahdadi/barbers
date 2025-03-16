import { getBarbers, getServices } from "@/services";
import BarberList from "@/components/BarberList";
import { Suspense } from "react";
import Loading from "../loading";

async function Page({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) {
  const searchQuery = searchParams?.search ?? "";
  const servicesQuery = searchParams?.services ?? "";

  const services = await getServices();
  const barbers = await getBarbers(searchQuery, servicesQuery);

  return (
    <main className="container mx-auto p-4">
      <Suspense fallback={<Loading />}>
        <BarberList
          searchParams={searchParams}
          barbers={barbers}
          services={services}
        />
      </Suspense>
    </main>
  );
}

export default Page;
