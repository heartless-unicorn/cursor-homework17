import "./Contact.css";

function Contact(props) {
  return (
    <div className="Contact">
      <p>
        {props.data.firstName} {props.data.lastName}{" "}
      </p>
      <p className="number">{props.data.phone}</p>
    </div>
  );
}
export default Contact;
