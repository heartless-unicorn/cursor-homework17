import { useState, useEffect } from "react";
import "./Contacts.css";
import { contacts } from "./ContactsList";
import Contact from "./Contact";

function Contacts() {
  let [contactList, setContacts] = useState(contacts);
  let [search, setSearch] = useState("");
  const [checkedFem, setCheckedFem] = useState(true);
  const [checkedMale, setCheckedMale] = useState(true);

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }
  useEffect(() => {
    setContacts(
      contacts
        .map((el) => {
          if (
            Object.values(el).filter((val) =>
              val.toLowerCase().includes(search)
            ).length > 0
          ) {
            if ((checkedFem && el.gender === "female") || !el.gender) {
              return el;
            }
            if ((checkedMale && el.gender === "male") || !el.gender) {
              return el;
            }
          }
        })
        .filter((val) => val !== undefined)
    );
  }, [search, checkedFem, checkedMale]);

  return (
    <div className="Contacts">
      <form>
        <input onChange={handleSearchChange} className="searchfield" />
        <label for="femaleCheckBox">F</label>
        <input
          type="checkbox"
          id="femaleCheckBox"
          checked={checkedFem}
          onChange={() => setCheckedFem(!checkedFem)}
        />
        <label for="maleCheckBox">M</label>
        <input
          type="checkbox"
          id="maleCheckBox"
          checked={checkedMale}
          onChange={() => setCheckedMale(!checkedMale)}
        />
      </form>
      <div className="phonelist">
        {contactList.map((element, i) => {
          return <Contact data={element} key={i} />;
        })}
      </div>
    </div>
  );
}
export default Contacts;
