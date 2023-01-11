import InfiniteScroll from 'react-infinite-scroller';
import { Species } from './Person';

const initialUrl = 'https://swapi.dev/api/species';
const fetchUrl = async (url) => {
  const res = await fetch(url);
  return res.json();
};
function InfiniteSpecies() {
  return <InfiniteScroll />;
}

export default InfiniteSpecies;
