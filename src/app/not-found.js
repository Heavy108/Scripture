import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404</h1>
      <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
      <Link href="/">
        <a style={styles.link}>Go back home</a>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    color: '#333',
  },
  header: {
    fontSize: '6rem',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  message: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  link: {
    fontSize: '1.2rem',
    color: '#0070f3',
    textDecoration: 'none',
    borderBottom: '1px solid #0070f3',
    paddingBottom: '2px',
  }
};
