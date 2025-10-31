import Martu_pic from '../assets/Martu_pic.jpg'

export default function PhotoAndDescription() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5 d-flex justify-content-center">
        <div className="col-12 col-lg-5 mb-lg-0 foto-card">
          <img
            src={Martu_pic}
            alt="Martina Papier pic"
            className="img profile-img"
          />
        </div>
        <div className="col-12 col-lg-5 text-container">
          <h1>Martina Papier</h1>
          <h3>
            Psicóloga especializada en{" "}
            <b>Trastornos de la Conducta Alimentaria</b>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam
            lacus, lacinia eget sem vel, condimentum placerat ipsum. Fusce quis
            pretium mi, at sagittis eros. Mauris auctor tellus turpis, non
            blandit elit efficitur non. Phasellus id elit lectus. Pellentesque
            ut urna purus. Suspendisse aliquam est nec velit congue hendrerit.
            Proin vehicula semper nunc sed bibendum. Donec laoreet rutrum
            libero. Proin egestas vehicula semper. Fusce quis pretium mi, at
            sagittis eros. Mauris auctor tellus turpis, non blandit elit
            efficitur non.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
