import Image from "next/image";
import SectionTitle from "./SectionTitle";

// const skillsData = [
//   { id: 1, name: "React.Js", icon: "fab fa-react" },
//   { id: 2, name: "Next.Js", icon: "fab fa-react" },
//   { id: 3, name: "Express.Js", icon: "fab fa-express" },
//   { id: 4, name: "Nest.Js", icon: "fab fa-nestjs" },
//   { id: 5, name: "MongoDb", icon: "fas fa-database" },
//   { id: 6, name: "MySql", icon: "fas fa-database" },
// ];

const skillsData = [
  { id: 1, name: "React.Js", icon: "/assets/img/ico-react.png" },
  { id: 2, name: "Next.Js", icon: "/assets/img/nextjs.png" },
  { id: 3, name: "Express.Js", icon: "/assets/img/express-js.png" },
  { id: 4, name: "Nest.Js", icon: "/assets/img/ico-nest.png" },
  { id: 5, name: "Laravel", icon: "/assets/img/ico-lara.png" },
  { id: 6, name: "PHP", icon: "/assets/img/ico-php.png" },
];

const experiencesData = [
  {
    id: 1,
    date: "Feb 2022 - Present",
    designation: "Fullstack Web Developer",
    company: "Masjid Kapal Munzalan",
  },
  {
    id: 2,
    date: "Nov 2021 - Jan 2022",
    designation: "Fullstack Web Developer",
    company: "MasjidEnterprise.id",
  },
  {
    id: 3,
    date: "Part time",
    designation: "Fullstack Web Developer",
    company: "AhbabStore",
  },
];
const Skill = () => {
  return (
    <section id="skill" className="section experience-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <SectionTitle
              heading={"Skills and  Experience"}
              subHeading={"Experience"}
              text={
                "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores."
              }
            />

            <div className="skill-box">
              <h3>My Skills</h3>
              <div className="row g-3">
                {skillsData.map((skill) => (
                  <div className="col-6 col-md-4 col-lg-6" key={skill.id}>
                    <div className="feature-box-02">
                      <div className="icon">
                        <i className={skill.icon} />

                        <Image src={skill.icon} width={45} alt="icon" height={45} />
                      </div>
                      <h6>{skill.name}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 ms-auto pt-5 pt-lg-0">
            <div className="experience-box">
              <h3>Experience</h3>
              <ul>
                {experiencesData.map((experience) => (
                  <li key={experience.id}>
                    <h6>{experience.date}</h6>
                    <div className="eb-right">
                      <h5>{experience.designation}</h5>
                      <span>{experience.company}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="experience-user">
              <span className="eu-1">
                <img
                  src="assets/img/effect-3.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <span className="eu-2">
                <img
                  src="assets/img/effect-4.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <div className="avatar">
                <img src="assets/img/banner-foto.png" alt="image" />
              </div>
              <a className="px-btn px-btn-theme2" href="#contactus">
                Hire me{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;
