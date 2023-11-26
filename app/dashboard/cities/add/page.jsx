import { addCity } from '@/app/lib/actions';

export default async function AddCityPage() {
  const result = await fetch('https://moonvalleytours-api.1.ie-1.fl0.io/');
  const data = await result.json();

  return (
    <div>
      <div>
        <form action={addCity}>
          <input type="text" placeholder="city" name="city" required />
          <input type="text" placeholder="image" name="city_image" />
          <input
            type="text"
            placeholder="header image"
            name="city_header_image"
            required
          />
          <select default="Choose one" required name="countries">
            {data.map((country) => (
              <>
                <option value={country.country}>{country.country}</option>
              </>
            ))}
          </select>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
