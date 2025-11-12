import StyledCardsCatalog from "./CardsCatalog.styles";
import Card from "../Card";
import CatalogBtn from "../CatalogBtn";
import { useState } from "react";
import IconArrow from "./icon-arrow.svg?react";
import { useCatalog } from "../../../../../hooks/catalog/useCatalog";

const CardsCatalog = () => {
  const [sort, setSort] = useState("top");
  const items = useCatalog((state) => state.items);

  return (
    <StyledCardsCatalog>
      <div>
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

      <div>
        {items.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </StyledCardsCatalog>
  );
};

export default CardsCatalog;
