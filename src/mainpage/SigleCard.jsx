import React from "react";

const sigleCard = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((data) => {
        return (
          <>
            <h1>Gym Places</h1>
            <div className="Main_card_div">
              <div className="cardImage_div">
                <h2>{data.city}</h2>
              </div>
              <div className="CardData_div">
                <div className="card_data_up_div">
                  {data.addressComponent.map((address) => {
                    return (
                      <>
                        <p>Adress1: {address.address1}</p>
                        <p>Adress2: {address.address2}</p>
                        <p>Country: {address.country}</p>
                        <p>Pin: {address.pin}</p>
                      </>
                    );
                  })}
                </div>
                <div className="card_down_div">
                  <button>Book Now</button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default sigleCard;
