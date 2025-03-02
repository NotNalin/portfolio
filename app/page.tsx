import Image from "next/image";
import { socialLinks } from "./config";
import { FaC, FaFigma, FaGithub, FaInstagram, FaJava, FaJs, FaPython, FaReact, FaHtml5, FaDocker, FaMarkdown } from "react-icons/fa6";
import { SiNextdotjs, SiTailwindcss, SiGit} from "react-icons/si";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.github} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hi, I'm Nalin 👋
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a 19-year-old Computer Science Engineering student with a passion
          for solving problems and building innovative projects. I enjoy working
          with <strong>C, Python, Java, and JavaScript</strong> and am
          constantly exploring new technologies.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Tech Stack</h2>
        <ul>
          <li className="flex items-center space-x-2">
            <strong>Languages:</strong> <FaC /> <FaPython /> <FaJava /> <FaJs /> <FaHtml5 /> <FaMarkdown /> 
          </li>
          <li className="flex items-center space-x-2">
            <strong>Frameworks & Libraries:</strong> <FaReact /> <SiNextdotjs /> <SiTailwindcss />
          </li>
          <li className="flex items-center space-x-2">
            <strong>Tools & Platforms:</strong> <FaGithub /> <FaFigma /> <SiGit /> <FaDocker />
          </li>
        </ul>
        <p>
          See more on my{" "}
          <a href="https://github.com/NotNalin" target="_blank">
            GitHub
          </a>
          .
          <br />
          Contact me at <a href="mailto:nalin@notnal.in">nalin@notnal.in</a>
        </p>
      </div>
    </section>
  );
}
