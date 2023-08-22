/* eslint-disable react/prop-types */
function BlogPostItem({ imgSrc, title, description }) {
  return (
    <>
      <article className="col-lg-4 col-md-6">
        <div className="post-item">
          <div className="media-wrapper">
            <img
              loading="lazy"
              src={imgSrc}
              alt={title + " cover image"}
              className="img-fluid"
            />
          </div>
          <div className="content">
            <h3>
              <a href="single-post">{title}</a>
            </h3>
            <p>{description}</p>
            <a className="btn btn-main" href="single-post">
              Read more
            </a>
          </div>
        </div>
      </article>
    </>
  );
}

export default BlogPostItem;
