import React from 'react'

// const isObject = (value) => {
//   return value !== null && typeof value === 'object'
// }

const DonePopup = (is_completed) => {
  const checkBoolean = is_completed
  // console.log('fdfd')
  // console.log(isObject(is_completed))
  // console.log(is_completed)
  if (checkBoolean.is_completed === true) {
      return <p style={{color: 'red' }}>完了の状態</p>
  } else {
      return <p style={{color: 'blue' }}>未完了の状態</p>
  }
}

export default DonePopup