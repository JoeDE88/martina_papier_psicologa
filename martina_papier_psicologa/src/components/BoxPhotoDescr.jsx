import BoxDescript from "./BoxDescript";
import ProPic from "./ProPic";
import { MARTINA } from "../constants/strings";

export default function BoxPhotoDescr() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5 d-flex justify-content-center">
        <div className="col-12 col-lg-5 mb-lg-0 foto-card">
          <ProPic />
        </div>
        <div className="col-12 col-lg-5 text-container">
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
