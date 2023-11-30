import { addCity } from '@/app/lib/actions';
import styles from '@/app/ui/dashboard/cities/addCity/addCity.module.css';

export default async function AddCityPage() {
  const result = await fetch('https://moonvalleytours-api.1.ie-1.fl0.io/');
  const data = await result.json();

  return (
    <div className={styles.container}>
      <form className={styles.form} action={addCity}>
        <select id="countries" required name="countries">
          <option value="general" selected disabled hidden>
            Choose a country
          </option>
          {data.map((country) => (
            <>
              <option value={country.country}>{country.country}</option>
            </>
          ))}
        </select>
        <input type="text" placeholder="city" name="city" required />
        <input type="text" placeholder="image" name="city_image" />
        <input
          type="text"
          placeholder="header image"
          name="city_header_image"
          required
        />
        <button>Add City</button>
      </form>
    </div>
  );
}
