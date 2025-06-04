export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#222', 
      color: '#fff', 
      textAlign: 'center', 
      padding: '1rem', 
      marginTop: 'auto'
    }}>
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      <p>
        <a href="/about" style={{ color: '#ccc', marginRight: '10px' }}>About</a>
        <a href="/contact" style={{ color: '#ccc' }}>Contact</a>
      </p>
    </footer>
  );
}
