import React from 'react';
import translogo from '../images/transbanklogo.png';
import GoldCard from '../images/card1.png';
import DiamondCard from '../images/card2.png';
import leftTop from '../images/left_top.png';
import rightTop from '../images/right_top.png';
import rightBottom from '../images/right_bottom.png';
import leftBottom from '../images/left_bottom.png';
//import circleImage from '../images/back_trans_logo.png';

const Section1 = () => {
  return (
    <section id="section1" style={styles.section1}>
      {/* Content Section */}
      <div style={styles.content}>
        {/* Text Section */}
        <div style={styles.textSection}>
          <h1 style={styles.heading}>Billionaire</h1>
          <p style={styles.subheading}>Metal is the new luxury</p>
        </div>

        {/* Cards Section */}
        <div style={styles.cardsContainer}>
          <img
            src={GoldCard}
            alt="Gold Card"
            style={styles.card}
          />
          <img
            src={DiamondCard}
            alt="Diamond Card"
            style={styles.card}
          />
        </div>
      </div>
      {/*<div style={styles.circleImageContainer}>
            <img src={circleImage} alt="circleImage" style={styles.circleImage} />
      </div>*/}

      <p style={styles.cardLabels}>
        Gold. &emsp;Premium. &emsp;&emsp;&emsp;&emsp;&emsp; Diamond. &emsp;Premium.
      </p>

      {/* Decorative Images */}
      <div style={styles.leftTopContainer}>
        <img src={leftTop} alt="Left Top" style={styles.leftTop} />
      </div>

      <div style={styles.logoContainer}>
        <img src={translogo} alt="Transbank Logo" style={styles.logo} />
      </div>

      <div style={styles.rightTopContainer}>
        <img src={rightTop} alt="Right Top" style={styles.rightTop} />
      </div>

      <div style={styles.rightBottomContainer}>
        <img src={rightBottom} alt="Right Bottom" style={styles.rightBottom} />
      </div>

      <div style={styles.leftBottomContainer}>
        <img src={leftBottom} alt="Left Bottom" style={styles.leftBottom} />
      </div>

      <div style={styles.featuresSection}>
        <div style={styles.ptext}>
          <p>Тээвэр хөгжлийн банк Монгол улсад анх удаа цэвэр</p>
          <p>метал картыг зах зээлд нэвтрүүллээ. </p>
        </div>
      </div>

      <button style={styles.button1}>Internet Banking</button>
    </section>
  );
};

const styles = {
  section1: {
    position: "relative",
    height: "100vh",
    backgroundColor: "#0C0C0D",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    //paddingBottom: '140px',  //ene uildel 2dahi sectioniig doosh nuulegj bgaa ustgah heregtei ghdee dood tal text zaswar orsonii daraa
  },
  button1: {
    position: "absolute",
    top: "100px",
    right: "150px",
    padding: "10px 40px",
    backgroundColor: "#0C0C0D",
    color: "#CA996C",
    border: "1px solid #CA996C",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "1.2rem",
  },
  logoContainer: {
    position: "absolute",
    top: "100px",
    left: "150px",
    width: '100%',
    maxWidth: "200px",
    height: "auto",
  },
  logo: {
    width: 'clamp(100px, 20vw, 200px)',
    height: "auto",
  },
  content: {
    display: "flex",
    flexDirection: "row", // Arrange text and cards side by side
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  textSection: {
    marginRight: "100px", // Space between text and cards
    zIndex: '3',
  },
  heading: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    fontWeight: "bold",
    fontFamily: "'Serif', cursive",
    margin: "0",
    lineHeight: "1.2",
  },
  subheading: {
    fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
    fontFamily: "'Arial', sans-serif",
    margin: "10px 0",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
    zIndex: '1',
  },
  card: {
    width: "100%",
    maxWidth: '300px',
    height: 'auto',
    margin: "0 10px",
    objectFit: "contain",
  },
  cardLabels: {
    fontSize: "1.3rem",
    marginTop: "20px",
    marginLeft: '40vh',
    color: "#CA996C",
    zIndex: '2',
  },
  featuresSection: {
    position: "absolute", // Use absolute positioning
    bottom: "50px", // Adjust as needed to position it slightly above the very bottom
    left: "50%", // Center horizontally
    transform: "translateX(-50%)", // Offset the left position to truly center
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "50px",
    color: "#48484B",
    fontSize: "1.3rem",
  },
  ptext: {
    textAlign: "center",
    color: "#48484B",
    fontSize: "1.3rem",
    lineHeight: "1.5",
  },
  leftTopContainer: {
    position: "absolute",
    top: "0px",
    left: "0px",
  },
  leftTop: {
    height: "auto",
    width: 'clamp(0px, 30vw, 600px)',
    //maxHeight: '200px',
    //width: "100%",
    //maxWidth: '600px',
    //minWidth: '300px',
  },
  rightTopContainer: {
    position: "absolute",
    top: "0px",
    right: "0px",
  },
  rightTop: {
    height: "auto",
    width: 'clamp(100px, 30vw, 600px)',
    //maxHeight: '500px',
    //width: "100%",
    //maxWidth: '600px',
    //objectFit: "contain",
  },
  rightBottomContainer: {
    position: "absolute",
    bottom: "0px",
    right: "0px",
  },
  rightBottom: {
    height: "auto",
    width: 'clamp(100px, 20vw, 600px)',
    //maxHeight: '250px',
    //width: "100%",
    //maxWidth: '600px',
    //objectFit: "contain",
  },
  leftBottomContainer: {
    position: "absolute",
    bottom: "0px",
    left: "0px",
  },
  leftBottom: {
    height: "auto",
    width: 'clamp(100px, 20vw, 600px)',
    //maxHeight: '300px',
    //width: "100%",
    //maxWidth: '600px',
    //objectFit: "contain",
  },
  circleImageContainer: {
    height: '100vh',
    width: '100vh',
  },
  circleImage: {
    height: '100px',
    width: '100px',
    objectFit: "contain",
  }
};

export default Section1;
