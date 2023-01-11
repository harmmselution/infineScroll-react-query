import InfiniteScroll from 'react-infinite-scroller';
import { Person } from './Person';

const initialUrl = 'https://swapi.dev/api/people';
const fetchUrl = async (url) => {
  const res = await fetch(url);
  return res.json();
};
function InfinitePeople() {
  return <InfiniteScroll />;
}

export default InfinitePeople;
