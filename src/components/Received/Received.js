import React from 'react'


let styles={
  'position': 'relative',
  'margin': '25px 0 0 5%',
  'boxShadow': '5px 5px 20px 3px #ddd',
  'maxWidth': '70%',
  'minWidth': '70px',
  'padding': '0px 24px 14px 24px',
  'wordWrap': 'break-word',
  'lineHeight': '150%',
  'fontSize': '0.9em',
  'minHeight': '50px',
  'clear': 'both',
  'float': 'left',
}

const received = (props) => {
 
  return(
    <div style={styles}>
      <h4>{props.by}</h4> 
      <p>{props.message}</p>
    </div>
  )
}


export default received