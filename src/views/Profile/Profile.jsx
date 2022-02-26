import { useProfile } from '../../context/profilesContext';

export default function Profile() {
  const { profile } = useProfile();

  return (
    <>
      {!profile.name && (
        <>
          <h1>It looks like you have not made a profile yet.</h1>
          <h2>
            Follow the 'Add Profile' link at the top of the page to create your
            profile
          </h2>
        </>
      )}
      <p>Employee Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Birthday: {profile.birthday}</p>
      <p>Bio: {profile.bio}</p>
    </>
  );
}
