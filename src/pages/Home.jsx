import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tutors from "../components/Tutors";
import Partners from "../components/Patners";
import Contact from "../components/Contact";

// data
import { homeSection } from "../data/HomeSection";
import { coursesSection } from "../data/CoursesSection";
import { tutorsSection, tutorsList } from "../data/TutorsSection";
import { partnersSection, partnersList } from "../data/PartnerSection";
import { contactSection } from "../data/ContactSection";

import parse from "html-react-parser";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* home  */}
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">{parse(homeSection.content)}</div>
        </section>
        {/* online course */}
        <section id="courses">
          <div className="kolom">{parse(coursesSection.content)}</div>
          <img src={coursesSection.image} />
        </section>
        {/* Tutors */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">{parse(tutorsSection.content)}</div>
            <Tutors tutorsList={tutorsList} />
          </div>
        </section>
        {/* partners */}
        <section id="partners">
          <div className="tengah">
            <div className="kolom">{parse(partnersSection.content)}</div>
            <Partners partnersList={partnersList} />
          </div>
        </section>
      </div>
      {/* kontak */}
      <Contact contactSection={contactSection} />

      <Footer />
    </>
  );
}

export default Home;
