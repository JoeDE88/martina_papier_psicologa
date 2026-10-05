import Button from "./Button";

export default function BoxDescript({ h1, h2, h3, h4, text }) {
  return (
    <>
      <h1 className="mb-3">{h1}</h1>
      <h2>{h2}</h2>
      <h3>{h3}</h3>
      <h4 className="my-5"><i><b>"{h4}"</b></i></h4>
      <p>{text}</p>
      <div className="col-12 d-flex justify-content-center">
        <Button/>
      </div>
    </>
  );
}
