export const getBarbers = async (search: string = "") => {
  const response = await fetch(
    `https://lookee.nwhco.ir/aapi/barbers?search=${search}`
  );
  const data = await response.json();

  return data;
};
