export const fetchQuote = () => {
  return fetch('http://localhost:3000/api/v1/auth/signin', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Error getting quote.';

      return json;
    });
};
