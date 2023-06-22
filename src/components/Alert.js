import React from 'react'

function Alert(props) {

  const captalize = (word)=>{
    let lowWord = word.toLowerCase();
    return lowWord.charAt(0).toUpperCase() + lowWord.slice(1);
  }

  return (
    props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert" style={{position: 'absolute', right: '13px', bottom: 0}}>
        <strong>{captalize(props.Alert.type)}!</strong> {props.Alert.msg}
    </div>
  )
}

export default Alert