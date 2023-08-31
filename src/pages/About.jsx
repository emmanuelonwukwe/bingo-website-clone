import { useContext } from "react";
import GreetingContext from "../GreetingContext";

export default function About() {
  const greet = useContext(GreetingContext);

  return (
    <>
      <section className="section text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>
                {greet} <span className="text-green">About us page</span> is not
                yet ready.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
