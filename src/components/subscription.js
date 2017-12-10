import React from 'react';

class Subscription extends React.Component {
    render() {
        return (
            <div className="subscription">
                <div>
                <h1>Subscribe to newsletter</h1>
                </div>
                <form>
                <input type='text' placeholder='Your Email' /><button type='submit'>Subscribe</button>
                </form>
            </div>
            )
    }
}

export default Subscription;