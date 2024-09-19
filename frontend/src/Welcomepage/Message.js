import React from 'react'

const Message = (props) => {
  return (
    <div style={{"width":"100%","height":"10%","alignItems":"center","color":"red"}}>
      <h10>{props.message}</h10>
    </div>
  )
}

export default Message
