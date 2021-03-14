import React,{ Fragment } from 'react';
import spinner from '../../images/spinner.gif'


const Spinner = () => (
    <Fragment>
        <img src={spinner} style={{ width:'200px',margin:'auto',display:'block',paddingTop:"1rem"}}
        alt = 'Loading...'
        />
    </Fragment>
)

export default Spinner;