import React, { useState } from "react";

function Toggle() {
  const [ isOn='OFF', setIsOn ] = useState(false)

  function handleToggleClick(event) {
    setIsOn(isOn => !isOn)
  }

  const color = isOn? "red" : 'white';
  return <button style={{ background: color }} onClick={ handleToggleClick }>{isOn ? "ON": "OFF"}</button>;
}

export default Toggle;
