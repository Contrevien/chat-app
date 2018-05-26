import React from 'react'

const styles = {
  'position':'fixed',
  'width':'100%',
  'height':'55px',
  'display':'flex',
  'alignItems':'center',
  'justifyContent':'center',
  'zIndex':'500',
  'letterSpacing': '1px',
  'boxShadow':'0 4px 8px 0 rgba(0,0,0,0.2)',
  'backgroundColor':'white',
  'fontWeight':'bold',
}

const name = (props) => {
  return (<div style={styles}><h3>{props.name}</h3></div>)
}

export default name
