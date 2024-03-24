import {
  faFacebook,
  faTwitter,
  faTwitch,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <section className="py-4 bg-color">
      <ul className="gap-2 mb-3 text-xl flex-custom-center lg:gap-5">
        <li className="cursor-pointer hover:text-cyan-400">Home</li>
        <li className="cursor-pointer hover:text-cyan-400">Tv Shows</li>
        <li className="cursor-pointer hover:text-cyan-400">Movies</li>
        <li className="cursor-pointer hover:text-cyan-400">Upcoming</li>
      </ul>

      <ul className="gap-6 flex-custom-center">
        <FontAwesomeIcon
          className="hover:text-[#1DA1F2]"
          size="2x"
          icon={faTwitter}
        />
        <FontAwesomeIcon
          className="hover:text-[#4b6db1]"
          size="2x"
          icon={faFacebook}
        />
        <FontAwesomeIcon
          className="hover:text-[#b53580]"
          size="2x"
          icon={faInstagram}
        />

        <FontAwesomeIcon
          className="hover:text-[#9146FF]"
          size="2x"
          icon={faTwitch}
        />
      </ul>
    </section>
  );
};

export default Footer;
