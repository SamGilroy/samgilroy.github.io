import React from 'react';
import './home.css'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p> Information:</p>
                <ul>
                    <li>
                        Email: support@colorlib.com
                    </li>
                    <li>
                        Address: Rosemead, CA 91770
                    </li>
                    <li>
                        Phone: +1 253 565 2365
                    </li>
                </ul>
            </div>
        );
    }
}

export default Footer;