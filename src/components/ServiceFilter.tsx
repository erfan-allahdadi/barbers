"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { ServiceResponse } from "@/types/services";

interface ServiceFilterProps {
  services: ServiceResponse;
}

const ServiceFilter = ({ services }: ServiceFilterProps) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCheckboxChange = (slug: string) => {
    setSelectedServices((prevSelected) => {
      if (prevSelected.includes(slug)) {
        return prevSelected.filter((service) => service !== slug);
      }
      return [...prevSelected, slug];
    });
  };

  useEffect(() => {
    const servicesFromURL = searchParams.get("services");
    if (servicesFromURL) {
      setSelectedServices(servicesFromURL.split(","));
    }
  }, [searchParams]);

  useEffect(() => {
    if (selectedServices.length > 0) {
      const query = selectedServices.join(",");
      router.push(`/barbers?services=${query}`);
    } else {
      router.push(`/barbers`);
    }
  }, [selectedServices, router]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">لیست خدمات</h2>
      <div className="space-y-2">
        {services.results.map((service) => (
          <div
            key={service.slug}
            className={`flex items-center space-x-3 ${
              selectedServices.includes(service.slug)
                ? "border-blue-500"
                : "border-gray-300"
            }`}
          >
            <input
              type="checkbox"
              id={service.slug}
              checked={selectedServices.includes(service.slug)}
              onChange={() => handleCheckboxChange(service.slug)}
              className="hidden"
            />
            <label
              htmlFor={service.slug}
              className={`flex items-center space-x-2 cursor-pointer p-2 border rounded-md  ${
                selectedServices.includes(service.slug)
                  ? "bg-blue-200"
                  : "hover:bg-gray-100"
              }`}
            >
              <div className="w-6 h-6 flex justify-center items-center bg-gray-200 rounded-full">
                {service.icon ? (
                  <Image
                    src={service.icon}
                    alt={service.title}
                    className="w-4 h-4 object-contain"
                    width={30}
                    height={30}
                    style={{ width: "auto", height: "auto" }}
                  />
                ) : (
                  <span>{service.title[0]}</span>
                )}
              </div>
              <span>{service.title}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFilter;
