function OfferItem({icon, title, description}) {
  return (
    <>
      <div className="col-md-6 col-sm-6">
        <div className="service-item">
          <i className={icon} />
          <h4>{title}</h4>
          <p>
            {description}
          </p>
        </div>
      </div>
    </>
  );
}

export default OfferItem;
