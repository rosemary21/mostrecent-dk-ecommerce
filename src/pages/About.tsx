import { useNavigate } from "react-router-dom";
import FashionNavbar from "../components/fashion/FashionNavbar";
import Footer from "../components/general/Footer";
import "../styles/About.css";
import { ROUTES } from "../routes";

export default function About() {
  const navigate = useNavigate();
  function navigateToContactUs() {
    navigate(`/${ROUTES.contactUs}`);
  }
  return (
    <>
      <FashionNavbar />
      <section className="about-us">
        <img src="/assets/about-us.png" alt="about-img" />

        <div className="about-desc">
          <h1>
            Brief <span>History</span>
          </h1>
          <p>
            DKeralutive is a creative group that consist of technology, art and
            fashion.
          </p>
          <p>
            The company deals with building creative application, designing
            amazing artworks and fashion wears.
          </p>
          <p>
            The aim of the company is to empower creative minds and render
            amazing services to the society
          </p>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
            </svg>
            The company commenced operation in 2022.
          </p>
          <button onClick={navigateToContactUs}>Contact Us</button>
        </div>
      </section>
      <Footer />
    </>
  );
}
