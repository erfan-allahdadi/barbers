"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  search: string;
}

const SearchBar = ({ search }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState(search);
  const router = useRouter();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm.trim() === "") {
      router.push("/barbers");
    } else {
      router.push(`/barbers?search=${newSearchTerm}`);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        className="p-2 border rounded"
        placeholder="جستجو کنید ..."
      />
    </div>
  );
};

export default SearchBar;
