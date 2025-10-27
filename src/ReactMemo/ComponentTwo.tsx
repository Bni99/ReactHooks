import { memo, useRef } from "react";

//So even if the parent re renders , child component does not re render if props remain unchanged

const ComponentTwo = () => {
  const renderCount = useRef(0);
  renderCount.current += 1;
  return <div>{renderCount.current}</div>;
};

export default memo(ComponentTwo);
