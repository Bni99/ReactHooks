import { useState } from "react";
import ComponentTwo from "./ComponentTwo";
import type { User } from "./Type";

const ComponentOne = () => {
  const [user] = useState<User>({
    name: "John",
    age: 27,
  });

  return <ComponentTwo user={user} />;
};

export default ComponentOne;
