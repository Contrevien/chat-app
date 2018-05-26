import React from 'react'
import './Sender.css'


const sender = (props) => {
  
  let senderMargin = {
    'margin': '25px 5% -10px 0',
  }


  let arrow = null
  if (!props.isSenderBelow) {
    arrow = (<div className='ArrowDown'></div>)
    senderMargin = {
      'margin': '25px 5% 0 0'
    }
  }
  
  return(
          <div className='Sender' style={senderMargin}>
            <p>{props.message}</p>
            {arrow}
          </div>
        )
}

export default sender