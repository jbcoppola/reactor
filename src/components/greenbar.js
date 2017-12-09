import React from 'react';
import image1 from '../images/1.png';
import image2 from '../images/2.png';

class Greenbar extends React.Component {
    render() {
        return (
            <div className="greenbar">
                <div>
                <img src={image1} />
                    <div>
                        <h1>
                            Regional cuisine down home southern cooking
                        </h1>
                        <p>
                            The quick brown fox jumps over a lazy dog. DJs flock by when MTV ax prog quiz. Junk MTV quiz graced by fox whelps. Bawds jog, flick quarz, vex nymphs.
                        </p>
                    </div>
                </div>
                <div>
                <img src={image2} />
                    <div>
                        <h1>
                            Pos hardware more option in less space
                        </h1>
                        <p>
                            The quick brown fox jumps over a lazy dog. DJs flock by when MTV ax prog quiz. Junk MTV quiz graced by fox whelps. Bawds jog, flick quarz, vex nymphs.
                        </p>
                    </div>
                </div>
            </div>
            )
    }
}

export default Greenbar;