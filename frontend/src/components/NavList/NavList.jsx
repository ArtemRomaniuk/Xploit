import { useState } from "react";
import StyledNavList from "./NavList.styles";
import IconBtn from "./category-arrow.svg?react";

const resolveItem = (item) => {
  return typeof item === "object" ? (
    <>
      {item.icon ? <item.icon /> : null}
      <span>{item.value}</span>
    </>
  ) : (
    item
  );
};

const NavList = ({
  navName = "Nav",
  navItems = ["item1", "item2", "item3"],
  collapsing,
  ...props
}) => {
  const [isCollapsed, setCollapse] = useState(false);

  return (
    <StyledNavList
      {...props}
      $collapsing={collapsing}
      $isCollapsed={isCollapsed}
    >
      {collapsing ? (
        <div onClick={() => setCollapse((c) => !c)}>
          <h3>{navName}</h3>
          <button>
            <IconBtn />
          </button>
        </div>
      ) : (
        <h3>{navName}</h3>
      )}
      <ul>
        {navItems.map((item, i) => (
          <li key={i}>
            <a href="#">{resolveItem(item)}</a>
          </li>
        ))}
      </ul>
    </StyledNavList>
  );
};

export default NavList;
