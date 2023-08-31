import { useLoaderData } from "react-router-dom";
import GreetingContext from "../GreetingContext";
import { useContext } from "react";

export function Contact() {
  const contactList = useLoaderData();
  const greet = useContext(GreetingContext);

  return (
    <>
      <section className="section text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>
                {greet} <span className="text-green">Contact page</span> is not
                yet ready.
              </h3>
              <p>{JSON.stringify(contactList)}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

//DUmmy loader function to be called when user sets the username parameter of the contact page route.
export async function loadContacts({ params }) {
  const usersList = [
    {
      username: "admin",
      password: 1122,
      contacts: ["09087674674", "081227846", "234685688"],
    },
    {
      username: "user",
      password: 1234,
      contacts: ["87979490400", "6839048840", "662889300998"],
    },
  ];

  let contactList = [];
  let setUsername = params.username;

  usersList.forEach((user) => {
    if (user["username"] == setUsername) {
      contactList = user["contacts"];
    }
  });

  return contactList;
}
