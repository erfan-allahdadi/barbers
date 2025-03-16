import { getBarbers, getServices } from "@/services";
import BarberList from "@/components/BarberList";

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
      <h1 className="text-2xl font-bold mb-4">لیست آرایشگاه‌ها</h1>
      <BarberList
        searchParams={searchParams}
        barbers={barbers}
        services={services}
      />
    </main>
  );
}

export default Page;
