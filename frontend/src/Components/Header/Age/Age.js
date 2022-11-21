import React from 'react'
import { Box } from '@mui/material'
import './Age.css'


const Age = ({ age, handleContentChange, selectedContent }) => {

    return (
        <Box className="ageBox">
            <ul className='ageItems'>
                {
                    age.map((content) =>
                        <li key={content.value}
                            onClick={() => handleContentChange(content)}
                            className={(selectedContent === content.value) ? "ageItemActive" : "ageItems"}>
                            {content.label}
                        </li>
                    )
                }
            </ul>
        </Box>
    )
}

export default Age
