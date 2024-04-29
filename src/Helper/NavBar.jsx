import styles from "../CSS/NavBar.module.css";
function NavBar() {
  return (
    <>
      <div className={styles.Navbar}>
        <h2>Scripture</h2>
        <div className={styles.options}>
          <a href="#">Bytes</a>
          <a href="#">SciTech</a>
          <a href="#">Interviews</a>
          <a href="#">Bytes</a>
          <a href="#">Events</a>
          <a href="#">About Us</a>
        </div>
        <button className={styles.navButton}>Contact US</button>
      </div>
    </>
  );
}

export default NavBar;
