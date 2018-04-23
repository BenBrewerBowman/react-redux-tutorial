import React from 'react'
// import PropTypes from 'prop-types'


export default class Counter extends React.Component {
  render() {
    const {count, wish_value, onIncreaseClick, onUpdateClick} = this.props;
    return (
      <div>
        <span> {count} </span>
        <button onClick={onIncreaseClick}> Increase </button>
        <input value={wish_value} type='text' onChange={onUpdateClick}/>
      </div>
    );
  }
}