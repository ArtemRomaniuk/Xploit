import StyledCardsCatalog from "./CardsCatalog.styles";
import Card from "../Card";
import CatalogBtn from "../CatalogBtn";
import { useEffect } from "react";
import IconArrow from "./icon-arrow.svg?react";
import { useCatalog } from "../../../../../hooks/catalog/useCatalog";
import { debounce } from "lodash";

const CardsCatalog = () => {
  const items = useCatalog((state) => state.items);
  const fetchPage = useCatalog((state) => state.fetchPage);
  const nextPage = useCatalog((s) => s.nextPage);
  const prevPage = useCatalog((s) => s.prevPage);
  const setSort = useCatalog((s) => s.setSort);
  const currentPage = useCatalog((s) => s.currentPage);
  const currentSort = useCatalog((s) => s.currentSort);
  const currentLimit = useCatalog((s) => s.currentLimit);
  const setLimit = useCatalog((s) => s.setLimit);

  useEffect(() => {
    const windowResizeListener = debounce(() => {
      const cardsContainerWidth = parseFloat(
        getComputedStyle(document.querySelector(".cards")).width,
      );
      const rem = parseFloat(
        getComputedStyle(document.documentElement).fontSize,
      );
      const cardMinWidth = 24 * rem;
      const columnGap = 2.4 * rem;
      const newLimit =
        2 *
        Math.trunc(
          (cardsContainerWidth + columnGap) / (cardMinWidth + columnGap),
        );
      setLimit(newLimit || 2);
    }, 100);
    windowResizeListener();

    window.addEventListener("resize", windowResizeListener);
    return () => {
      window.removeEventListener("resize", windowResizeListener);
      windowResizeListener.cancel();
    };
  }, []);

  useEffect(() => {
    fetchPage();
  }, [currentPage, currentSort, currentLimit]);

  return (
    <StyledCardsCatalog>
      <div className="btns-container">
        <p>Best for you</p>

        <div>
          <CatalogBtn
            data-cy="sortTop"
            className="btn-sort-top"
            onClick={() => setSort("top")}
            $filled={currentSort === "top" ? true : false}
          >
            Top
          </CatalogBtn>
          <CatalogBtn
            data-cy="sortCheap"
            className="btn-sort-cheap"
            $width="13rem"
            onClick={() => setSort("cheap")}
            $filled={currentSort === "cheap" ? true : false}
          >
            From cheap
          </CatalogBtn>
          <CatalogBtn
            data-cy="sortExpensive"
            className="btn-sort-expensive"
            $width="16.7rem"
            onClick={() => setSort("expensive")}
            $filled={currentSort === "expensive" ? true : false}
          >
            From expensive
          </CatalogBtn>
        </div>

        <div>
          <CatalogBtn
            className="btn-prev-page"
            $width="6rem"
            $height="4.8rem"
            onClick={prevPage}
          >
            <IconArrow />
          </CatalogBtn>
          <CatalogBtn
            className="btn-next-page"
            $width="6rem"
            $height="4.8rem"
            onClick={nextPage}
          >
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
