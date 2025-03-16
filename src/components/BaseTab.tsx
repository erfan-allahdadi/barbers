"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface Tab {
  text: string;
  value: string;
  color: string;
}

interface BaseTabProps {
  tabs: Tab[];
}

function BaseTab({ tabs }: BaseTabProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentStatus = searchParams.get("is_shop") || "all";

  const handleTabClick = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("is_shop", value);

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex gap-2 my-8">
      {tabs.map(({ text, value, color }) => {
        const isActive = currentStatus === value;

        return (
          <button
            key={value}
            onClick={() => handleTabClick(value)}
            className={`px-4 py-2 rounded-lg cursor-pointer transition ${
              isActive ? `${color} text-white` : "bg-gray-200"
            }`}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
}

export default BaseTab;
