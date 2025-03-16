import { Barber } from "@/types/barbers";
import { LIST_FIELDS } from "@/config/system.config";

function BarberTable({ results }: { results: Barber[] }) {
  return (
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 my-4">
      <thead className="bg-blue-500 text-white">
        <tr>
          {Object.values(LIST_FIELDS).map((field) => (
            <th
              key={field.name}
              className="p-3 border border-gray-300 text-right font-semibold"
            >
              {field.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {results.map((barber, index) => (
          <tr
            key={barber.slug}
            className={`border-b transition ${
              index % 2 === 0 ? "bg-gray-50" : "bg-white"
            }`}
          >
            {Object.values(LIST_FIELDS).map((field) => {
              const Component = field.component;
              return (
                <td key={field.name} className="p-3 border border-gray-200">
                  <Component item={barber} field={field} />
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BarberTable;
