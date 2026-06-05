function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {anioActual} Meeyaj Kaaj | Conectando talento local
      </p>
    </footer>
  );
}

export default Footer;