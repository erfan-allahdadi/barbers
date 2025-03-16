"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Tab {
  text: string;
  value: string;
  color: string;
}

interface BaseTabProps {
  tabs: Tab[];
}

function BaseTab({ tabs }: BaseTabProps) {
  const searchParams = useSearchParams();
  const currentStatus = searchParams.get("is_shop") || "all";

  return (
    <div className="flex gap-2 mt-6 mb-4">
      {tabs.map(({ text, value, color }) => {
        const isActive = currentStatus === value;

        return (
          <Link
            key={value}
            href={{ pathname: "/barbers", query: { is_shop: value } }}
            scroll={false}
            className={`px-4 py-2 rounded-lg cursor-pointer ${
              isActive ? `${color} text-white` : "bg-gray-200"
            }`}
          >
            {text}
          </Link>
        );
      })}
    </div>
  );
}

export default BaseTab;
