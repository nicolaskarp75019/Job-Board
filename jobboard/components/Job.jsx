const Job = (props) => {
  <div class="container">
    <div className={props.color}>
      <p>{props.title}</p>
      <span>
        {props.contractType}
        <span>{props.country}</span>
        <span>{props.city}</span>
      </span>
    </div>
  </div>;
};

export default Job;
