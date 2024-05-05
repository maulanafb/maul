import SectionTitle from "./SectionTitle";

const portfolioData = [
  {
    id: 1,
    title: "Event and LMS Web App",
    subtitle: "Web/PHP",
    image: "assets/img/group1.png",
    url: "https://masjidenterprise.id/"
  },
  {
    id: 2,
    title: "News Website",
    subtitle: "Web/WordPress",
    image: "assets/img/news.png",
    url: "https://salam7langit.com/"
  },
  {
    id: 3,
    title: "E-Course Web Applications",
    subtitle: "Web/NextJs,NestJs",
    image: "assets/img/e-course-portfolio.png",
    url: "https://e-course-shadcn.vercel.app/"
  },
  {
    id: 4,
    title: "Mosque Information System",
    subtitle: "Web/Laravel",
    image: "assets/img/portfolio-mosque.png",
    // url: "https://masjidenterprise.id/"
  },
  {
    id: 5,
    title: "Travel Landing page & Blog",
    subtitle: "Web/WordPress",
    image: "assets/img/travel.png",
    url: "https://desawisatasungaikupah.com/"
  },
  {
    id: 6,
    title: "Landing page",
    subtitle: "Web/React.JS",
    image: "assets/img/project-6.jpg",
    url: "https://brainwave-mfb.vercel.app/"
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="section work-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Latest Projects"} subHeading={"Portfolio"} />
        <div className="row g-4 lightbox-gallery">
          {portfolioData.map((portfolio) => (
            <div className="col-sm-6 col-lg-4" key={portfolio.id}>
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <a href={portfolio.image} className="gallery-link">
                    <img src={portfolio.image} alt="image" />
                  </a>
                </div>
                <div className="portfolio-info">
                  <h6>{portfolio.title}</h6>
                  <span>{portfolio.subtitle}</span>
                  <a href={portfolio.url} target="_blank" className="gallery-links">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
