import styles from "../style/Hero.module.css"
import heroImage from "../assets/images/contact.png"
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroImage}>
          <img 
            src={heroImage} 
            alt="App Development" 
            className={styles.image}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Leading the way in <span className={styles.highlight}>App Development</span> Innovation
          </h1>
          <p className={styles.heroText}>
            We specialize in creating cutting-edge mobile and web applications that drive business growth. 
            Our team of expert developers delivers scalable, user-friendly solutions tailored to your unique needs.
          </p>
          <button className={styles.quoteBtn}>
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero