import React from 'react';
import './trip.css';
import TripData from './TripData';
import Trip1 from '../../assets/5.jpg';
import Trip2 from '../../assets/6.jpg';
import Trip3 from '../../assets/8.jpg';

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps.</p>

      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quibusdam ab sed explicabo facere doloremque natus earum libero, ea reiciendis exercitationem vitae aperiam? Blanditiis voluptatem aperiam nostrum in totam illum."
        />
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quibusdam ab sed explicabo facere doloremque natus earum libero, ea reiciendis exercitationem vitae aperiam? Blanditiis voluptatem aperiam nostrum in totam illum."
        />
        <TripData
          image={Trip3}
          heading="Trip in Singapore"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quibusdam ab sed explicabo facere doloremque natus earum libero, ea reiciendis exercitationem vitae aperiam? Blanditiis voluptatem aperiam nostrum in totam illum."
        />
      </div>
    </div>
  );
};

export default Trip;
