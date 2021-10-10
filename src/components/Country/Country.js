import React from 'react';

const Country = (props) => {
    const {name,population} = props.country;
    console.log(props.country);
    return (
        <div>
            <h2>Country Name: {name}</h2>
            <p>{population}</p>
        </div>
    );
};

export default Country;