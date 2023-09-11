import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import MyModal from "../components/UIelements/Modal";
import "./workPage.css";

const PROJECT_LIST = [
  {
    logo: "/assets/harth-logo.png",
    name: "Teslam - تسلم ",
    image: "/assets/harth-1.jpg",
    p2:
      " TESLM is a customer centric homemade food app in Egypt, Where you can find and buy your favorite meals made in home for you",
    p1:
      "Built the Front End with React Native. Available on Google Play Store ",
    googleLink: "https://play.google.com/store/apps/details?id=com.teslam_app&pli=1",

  },
  {
    logo: "/assets/unnamed.jpg",
    name: "poultrystocks - بورصة الدواجن ",
    image: "/assets/checken.jpg",
    p2:
      " An application to display the daily prices of eggs and chicks And the detection of diseases and methods oftreatment and medicines",
    p1:
      "Built the Front End with React Native. Available on Google Play Store ",
    googleLink: "https://play.google.com/store/apps/details?id=com.app.poultrystocks",

  },
  {
    logo: "/assets/AppLogo.png",
    name: "Education App - تطبيق المدرسين",
    image: "/assets/3.jpg",
    p2:
    "This app for education in Egypt. It is a complete follow up system for teachers to enable them communicate with their students through giving them exams daily or weekly or monthly.",
    p1:
      "Built the Front End with React Native. Available on Google Play Store ",
    googleLink: "https://drive.google.com/drive/folders/1pM7W-ipiC6MVNbi-sfLBGyMn5hxwTl7O?usp=drive_link",

  },
  {
    logo: "/assets/logo.png",
    name: "Education App - تطبيق المدرسين",
    image: "/assets/2.jpg",
    p2:
    "This app for education in Egypt. It is a complete follow up system for teachers to enable them communicate with their students through giving them exams daily or weekly or monthly.",
    p1:
      "Built the Front End with React Native. Available on Google Play Store ",
    googleLink: "https://drive.google.com/drive/folders/1RhUCNSyfesAXsZORkSSkQpMXP5cTbEbJ?usp=sharing",

  },

  {
    logo: "/assets/epsLogo.png",
    name: "EPS",
    image: "/assets/epsHome.JPG",
    p1: "Experimenting Tailwind CSS with React",
    p2: ' Landing page for an electric services company "EPS" ',
    link: "https://drive.google.com/drive/folders/1FpZaNSfNNerraK3KXL0iYS9sVhvU487T?usp=sharing",
  },
  {
    logo: "/assets/egycon-logo.png",
    name: "EgyCon",
    image: "/assets/egycon-1.PNG",
    p1:
      "created the entire frontend with css and bootstrap as per client's designing needs",
    p2:
      "Egycon is a fresh produce investment project that owns and administers large tracts of land in El Sharkia and Ismailia, Egypt",
    link: "https://egycongroup.com/",
  },
  // {
  //   logo: "/assets/dalya-logo.png",
  //   name: "DalyArt",
  //   image: "/assets/dalya-1.PNG",
  //   p1: "Built with Gatsby.js SSR styled with css and bootstrab",
  //   p2: " Art Gallery for showcasing paintings and interior design",
  //   link: "https://Dalyart.netlify.app",
  // },
  {
    logo: "/assets/karegram-logo.png",
    name: "KareGram",
    image: "/assets/karegram.PNG",
    p1: "SSR App created with Next.js and styled with Tailwind",
    p2: "InstaGram Clone",
    link: "https://karegram.vercel.app",
  },
];
export const RenderProjectCards = (props) =>
  props.list.map((project, index) => {
    return (
      <Col key={project.name} xs="11" sm="6" md="3" lg="2">
        <div
          onClick={() => {
            props.onClick(index);
          }}
          className="project-card "
        >
          <img src={project.logo} alt={project.name} />
        </div>
      </Col>
    );
  });

const Work = () => {
  const [isOpen, setisOpen] = useState(false);

  const showModal = () => {
    setisOpen(true);
  };
  const hideModal = () => {
    setisOpen(false);
  };
  const [selectedProject, setSelProject] = useState(PROJECT_LIST[0]);
  const handleOnClick = (index) => {
    setSelProject(PROJECT_LIST[index]);
    showModal();
  };
  return (
    <>
      <MyModal
        project={selectedProject}
        shown={isOpen}
        hide={hideModal}
        show={showModal}
      />

      <div className="container">
        <hr />
        <h2 className="Headings">PROJECTS</h2>
        <Row className="cards-row">
          {PROJECT_LIST.map((project, index) => {
            return (
              <Col key={project.name} xs="6" md="4" lg="3" className="my-2">
                <div
                  onClick={() => {
                    handleOnClick(index);
                  }}
                  className="project-card "
                >
                  <img src={project.logo} alt={project.name} />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};
export default Work;
