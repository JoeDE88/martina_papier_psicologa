import BoxDescript from "./BoxDescript";
import ProPic from "./ProPic";
import { MARTINA } from "../constants/strings";

export default function BoxPhotoDescr() {
  return (
    <div className="container">
      <div className="row d-flex my-5">
        <div className="col-12 col-xl-6 d-flex justify-content-center">
          <ProPic />
        </div>
        <div className="col-12 col-xl-6 text-container justify-content-center">
          <BoxDescript
            h1={MARTINA.name}
            h2={`${MARTINA.profession} en`}
            h3={<b>{MARTINA.qualification}</b>}
            text={MARTINA.description}
          />
        </div>
      </div>
    </div>
  );
}
