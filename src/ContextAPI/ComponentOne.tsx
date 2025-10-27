import ComponentTwo from "./ComponentTwo";
import UserProvider from "./UserProvider";

const ComponentOne = () => {
  return (
    <UserProvider>
      <ComponentTwo />;
    </UserProvider>
  );
};

export default ComponentOne;
