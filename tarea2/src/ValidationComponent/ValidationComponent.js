import React from 'react';

const validationComponent = (props) => {
    let text = "Text long enough"
    if(props.textLength<=5)
        text = "Text too short"
    return (
        <div>
            <p>
            { text}
            </p>
        </div>
    )
}

export default validationComponent;