import { useState } from "react";

const FilterState = ({ src, name }) => {
  const [active, setActive] = useState(false);
  return (
    <img
      onClick={() => setActive((prev) => !prev)}
      src={src}
      className={active ? name[0] : name[1]}
    ></img>
  );
};

export default FilterState;
