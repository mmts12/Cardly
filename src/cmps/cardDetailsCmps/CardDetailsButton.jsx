import React from 'react';

export function CardDetailsButton(props) {

  const togglePopUp = (ev) => {
    const { name, onButtonClick } = props
    onButtonClick(name)
  }
  const txt = props.text;
  return (
    <button className="card-details-btn" onClick={togglePopUp}>
      <div className="props-icon">{props.icon}</div>
      <span className="props-txt">{txt}</span>
    </button>
  )

}
