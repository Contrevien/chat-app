import React from 'react'

const styles = {
  'position':'fixed',
  'width':'100%',
  'height':'70px',
  'textAlign':'center',
  'zIndex':'500',
  'letterSpacing': '0.7px',
  'backgroundColor':'white',
  'paddingTop':'30px',
}

const name = (props) => {
  return (<div style={styles}><h3>{props.name}</h3></div>)
}

export default name