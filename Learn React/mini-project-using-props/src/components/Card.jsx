const Card = ({
  cardImg,
  cardTitle,
  cardDescription,
  cardTitleTime,
  cardPrice,
  location
}) => {
  return (
    <div className="card">
      <div className="card-upper">
        <div className="card-header">
          <div className="card-img">
            <img src={cardImg} alt="card-img" />
          </div>
          <div className="save-btn">
            <button className="saveBtn">Save</button>
          </div>
        </div>

        <div className="card-body">
          <div className="card-title">
            <h4>{cardTitle}</h4>
            <span className="cardTitleTime">{cardTitleTime}</span>
          </div>
          <div className="Card-description">
            <h3>{cardDescription}</h3>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <div className="card-price">
          <h3>{cardPrice}</h3>
          <span>{location}</span>
        </div>
        <div className="card-btn">
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
