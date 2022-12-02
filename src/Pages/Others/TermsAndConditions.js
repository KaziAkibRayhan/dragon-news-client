import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>Be careful our terms and condition</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem modi officia, odio facere possimus incidunt rerum tenetur a magnam! Magnam sed excepturi, eaque architecto incidunt deserunt numquam quibusdam voluptate esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ullam aut sapiente omnis cumque eos modi! Sit unde, voluptate vitae cumque ex delectus quae corporis veniam obcaecati molestias corrupti qui.</p>
            <h1>Go Back To: <Link to={'/register'}>Register</Link></h1>
        </div>
    );
};

export default TermsAndConditions;