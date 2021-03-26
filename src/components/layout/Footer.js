import React from 'react';

const Footer = () => {
    return (
        <div className="footer" style={{background:"lightgreen",minHeight:"5rem"}}>
            <div>About</div>
            <div>Contact</div>
            <div>Terms</div>
            <div>Cookie Policy</div>
            <span><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />Casino 2021</span>
        </div>
    );
};

export default Footer;