import { useState } from "react";
import StyledNavList from "./NavList.styles";
import IconBtn from "./category-arrow.svg?react";
import { Link } from "react-router";
import NavListItem from "./NavListItem";

const NavList = ({
  navName = "Nav",
  navItems = [new NavListItem(), new NavListItem(), new NavListItem()],
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
            <Link to={item.navTo}>
              {item.icon && <item.icon />}
              <span>{item.value}</span>
            </Link>
          </li>
        ))}
      </ul>
    </StyledNavList>
  );
};

export default NavList;
