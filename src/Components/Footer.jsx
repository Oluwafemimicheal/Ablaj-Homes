import Logo from "../../src/assets/image/Logo House.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
//Oluwafemi coding
const Footer = () => {
  return (
    <footer>
      <div className="my-5 p-5 md:p-10 bg-blue-900/80 rounded-2xl">
        <div className="flex flex-wrap gap-5 md:gap-0 justify-between items-center">
          <div>
            <img src={Logo} alt="Ablaj-Homes-Logo" />
          </div>
          <div className=" flex items-center gap-5 text-white text-[14px]">
            <h3>Follow Us</h3>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
        <div className=" flex flex-wrap justify-between items-start gap-5 my-16 text-white text-[14px]">
          <div>
            <form>
              <h1 className="text-gray-300 text-left">Subscribe</h1>
              <div className="flex justify-between border-b-2 border-gray-300/20 py-3 mt-3 gap-4">
                <input
                  type="text"
                  placeholder="Your e-mail"
                  className="bg-transparent placeholder:text-white/60 w-full"
                />
                <button className="flex items-center gap-2 py-2 px-5 bg-gray-300/20 rounded-full text-white hover:bg-gray-300/15 hover:text-white/70 transition">
                  Send <FaArrowRight />
                </button>
              </div>
            </form>
            <p className="mt-5 text-white">
              Subscribe to our newsletter to receive our weekly feed.
            </p>
          </div>
          <ul className="flex flex-col gap-2 items-start">
            <h1 className="mb-5 text-gray-300">Discover</h1>
            <li>Lagos</li>
            <li>Abuja</li>
            <li>Enugu</li>
            <li>Port-Harcourt</li>
            <li>Delta</li>
            <li>Kano</li>
          </ul>
          <ul className="flex flex-col gap-2 items-start">
            <h1 className="mb-5 text-gray-300">Quick Link</h1>
            <li>About</li>
            <li>Contact</li>
            <li>FAQ's</li>
            <li>Blog</li>
            <li>Pricing Plan</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
          <div className="flex flex-col gap-2 items-start text-left">
            <h1 className="mb-5 text-gray-300">Contact Us</h1>
            <p>
              admin@ablajhomes.com <br /> (+234) 456-7890-7522
            </p>
          </div>
          <div className="flex flex-col gap-2 items-start text-left">
            <h1 className="mb-5 text-gray-300">Our Address</h1>
            <p>
              99 Fifth Avenue, 3rd Floor <br />
              San Francisco, CA 1980
            </p>
          </div>
          <div className="flex flex-col gap-2 items-start text-left">
            <h1 className="mb-5 text-gray-300">Get the app</h1>
            <a
              href="#"
              className="flex items-center py-2 px-5 bg-gray-200/20 hover:bg-gray-200/15 transition rounded-lg mb-4"
            >
              <div className="pr-2">
                <FaApple size={20} />
              </div>
              <div className="border-l-2 border-gray-300 pl-2">
                <p className="text-[9px] text-gray-200">Download on the</p>
                <h1 className="font-semibold text-[12px]">Apple Store</h1>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center py-2 px-5 bg-gray-200/20 hover:bg-gray-200/15 transition rounded-lg mb-4"
            >
              <div className="pr-2">
                <FaGooglePlay size={20} />
              </div>
              <div className="border-l-2 border-gray-300 pl-2">
                <p className="text-[9px] text-gray-200">Get in on</p>
                <h1 className="font-semibold text-[12px]">Google Play</h1>
              </div>
            </a>
          </div>
        </div>
        <div className="border-t-2 border-gray-300/20 text-center">
          <p className="text-[12px] text-white mt-5">
            Copyright ©{new Date().getFullYear()}. AblajHomes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
