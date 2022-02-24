import { client, checkError } from './client.js';

export async function getProfiles() {
  const resp = { finishedFunction: false };
  checkError(resp);
}

export async function createProfile({ email, name, bio, birthday }) {
  const resp = { finishedFunction: false };
  checkError(resp);
}

export async function updateProfile({ id, email, name, bio, birthday }) {
  const resp = { finishedFunction: false };
  checkError(resp);
}
