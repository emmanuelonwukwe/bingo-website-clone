/* eslint-disable react/no-unescaped-entities */
import Header from "./components/Header.jsx";
import "./App.css";
import {
  offersList,
  awardsCountList,
  clientsTestimonyList,
  blogPostsList,
} from "./data.js";
import OfferItem from "./components/OfferItem.jsx";
import AwardCountItem from "./components/AwardCountItem.jsx";
import TestimonyItem from "./components/TestimonyItem.jsx";
import { Carousel } from "@trendyol-js/react-carousel";
import BlogPostItem from "./components/BlogPostItem.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  
  return (
    <>
      {/* Fixed Navigation ========== */}
      <Header />
      {/* End Fixed Navigation ======== */}
      <div className="hero-slider">
        <div
          className="slider-item th-fullpage hero-area"
          style={{ backgroundImage: "url(/images/slider/slider-bg-1.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".1"
                >
                  Crafting Digital <br />
                  Experience
                </h1>
                <p
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".5"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quod, <br /> veritatis tempore nostrum id officia quaerat eum
                  corrupti, <br /> ipsa aliquam velit.
                </p>
                <a
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".8"
                  className="btn btn-main"
                  href="service"
                >
                  Explore Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider-item th-fullpage hero-area"
          style={{ backgroundImage: "url(/images/slider/slider-bg-2.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1
                  data-duration-in=".3"
                  data-animation-in="fadeInDown"
                  data-delay-in=".1"
                >
                  We Combine Design <br /> and Creativity
                </h1>
                <p
                  data-duration-in=".3"
                  data-animation-in="fadeInDown"
                  data-delay-in=".5"
                >
                  Create just what you need for your Perfect Website. Choose
                  from a wide range
                  <br /> of Elements &amp; simply put them on our Canvas.
                </p>
                <a
                  data-duration-in=".3"
                  data-animation-in="fadeInDown"
                  data-delay-in=".8"
                  className="btn btn-main"
                  href="service"
                >
                  Explore Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start About Section ============================== */}
      <section className="service-2 section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              {/* section title */}
              <div className="title text-center">
                <h2>What Do We Offer</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, earum.{" "}
                </p>
                <div className="border" />
              </div>
              {/* /section title */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center d-none d-md-block">
              <img
                loading="lazy"
                src="/images/about/member.jpg"
                className="img-fluid inline-block"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <div className="row text-center">
                {offersList.map((offer) => (
                  <OfferItem
                    key={offer.id}
                    icon={offer.icon}
                    title={offer.title}
                    description={offer.description}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
      {/* Start About Section =================================== */}
      <section className="about-2 section" id="about">
        <div className="container">
          <div className="row justify-content-center">
            {/* section title */}
            <div className="col-lg-6">
              <div className="title text-center">
                <h2>We Are Bingo Agency</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quibusdam reprehenderit accusamus labore iusto, aut, eum
                  itaque illo totam tempora eius.
                </p>
                <div className="border" />
              </div>
            </div>
            {/* /section title */}
          </div>
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                loading="lazy"
                src="/images/about/about-2.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <ul className="checklist">
                <li>
                  Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare
                  sem laca quam venenatis vestibulum.
                </li>
                <li>
                  Aenean quam. Pellentesque ornare sem laca quam venenatis
                  vestibulum.
                </li>
                <li>
                  Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare
                  sem laca quam venenatis vestibulum.
                </li>
                <li>
                  Etiam porta sem multipage evint landing magna mollis euismod a
                  pharetra augue.
                </li>
                <li>
                  Aenean quam. Pellentesque ornare sem laca quam venenatis
                  vestibulum.
                </li>
              </ul>
              <a href="about" className="btn btn-main mt-20">
                Learn More
              </a>
            </div>
          </div>
        </div>{" "}
        {/* End container */}
      </section>
      {/* Start Call To Action ============== */}
      <section className="call-to-action section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 text-center">
              <h2>Let's Create Something Together</h2>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin
                bibendum auctor, nisi elit consequat ipsum, nesagittis sem nid
                elit. Duis sed odio sitain elit.
              </p>
              <a href="contact" className="btn btn-main">
                Contact Us
              </a>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* Start Counter Section ============================ */}
      <section className="counter-wrapper section-sm">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 text-center">
              <div className="title">
                <h2>Award-Winning Agency</h2>
                <p>
                  Vestibulum nisl tortor, consectetur quis imperdiet bibendum,
                  laoreet sed arcu. Sed condimentum iaculis ex, in faucibus
                  lorem accumsan non. Donec mattis tincidunt metus. Morbi sed
                  tortor a risus luctus dignissim.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {awardsCountList.map((award) => (
              <AwardCountItem
                key={award.id}
                id={award.id}
                icon={award.icon}
                title={award.title}
                count={award.count}
              />
            ))}
          </div>
        </div>{" "}
      </section>
      {/* Start Testimonial
=========================================== */}
      <section className="testimonial section" id="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* testimonial wrapper */}
              <div className="testimonial-sliderYYYY">
                <Carousel show={1.1} slide={1} swiping={true}>
                  {clientsTestimonyList.map((testimony) => (
                    <TestimonyItem
                      key={testimony.id}
                      clientImageSrc={testimony.imgSrc}
                      clientName={testimony.name}
                      clientPortfolio={testimony.portfolio}
                      clientTestimony={testimony.testimony}
                    />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Start Blog Section ======================================== */}
      <section className="blog" id="blog">
        <div className="container">
          <div className="row justify-content-center">
            {/* section title */}
            <div className="col-xl-6 col-lg-8">
              <div className="title text-center ">
                <h2>
                  {" "}
                  Latest <span className="color">Posts</span>
                </h2>
                <div className="border" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus facere accusamus, reprehenderit libero inventore nam.
                </p>
              </div>
            </div>
            {/* /section title */}
          </div>
          <div className="row">
            {blogPostsList.map((post) => (
              <BlogPostItem
                key={post.id}
                imgSrc={post.imgSrc}
                title={post.title}
                description={post.description}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
