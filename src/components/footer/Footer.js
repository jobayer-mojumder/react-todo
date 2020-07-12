import React from 'react'
import './footer.css'

function Footer() {
    return (
        <footer>
            <div className="copyright">
                <p><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2020 - Optimus</p>
            </div>
        </footer>
    );
}

export default Footer;