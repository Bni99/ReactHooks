import { useUserContext } from "./UserContext";

const ComponentThree = () => {
  const user = useUserContext();
  return (
    <>
      {user?.name} : {user?.age}
    </>
  );
};

export default ComponentThree;
