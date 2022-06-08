import React from 'react'
import { ThemeContext } from '../Main/Main'

export const Theme = () => {
  return (
    <ThemeContext.Consumer>
        {theme => (
            <div style={{width: '100px', height: '100px', backgroundColor: theme ? '#ccc' : 'skyblue'}}>
                Test
            </div>
      )}
    </ThemeContext.Consumer>
  )
}
