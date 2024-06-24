import { Navbar } from "../components/Navbar";
import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              
              <h1>Learn without limits</h1>
              <h2>
              Start, switch, or advance your career with more than 7,000 courses, Professional Certificates, and degrees from world-class universities and companies.
              </h2>
              <div className="btn btn-group">
                <a href="/register">
                  <buttons className="btn"><b>Join for Free</b></buttons>
                </a>
                <a href="/about">
                  <buttons className="btn secondary-btn"><b>Learn More</b></buttons>
                </a>
              </div>
            </div>

            
            <div className="hero-image">
              <img
                src="/images/preview.png"
                alt="coding together"
                width="200"
                height="200"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}

      <Analytics />
      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/preview.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
            Take the next step toward your personal and professional goals with CourseCradle.
            Join now to receive personalized recommendations from the full CourseCradle catalog.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <buttons className="btn"><b>Connect Now</b></buttons>
              </a>
              <a href="/services">
                <buttons className="btn secondary-btn"><b>Learn More</b></buttons>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

