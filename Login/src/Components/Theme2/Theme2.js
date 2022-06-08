import React, { useContext } from 'react'
import { ThemeContext } from '../Main/Main'
import { ToggleContext } from '../Main/Main'

export const Theme2 = () => {

    const theme = useContext(ThemeContext)
    const toggleTheme = useContext(ToggleContext)
    return (
        <div onClick={() => toggleTheme( ! theme ) } style={{width: '100px', height: '100px', backgroundColor: theme ? '#ccc' : 'skyblue'}}>
            Test
        </div>
    )
}
