import StyledNavList from "./NavList.styles";

const resolveItem = (item) => {
  return typeof item === "object" ? (
    <>
      <item.icon />
      <span>{item.value}</span>
    </>
  ) : (
    item
  );
};

const NavList = ({
  navName = "Nav",
  navItems = ["item1", "item2", "item3"],
  ...props
}) => {
  return (
    <StyledNavList {...props}>
      <h3>{navName}</h3>
      <ul>
        {navItems.map((item, i) => (
          <li key={i}>{resolveItem(item)}</li>
        ))}
      </ul>
    </StyledNavList>
  );
};

export default NavList;
