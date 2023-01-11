import InfiniteScroll from 'react-infinite-scroller';
import { Person } from './Person';
import { useInfiniteQuery } from 'react-query';
const initialUrl = 'https://swapi.dev/api/people';
const fetchUrl = async (url) => {
  const res = await fetch(url);
  return res.json();
};
function InfinitePeople() {
  const { data, fetchNextPage, hasNextPage, isError, isLoading, error } = useInfiniteQuery(
    'sw-people',
    ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    { getNextPageParam: (lastPage) => lastPage.next || undefined },
  );
  console.log(data);
  if (isError) return <div>{error.toString()}</div>;
  if (isLoading) return <div className="li1">Loading....</div>;
  return (
    <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
      {data.pages.map((pageData) => {
        return pageData.results.map((person) => {
          return (
            <Person
              key={person.name}
              name={person.name}
              eyeColor={person.eye_color}
              hairColor={person.hair_color}
            />
          );
        });
      })}
    </InfiniteScroll>
  );
}

export default InfinitePeople;
