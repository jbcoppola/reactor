import React from 'react';
import image3 from '../images/3.png';
import image4 from '../images/4.png';
import image5 from '../images/5.png';
import image6 from '../images/6.png';

class Locations extends React.Component {
    render() {
        return (
            <div className="locations">
            <h1>Maui by air the best way around the island</h1>
            <div>
                <div>
                    <img src={image3} />
                    <h2>East Josianefurt</h2>
                    <p>085 Daron Via</p>
                </div>
                <div>
                    <img src={image4} />
                    <h2>South Cristopherport</h2>
                    <p>162 Chandler Vale</p>
                </div>
                <div>
                    <img src={image5} />
                    <h2>Concepcionbury</h2>
                    <p>7643 Kylie Burgs</p>
                </div>
                <div>
                    <img src={image6} />
                    <h2>Reychester</h2>
                    <p>5590 Gabe Views Apt. 044</p>
                </div>
            </div>
            </div>
            )
    }
}

export default Locations;