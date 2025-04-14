import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoMdDownload } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";

const ContactInfo = ({ link, title, name }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800  dark:text-zinc-100 text-zinc-800 min-w-min px-2 py-1 rounded-sm"
    >
      {title == "github" && <FaGithub />}
      {title == "linkedin" && <CiLinkedin />}
      {title == "email" && <FaMailBulk />}
      {title == "whatsapp" && <FaWhatsapp />}
      {title == "download CV" && <IoMdDownload />}
      {title == "demo" && <TfiWorld />}

      {title == "whatsapp" ? <span className="capitalize">{name}</span> : <span className="capitalize">{title}</span>}


    </Link>
  );
};

export default ContactInfo;
