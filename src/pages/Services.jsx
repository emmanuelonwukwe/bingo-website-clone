import GreetingContext from "../GreetingContext";
import { useContext } from "react";

export default function Services() {
    const greet = useContext(GreetingContext);

  return (
    <>
      <section className="section text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>
                {greet} <span className="text-green">Services page</span> is not
                yet ready.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
