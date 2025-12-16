import StyledCardsCatalog from "./CardsCatalog.styles";
import Card from "../Card";
import CatalogBtn from "../CatalogBtn";
import { useEffect } from "react";
import IconArrow from "./icon-arrow.svg?react";
import { useCatalog } from "../../../../../hooks/catalog/useCatalog";

const CardsCatalog = () => {
  const items = useCatalog((state) => state.items);
  const fetchPage = useCatalog((state) => state.fetchPage);
  const fetchItemsCount = useCatalog((s) => s.fetchItemsCount);
  const nextPage = useCatalog((s) => s.nextPage);
  const prevPage = useCatalog((s) => s.prevPage);
  const sort = useCatalog((s) => s.currentSort);
  const setSort = useCatalog((s) => s.setSort);
  const currentPage = useCatalog((s) => s.currentPage);
  const currentSort = useCatalog((s) => s.currentSort);
  const currentLimit = useCatalog((s) => s.currentLimit);

  useEffect(() => {
    fetchPage();
  }, [currentPage, currentSort, currentLimit]);

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
          <CatalogBtn $width="6rem" $height="4.8rem" onClick={prevPage}>
            <IconArrow />
          </CatalogBtn>
          <CatalogBtn $width="6rem" $height="4.8rem" onClick={nextPage}>
            <IconArrow />
          </CatalogBtn>
        </div>
      </div>

      <div className="cards">
        {items.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
    </StyledCardsCatalog>
  );
};

export default CardsCatalog;
