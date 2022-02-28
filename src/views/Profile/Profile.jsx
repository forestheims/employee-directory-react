import { useProfile } from '../../context/profilesContext';
import styles from './Profile.css';

export default function Profile() {
  const { profile } = useProfile();

  return (
    <div className={styles.profile}>
      {!profile.name && (
        <>
          <p>It looks like you have not made a profile yet.</p>
          <p>
            Follow the 'Add Profile' link at the top of the page to create your
            profile
          </p>
        </>
      )}
      <p>Employee Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Birthday: {profile.birthday}</p>
      <p>Bio: {profile.bio}</p>
    </div>
  );
}
