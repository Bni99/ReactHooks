import type { User } from "./Type";

type ComponentThreeProps = {
  user: User;
};

const ComponentThree = ({ user }: ComponentThreeProps) => {
  return (
    <>
      {user?.name} : {user?.age}
    </>
  );
};

export default ComponentThree;
