import React from 'react';

const validation = (props) => {
    const lowestValue = 5;
    return(
        <div>
            <p>{props.length <= lowestValue ? "Text too short" : "Text long enough"}</p>
        </div>
    )
};

export default validation;