import { getBarbers } from "@/services";
import BarberList from "@/components/BarberList";

async function Page({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) {
  const searchQuery = searchParams?.search ?? "";

  const barbers = await getBarbers(searchQuery);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">لیست آرایشگاه‌ها</h1>
      <BarberList searchParams={searchParams} barbers={barbers} />
    </main>
  );
}

export default Page;
