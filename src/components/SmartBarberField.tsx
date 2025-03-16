import Image from "next/image";

import { Barber } from "@/types/barbers";

interface SmartBarberFieldProps {
  item: Barber;
  field: { name: string };
}

const SmartBarberField: React.FC<SmartBarberFieldProps> = ({ item, field }) => {
  const fieldName = field.name.toLowerCase();

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

      default:
        return item[fieldName as keyof Barber];
    }
  };

  return <div className="p-2">{fieldValue()}</div>;
};

export default SmartBarberField;
