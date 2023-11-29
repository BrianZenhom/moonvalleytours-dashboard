import { addTour } from '@/app/lib/actions';
import styles from '@/app/ui/dashboard/tours/addTours/addTours.module.css';

export default async function AddToursPage() {
  const result = await fetch(
    'https://moonvalleytours-api.1.ie-1.fl0.io/cities'
  );
  const data = await result.json();

  return (
    <form className={styles.container} action={addTour}>
      <label>
        name of tour
        <input type="text" name="tour" />
      </label>
      <label>
        tour description
        <input type="text" name="tour_description" />
      </label>
      <label>
        price
        <input type="number" name="tour_price" />
      </label>
      <label>
        language
        <input type="text" name="tour_language" />
      </label>
      <label>
        <select name="free_cancellation">
          <option value={1}>true</option>
          <option value={0}>false</option>
        </select>
      </label>
      <label>
        url image
        <input type="url" name="tour_image" />
      </label>
      <label>
        <select defaultValue="Choose a city" type="text" name="city">
          <option value="none" selected disabled hidden>
            Choose a city
          </option>
          {data.map((city) => (
            <>
              <option key={city.city} value={city.city}>
                {city.city}
              </option>
            </>
          ))}
        </select>
      </label>
      <button>submit</button>
    </form>
  );
}
