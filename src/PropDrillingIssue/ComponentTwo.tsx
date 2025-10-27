import ComponentThree from "./ComponentThree";
import type { User } from "./Type";

type ComponentTwoProps = {
  user: User;
};

const ComponentTwo = ({ user }: ComponentTwoProps) => {
  return <ComponentThree user={user} />;
};

export default ComponentTwo;
