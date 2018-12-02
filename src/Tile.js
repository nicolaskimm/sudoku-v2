import React from 'react';
import './Tile.css';

const Tile = props => (
  <input
    min='1'
    max='9'
    type='number'
    id={props.id}
    value={props.value}
    disabled={props.noedit}
    onChange={props.onChange}
  />
);

export default Tile;