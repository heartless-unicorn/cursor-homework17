import { useState, useEffect } from "react";
import { contacts } from "./ContactsList";

function Contacts() {
  let [contactList, setContacts] = useState({ contacts });
  let [search, setSearch] = useState("");
  function handleChange(event) {
    setSearch(event.target.value);
  }
  useEffect(() => {
    setContacts(
      contacts
        .map((el) => {
          if (
            Object.values(el).filter((val) => val.includes(search)).length > 0
          ) {
            return el;
          }
          //   if (Object.values(el).filter((val) => val.includes("шен"))) {
          //     console.log(el);
          // }
        })
        .filter((val) => val !== undefined)
    );
  }, [search]);

  console.log(contactList);
  /* {contacts.map((el) => {
        return <p>{el.firstName}</p>;
      })} */

  return (
    <div className="Contacts">
      <form>
        <input onChange={handleChange} />
      </form>
    </div>
  );
}
export default Contacts;
