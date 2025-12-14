import StyledCardsCatalog from "./CardsCatalog.styles";
import Card from "../Card";
import CatalogBtn from "../CatalogBtn";
import { useEffect, useState } from "react";
import IconArrow from "./icon-arrow.svg?react";
import { useCatalog } from "../../../../../hooks/catalog/useCatalog";

const CardsCatalog = () => {
  const [sort, setSort] = useState("top");
  const items = useCatalog((state) => state.items);
  const fetchItems = useCatalog((state) => state.fetchItems);

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <StyledCardsCatalog>
      <div className="btns-container">
        <p>Best for you</p>

        <div>
          <CatalogBtn
            onClick={() => setSort("top")}
            $filled={sort === "top" ? true : false}
          >
            Top
          </CatalogBtn>
          <CatalogBtn
            $width="13rem"
            onClick={() => setSort("cheap")}
            $filled={sort === "cheap" ? true : false}
          >
            From cheap
          </CatalogBtn>
          <CatalogBtn
            $width="16.7rem"
            onClick={() => setSort("expensive")}
            $filled={sort === "expensive" ? true : false}
          >
            From expensive
          </CatalogBtn>
        </div>

        <div>
          <CatalogBtn $width="6rem" $height="4.8rem">
            <IconArrow />
          </CatalogBtn>
          <CatalogBtn $width="6rem" $height="4.8rem">
            <IconArrow />
          </CatalogBtn>
        </div>
      </div>

      <div className="cards">
        {items.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </StyledCardsCatalog>
  );
};

export default CardsCatalog;
