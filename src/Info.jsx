import photo from "./assets/photo.jpg";
import Mail from "./assets/Mail.png";
import linkedin from "./assets/linkedin.png";

function Info() {
  return (
    <div className="info">
      <div className="info-img">
        <img src={photo} alt="my photo" />
      </div>
      <h1>Anastasia Golova</h1>
      <h3>Junior Front-end Developer</h3>
      <div className="buttons">
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=anastasia.golova.sci@gmail.com"
          target="_blank"
        >
          <button className="button-left">
            <img src={Mail} />
            Email
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/anastasia-golova-86b8531b2/"
          target="_blank"
        >
          <button className="button-right">
            <img src={linkedin} />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}

export default Info;
