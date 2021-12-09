import React from 'react';

export default function Controls({ query, setQuery, setLoading, sort, setSort }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Find a Pokemon"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <select className="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
      <button onClick={() => setLoading(true)}>Find!</button>
    </div>
  );
}
