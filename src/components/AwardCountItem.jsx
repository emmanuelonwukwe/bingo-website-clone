function AwardCountItem({ icon, title, count }) {
  return (
    <>
      <div className="col-md-3 col-sm-6 col-xs-6 text-center ">
        <div className="counters-item">
          <i className={icon} />
          <div>
            <span className="counter" data-count={count}>
              0
            </span>
          </div>
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
}

export default AwardCountItem;
