'use server';

import mysql from 'mysql2/promise';

const connection = await mysql.createConnection(process.env.DATABASE_URL);

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const addCountry = async (formData) => {
  'use client';
  const country = formData.get('country');
  const country_image = formData.get('country_image');

  await connection.query(
    'INSERT INTO countries (country, country_image) VALUES (?, ?)',
    [country, country_image]
  );

  revalidatePath('/dashboard/countries');
  redirect('/dashboard/countries');
};

export const addCity = async (formData) => {
  'use client';
  const city = formData.get('city');
  const city_image = formData.get('city_image');
  const city_header_image = formData.get('city_header_image');
  const country = formData.get('countries');

  await connection.query(
    'INSERT INTO cities (city, city_image, city_header_image, country) VALUES (?, ?, ?, ?)',
    [city, city_image, city_header_image, country]
  );

  revalidatePath('/dashboard/cities');
  redirect('/dashboard/cities');
};
