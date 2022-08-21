import React from 'react'


export const ChangeDoneButton = (props) => {

  const {changeDone} = props;
  return (
    <button onClick={changeDone}>完了か未完了か</button>
  )
}

