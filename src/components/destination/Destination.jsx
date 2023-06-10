import React from 'react';
import './destination.css';
import DataDestination from '../destination-data/Data-destination';
import mountain1 from '../../assets/1.jpg';
import mountain2 from '../../assets/2.jpg';
import mountain3 from '../../assets/3.jpg';
import mountain4 from '../../assets/4.jpg';

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame </p>
      <div className="first-desc">
        <div className="desc-text">
          <DataDestination
            heading="Taal Volcano, Batangas"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nobis, quam officiis sit similique eaque animi, ad voluptates ipsum reprehenderit temporibus pariatur fugiat vel? Quia at optio ullam porro quas? Cumque fuga officia
            officiis. Maiores doloremque adipisci iste dolore quidem itaque unde fugiat maxime temporibus quaerat at nulla id illum reiciendis similique molestiae odit porro, autem architecto? Esse, animi facere?"
          />
        </div>
        <div className="img">
          <img src={mountain1} alt="" />
          <img src={mountain2} alt="" />
        </div>
      </div>
      <div className="first-desc-reverse">
        <div className="desc-text">
          <DataDestination
            heading="Taal Volcano, Batangas"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nobis, quam officiis sit similique eaque animi, ad voluptates ipsum reprehenderit temporibus pariatur fugiat vel? Quia at optio ullam porro quas? Cumque fuga officia
            officiis. Maiores doloremque adipisci iste dolore quidem itaque unde fugiat maxime temporibus quaerat at nulla id illum reiciendis similique molestiae odit porro, autem architecto? Esse, animi facere?"
          />
        </div>
        <div className="img">
          <img src={mountain3} alt="" />
          <img src={mountain4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Destination;
