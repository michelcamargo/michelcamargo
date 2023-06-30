const fetcher = url => {
  return fetch(url).then(res => res.json());
};

export default fetcher;
