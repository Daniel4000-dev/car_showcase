export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "2a6bd14accmsh2dcdb433e2bdc18p165319jsnaf8764c8036f",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    { headers: headers }
  );

  const result = await response.json();
  return result;
}
