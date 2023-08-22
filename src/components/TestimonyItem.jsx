/* eslint-disable react/prop-types */
function TestimonyItem({ clientName, clientPortfolio, clientImageSrc, clientTestimony }) {
  return (
    <>
      <div className="item text-center">
        <i className="tf-ion-chatbubbles" />
        {/* client info */}
        <div className="client-details">
          <p>
            {clientTestimony}
          </p>
        </div>
        {/* /client info */}
        {/* client photo */}
        <div className="client-thumb">
          <img
            loading="lazy"
            src={clientImageSrc}
            className="img-fluid"
            alt={clientName + " image"}
          />
        </div>
        <div className="client-meta">
          <h3>{clientName}</h3>
          <span>{clientPortfolio}</span>
        </div>
      </div>
    </>
  );
}

export default TestimonyItem;
