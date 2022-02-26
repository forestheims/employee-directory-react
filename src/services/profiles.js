import { client, checkError } from './client.js';

export async function getProfile() {
  const request = await client.from('profiles').select();
  return checkError(request);
}

export async function updateProfile({ name, email, bio, birthday }) {
  const request = await client
    .from('profiles')
    .update({ name, bio, birthday })
    .match({ email });
  return checkError(request);
}

export async function createProfile({ name, email, bio, birthday }) {
  const request = await client
    .from('profiles')
    .insert({ name, email, bio, birthday });
  return checkError(request);
}
