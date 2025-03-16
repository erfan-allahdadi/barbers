import Image from "next/image";

import { Barber } from "@/types/barbers";

interface SmartBarberFieldProps {
  item: Barber;
  field: { name: string };
}

const SmartBarberField: React.FC<SmartBarberFieldProps> = ({ item, field }) => {
  const fieldName = field.name.toLowerCase();

  // each case can be a component
  const fieldValue = () => {
    switch (fieldName) {
      case "avatar":
        return (
          <Image
            src={item.avatar}
            alt={item.fullname}
            width={50}
            height={50}
            style={{ width: "auto", height: "auto" }}
            className="rounded-full"
          />
        );

      case "rate":
        return (
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            {item.rate}
          </div>
        );

      case "services":
        return (
          <div className="flex gap-2 flex-wrap">
            {item.services.map((service, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-gray-200 rounded-full"
              >
                {service}
              </span>
            ))}
          </div>
        );

      default:
        return item[fieldName as keyof Barber];
    }
  };

  return <div className="p-2">{fieldValue()}</div>;
};

export default SmartBarberField;
