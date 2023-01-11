import InfiniteScroll from 'react-infinite-scroller';
import { Species } from './Species';
import { useInfiniteQuery } from 'react-query';
const initialUrl = 'https://swapi.dev/api/species';
const fetchUrl = async (url) => {
  const res = await fetch(url);
  return res.json();
};
function InfiniteSpecies() {
  const { data, fetchNextPage, hasNextPage, isError, error, isLoading } = useInfiniteQuery(
    'sw-species',
    ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    { getNextPageParam: (lastPage) => lastPage.next || undefined },
  );
  if (isLoading) return <div className="li1">Loading....</div>;
  if (isError) return <div>{error.toString()}</div>;
  return (
    <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
      {data.pages.map((pageData) => {
        return pageData.results.map((item) => (
          <Species
            key={item.name}
            name={item.name}
            language={item.language}
            averageLifespan={item.average_lifespan}
          />
        ));
      })}
    </InfiniteScroll>
  );
}

export default InfiniteSpecies;
