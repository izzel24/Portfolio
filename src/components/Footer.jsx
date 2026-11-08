import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="flex items-center justify-between p-10 border-t mt-5 bg-[#fffaf3]">
      <h1 className="text-[#444444] text-sm">
        © 2026 Henry Frizzel Johanis. All Rights Reserved.
      </h1>
      <div className="flex gap-4 items-center">
        <a href="https://github.com/izzel24" target="_blank">
          <FaGithub className="text-[#444444] text-2xl" />
        </a>
        <a href="https://www.linkedin.com/in/henry-johanis/" target="_blank">
          <FaLinkedin className="text-[#444444] text-2xl" />
        </a>
        {/* <FaGithub className="text-[#444444] text-3xl" /> */}
      </div>
    </div>
  );
}
