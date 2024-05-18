import styles from "../CSS/NavBar.module.css";
function NavBar() {
  return (
    <>
      <div className={styles.Navbar}>
        <h2 ><a href="/Home">Scripture</a></h2>
        <div className={styles.options}>
          <a href="/Bytes">Bytes</a>
          <a href="/SciTech">SciTech</a>
          
          <a href="/Events">Events</a>
          <a href="#">About Us</a>
         
        </div>
        <button className={styles.navButton}>Contact US</button>
      </div>
    </>
  );
}

export default NavBar;
