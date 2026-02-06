import StyledCards from "./Cards.styles";
import Card from "../../../MainLayout/Catalog/components/Card";
import CatalogBtn from "../../../MainLayout/Catalog/components/CatalogBtn";
import { useEffect } from "react";
import { debounce } from "lodash";
import { useCatalog } from "../../../../hooks/catalog/useCatalog";
import InfiniteScroll from "react-infinite-scroll-component";
import IconStar from "./icons/star.svg?react";
import IconAscending from "./icons/ascending.svg?react";
import IconDescending from "./icons/descending.svg?react";

const Cards = () => {
  const items = useCatalog((state) => state.items);
  const fetchPage = useCatalog((state) => state.fetchPage);
  const currentSort = useCatalog((s) => s.currentSort);
  const currentLimit = useCatalog((s) => s.currentLimit);
  const setLimit = useCatalog((s) => s.setLimit);
  const allItemsCount = useCatalog((s) => s.allItemsCount);
  const appendNextItems = useCatalog((s) => s.appendNextItems);
  const setSort = useCatalog((s) => s.setSort);
  const hasMore = useCatalog((s) => s.hasMore);

  useEffect(() => {
    const windowResizeListener = debounce(() => {
      const newLimit =
        4 *
        getComputedStyle(
          document.querySelector(".cards"),
        ).gridTemplateColumns.split(" ").length;
      setLimit(newLimit || 2);
    }, 100);

    window.addEventListener("resize", windowResizeListener);
    windowResizeListener();
    return () => {
      window.removeEventListener("resize", windowResizeListener);
      windowResizeListener.cancel();
    };
  }, []);

  return (
    <StyledCards>
      <div className="btns-container">
        <p>Best for you</p>

        <div>
          <CatalogBtn
            data-cy="sortTop"
            className="btn-sort-top"
            onClick={() => setSort("top")}
            $filled={currentSort === "top" ? true : false}
          >
            <span>Top</span>
            <IconStar />
          </CatalogBtn>
          <CatalogBtn
            data-cy="sortCheap"
            className="btn-sort-cheap"
            $width="13rem"
            onClick={() => setSort("cheap")}
            $filled={currentSort === "cheap" ? true : false}
          >
            <span>From cheap</span>
            <IconAscending />
          </CatalogBtn>
          <CatalogBtn
            data-cy="sortExpensive"
            className="btn-sort-expensive"
            $width="16.7rem"
            onClick={() => setSort("expensive")}
            $filled={currentSort === "expensive" ? true : false}
          >
            <span>From expensive</span>
            <IconDescending />
          </CatalogBtn>
        </div>
      </div>

      <InfiniteScroll
        className="cards"
        dataLength={items.length}
        next={appendNextItems}
        hasMore={hasMore}
        scrollableTarget="scrollableWrapper"
        loader={<h4>Loading...</h4>}
        endMessage={<h4>No more items... </h4>}
      >
        {items.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </InfiniteScroll>
    </StyledCards>
  );
};

export default Cards;
