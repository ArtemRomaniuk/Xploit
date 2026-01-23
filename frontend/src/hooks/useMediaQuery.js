import { useState, useEffect } from "react";

export const useMediaQuery = (queryString) => {
  const [matches, setMatches] = useState(
    window.matchMedia(queryString).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(queryString);
    const onMatchesChange = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", onMatchesChange);
    return () => media.removeEventListener("change", onMatchesChange);
  }, [queryString]);

  return matches;
};
