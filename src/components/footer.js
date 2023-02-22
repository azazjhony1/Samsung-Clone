import "./footer.css";
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footerContainer">
      <ui className="footerUiLists">
        <li className="footerUiList firstUiList">Pakistan/English</li>
        <li className="footerUiList">Privacy</li>
        <li className="footerUiList">Legal</li>
        <li className="footerUiList">Sitemap</li>
        <li className="footerUiList">Terms and Conditions of Sale</li>
      </ui>

      <ui className="footerIconLists">
        <li className="footerIconList footerIconListPara">
          <p className="footerText">Stay in the Loop?</p>
        </li>
        <li className="footerIconList">
          <h4>
            <BsInstagram />
          </h4>
        </li>
        <li className="footerIconList">
        <h4>
            <BsFacebook />
          </h4>
        </li>
        <li className="footerIconList">
        <h4>
            <BsTwitter />
          </h4>
        </li>
        <li className="footerIconList">
        <h4>
            <BsYoutube />
          </h4>
        </li>
        <li className="footerIconList">
        <h4>
            <BsWhatsapp />
          </h4>
        </li>
      </ui>
    </div>
  );
};

export default Footer;
