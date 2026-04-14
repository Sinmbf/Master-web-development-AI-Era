const Card = (props) => {
  console.log(props);

  return (
    <div className="card">
      <img src={props.profileImg} alt="Profile Image" className="profile-img" />
      <h2 className="card-title">{props.user}</h2>
      <p className="card-desc">
        {props.age}
      </p>
      <button className="card-btn">View Profile</button>
    </div>
  );
};

export default Card;
