import styles from '@/app/ui/dashboard/countries/addCountry/addCountry.module.css';
// import { v2 as cloudinary } from 'cloudinary';
// import dotenv from 'dotenv';
import { addCountry } from '@/app/lib/actions';
import { revalidatePath } from 'next/cache';

// dotenv.config();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET,
// });

export default async function AddCountry() {
  // async function create(formData = FormData) {
  //   'use server';
  //   const file = formData.get('country_image');
  //   const arrayBuffer = await file.arrayBuffer();
  //   const buffer = new Uint8Array(arrayBuffer);
  //   await new Promise((resolve, reject) => {
  //     cloudinary.uploader
  //       .upload_stream({}, function (error, result) {
  //         if (error) {
  //           reject(error);
  //           return;
  //         } else {
  //           resolve(result);
  //         }
  //       })
  //       .end(buffer);
  //   });

  //   revalidatePath('/dashboard');
  // }

  revalidatePath('/dashboard/countries');

  return (
    <div className={styles.container}>
      <form action={addCountry} className={styles.form}>
        <input type="text" placeholder="country" name="country" required />
        <input type="text" placeholder="image" name="country_image" />
        <button>Submit</button>
      </form>
    </div>
  );
}
