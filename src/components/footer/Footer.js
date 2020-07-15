import React from 'react'
import './footer.css'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="copyright">
                    <p><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2020 - Optimus</p>
                </div>
            </footer>
        )
    }
}

export default Footer;