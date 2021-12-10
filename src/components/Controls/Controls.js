import React from 'react';
import { Button, TextField, Select, MenuItem } from '@mui/material';

export default function Controls({
  query,
  setQuery,
  setLoading,
  sort,
  setSort,
  selectedType,
  setSelectedType,
  types,
}) {
  return (
    <div className="textfield">
      <TextField
        type="text"
        placeholder="Find a Pokemon"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <Select className="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
        <MenuItem value="desc">Descending</MenuItem>
        <MenuItem value="asc">Ascending</MenuItem>
      </Select>
      <Select
        className="type"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <MenuItem value="all">All</MenuItem>
        {types.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
      <Button style={{ backgroundColor: '#79c99e' }} onClick={() => setLoading(true)}>
        Find!
      </Button>
    </div>
  );
}
