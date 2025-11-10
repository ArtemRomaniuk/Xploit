import StyledProfile from "./Profile.styles";
import ProfileCircle from "./profile-circle.svg?react";
import ProfilePhoto from "./profile-photo.svg?react";
import { useUser } from "../../../../features/user/useUser";

const Profile = () => {
  const isLoggedIn = useUser((state) => state.isLoggedIn);
  const username = useUser((state) => state.username);
  const xp = useUser((state) => state.xp);

  return (
    <StyledProfile>
      <div>
        {isLoggedIn ? (
          <>
            <p>{username}</p>
            <p>{xp} XP</p>
          </>
        ) : (
          <p>Login</p>
        )}
      </div>
      <figure>
        <ProfileCircle />
        <ProfilePhoto />
      </figure>
    </StyledProfile>
  );
};

export default Profile;
