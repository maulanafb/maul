const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 py-2">
            <div className="nav justify-content-center justify-content-md-start">
              <a href="https://www.facebook.com/maulana.fatih.3/" target="_blank">
                <i className="fab fa-facebook-f" />
              </a>
              {/* <a href="#" target="_blank">
                <i className="fab fa-twitter" />
              </a> */}
              <a href="https://www.instagram.com/maulanafb_" target="_blank">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/maulana-fatih-b52390195/" target="_blank">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://github.com/maulanafb" target="_blank">
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
          <div className="col-md-6 py-2 text-center text-md-end">
            <p className="m-0">
              © {new Date().getFullYear()} copyright Maulana Fatih Bilqisthi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
