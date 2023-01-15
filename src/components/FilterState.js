import { useState } from "react";

const FilterState = ({ src, name }) => {
  const [active, setActive] = useState(false);
  return (
    <img
      onClick={() => setActive((prev) => !prev)}
      src={src}
      className={active ? name[1] : name[0]}
    ></img>
  );
};

export default FilterState;
