import styles from "../style/AppNavbar.module.css";

const AppNavbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}>
          Waleed
        </div>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Why Choose Us</li>
          <li>Portfolio</li>
          <li>Products</li>
          <li>Testimonials</li>
          <li>Technologies</li>
          <li>Contact</li>
          <button className={styles.phoneButton}>+1 (088) 2222222</button>
        </ul>
      </div>
    </>
  );
};

export default AppNavbar;