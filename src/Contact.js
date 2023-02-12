function Contact(props) {
  console.log(props.data);
  return (
    <div>
      <p>
        {props.data.firstName} {props.data.lastName}{" "}
      </p>
      <p>{props.data.phone}</p>
    </div>
  );
}
export default Contact;
