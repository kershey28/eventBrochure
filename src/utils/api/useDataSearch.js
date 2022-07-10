import axios from 'axios';
import { useEffect, useState } from 'react';

const useDataSearch = (query, pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  // when query changes, reset data array
  useEffect(() => {
    setData([]);
  }, [query]);

  // handling query to fetch data
  useEffect(() => {
    setLoading(true);
    setError(false);

    let cancel;
    const limit = 10;
    const offsetConfig = limit * pageNumber - limit;
    const url = 'https://api.spacexdata.com/v3/launches';
    const options = {
      params: {
        mission_name: query,
        limit,
        offset: offsetConfig,
      },
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    };

    // fetch data
    axios
      .get(url, options)
      .then(res => {
        setData(prevData => {
          return [...new Set([...prevData, ...res.data.map(data => data)])];
        });

        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch(e => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    // cleanup
    return () => cancel();
  }, [query, pageNumber]);
  return { loading, error, data, hasMore };
};

export default useDataSearch;
