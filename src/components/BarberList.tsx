import { Barbers } from "@/types/barbers";
import BarberTable from "./BarberTable";
import SearchBar from "./SearchBar";

interface BarberListProps {
  searchParams: { search?: string; is_shop?: string; services?: string };
  barbers: Barbers;
}

async function BarberList({ searchParams = {}, barbers }: BarberListProps) {
  const search = searchParams.search ?? "";

  return (
    <div className="container mx-auto p-6">
      <SearchBar search={search} />
      <div className="overflow-x-auto">
        <BarberTable results={barbers.results} />
      </div>
    </div>
  );
}

export default BarberList;
