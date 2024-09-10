import useUserStore from "../store/userStore";

const Profile = () => {
  const username = useUserStore((state) => state.username);

  return <>profile: {username}</>;
};

export default Profile;
