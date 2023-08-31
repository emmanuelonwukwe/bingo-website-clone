import { Link } from "react-router-dom";
import GreetingContext from "../GreetingContext";
import { useContext } from "react";

export default function Login() {
    const greet = useContext(GreetingContext);

  return (
    <>
      <section className="section text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>
                {greet} <span className="text-green">Login page</span> is not
                yet ready.
              </h3>
              <Link to="/" className="btn btn-main mt-20">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
