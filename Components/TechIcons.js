import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiKotlin,
  SiN8N,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";

export default function TechIcons() {
  const iconStyle = "text-[#161513] text-[32px]";

  return (
    <div className="flex flex-col items-center gap-6">
  <div className="flex flex-wrap justify-center gap-6">
    <FaHtml5 className={iconStyle} title="HTML" />
    <FaCss3Alt className={iconStyle} title="CSS" />
    <FaJs className={iconStyle} title="JavaScript" />
    <SiNextdotjs className={iconStyle} title="Next.js" />
    <FaReact className={iconStyle} title="React" />
    <SiKotlin className={iconStyle} title="Kotlin" />
    <FaJava className={iconStyle} title="Java" />
    <FaPython className={iconStyle} title="Python" />
    <SiN8N className={iconStyle} title="n8n" />
    <FaGithub className={iconStyle} title="GitHub" />
  </div>

  <div className="flex justify-center gap-6">
    <FaGitAlt className={iconStyle} title="Git" />
    <SiMongodb className={iconStyle} title="MongoDB" />
    <SiExpress className={iconStyle} title="Express.js" />
  </div>
</div>
  );
}