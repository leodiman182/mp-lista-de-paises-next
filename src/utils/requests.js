import { URL } from './api';

export async function fetchCountries() {
  const res = await fetch(`${URL}`);

  if (!res.ok) {
    history.forward('/error');
  }

  const data = res.json();

  return data;
}
