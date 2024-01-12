import {Link} from "react-router-dom"

const footerStyle = {
  position: "relative",
  bottom: 0,
  width: "100%",
  backgroundColor: "#333",
  color: "white",
  padding: "15px 0",
};

const Footer = () => (
  <footer
    className="page-footer font-small bg-dark text-white pt-4"
    style={footerStyle}
  >
    <div className="footer-wrapper bg-secondary py-4 container text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">About NoteZilla</h5>
          <p>
            At NoteZilla, we are passionate about providing a platform where
            users can create and manage sticky notes to stay organized and
            productive. Additionally, you can set priority levels and expected
            completion dates for your notes to enhance your productivity.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <Link to="/" className="text-white" rel="noopener noreferrer">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white" rel="noopener noreferrer">
                Add Note
              </Link>
            </li>
            <li>
              <Link className="text-white"
                onClick={() => (window.location = "mailto:yourmail@domain.com")}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white"
                rel="noopener noreferrer"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Follow Us</h5>
          <ul className="list-unstyled">
            <li>
              <Link
                to="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTtN1cjpidnXIDd92P2AXs7p9rbHmBMScEfectLjN_RuuBbupC3Ay-U-2P7eje5oZZFYY&usqp=CAU"
                className="text-white"
                rel="noopener noreferrer"
              >
                <span style={{ paddingRight: "5px" }}></span> Facebook
              </Link>
            </li>
            <li>
              <Link
                to="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTtN1cjpidnXIDd92P2AXs7p9rbHmBMScEfectLjN_RuuBbupC3Ay-U-2P7eje5oZZFYY&usqp=CAU"
                className="text-white"
                rel="noopener noreferrer"
              >
                <span style={{ paddingRight: "5px" }}></span> Instagram
              </Link>
            </li>
            <li>
              <Link
                to="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTtN1cjpidnXIDd92P2AXs7p9rbHmBMScEfectLjN_RuuBbupC3Ay-U-2P7eje5oZZFYY&usqp=CAU"
                className="text-white"
                rel="noopener noreferrer"
              >
                <span style={{ paddingRight: "5px" }}></span> Twitter
              </Link>
            </li>
            <li>
              <Link
                to="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTtN1cjpidnXIDd92P2AXs7p9rbHmBMScEfectLjN_RuuBbupC3Ay-U-2P7eje5oZZFYY&usqp=CAU"
                className="text-white"
                rel="noopener noreferrer"
              >
                <span style={{ paddingRight: "5px" }}></span> Pinterest
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="bg-dark text-white text-center py-3">
      &copy; {new Date().getFullYear()} NoteZilla. All rights reserved. |{" "}
      <Link
        to="/"
        className="text-white"
      >
        Notezilla.com
      </Link>
    </div>
  </footer>
);

export default Footer;