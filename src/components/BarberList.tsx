import BaseTab from "./BaseTab";
import SearchBar from "./SearchBar";
import BarberTable from "./BarberTable";

import { Barbers } from "@/types/barbers";
import { ServiceResponse } from "@/types/services";

import ServiceFilter from "./ServiceFilter";

import { STATUSES } from "@/config/system.config";

interface BarberListProps {
  searchParams: { search?: string; is_shop?: string; services?: string };
  barbers: Barbers;
  services: ServiceResponse;
}

async function BarberList({
  searchParams = {},
  barbers,
  services,
}: BarberListProps) {
  const search = searchParams.search ?? "";

  return (
    <div className="container mx-auto p-6">
      <div>
        <h1 className="text-2xl font-bold mb-4">لیست آرایشگاه‌ها</h1>
        <BaseTab tabs={Object.values(STATUSES)} />
      </div>
      <div className="w-full">
        <SearchBar search={search} />
      </div>
      <div className="flex space-x-6">
        <div className="w-1/5">
          <ServiceFilter services={services} />
        </div>
        <div className="w-4/5 overflow-x-auto">
          <BarberTable results={barbers.results} />
        </div>
      </div>
    </div>
  );
}

export default BarberList;
