import StyledProfile from "./Profile.styles";
import ProfileCircle from "./profile-circle.svg?react";
import ProfilePhoto from "./profile-photo.svg?react";
import { useUser } from "../../../../hooks/useUser";

const Profile = ({ ...props }) => {
  const isLoggedIn = useUser((state) => state.isLoggedIn);
  const username = useUser((state) => state.username);
  const xp = useUser((state) => state.xp);

  return (
    <StyledProfile {...props}>
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
