import { useState } from 'react';
import './App.css';
import {
  RiArrowRightUpLine,
  RiBookOpenFill,
  RiBookShelfLine,
  RiCalendar2Line,
  RiGraduationCapFill,
  RiInfoI,
  RiLightbulbFill,
  RiLightbulbFlashFill,
  RiNextjsFill,
  RiResetRightFill,
  RiTailwindCssFill,
  RiTrophyLine,
} from 'react-icons/ri';
import { LuLayoutGrid, LuLayoutPanelTop } from 'react-icons/lu';
import { TfiLayoutGrid3, TfiLayoutMenuV } from 'react-icons/tfi';
import PortfolioModal from './components/PortfolioModal';
import { FaFigma, FaReact } from 'react-icons/fa';
import { HiOutlineLibrary } from 'react-icons/hi';
import { PiMapPinLineBold } from 'react-icons/pi';
import Footer from './components/Footer';

function App() {
  const projects = [
    {
      name: 'Frinaze',
      type: 'Company Profile Website',
      image: ['/frinaze.webp', '/frinaze2.webp'],
      link: 'https://frinaze.site',
      githubLink: '',
      status: 'active',
      startDate: 'Mar 2026',
      endDate: 'Present',
      desc: 'A company profile website showcasing Frinaze’s web development services, portfolio, and digital solutions for small and medium-sized businesses.',
      skills: ['NextJS', 'TypeScript', 'TailwindCSS'],
    },
    {
      name: 'Frinaze Tools',
      type: 'Tools Website',
      image: [
        '/frinazeTools.webp',
        '/qrgenerator.webp',
        '/imageOptimizer.webp',
        '/invoiceGenerator.webp',
      ],
      link: 'https://tools.frinaze.site/',
      githubLink: '',
      startDate: 'Mar 2026',
      endDate: 'Present',
      status: 'active',
      date: '',
      desc: 'A collection of web-based tools designed to simplify everyday digital tasks, featuring utilities such as QR Code Generator, Image Optimizer, Invoice Generator, and Image Splitter through a simple and user-friendly interface.',
      skills: ['NextJS', 'TypeScript', 'TailwindCSS'],
    },
    {
      name: 'RS SMS',
      type: 'Company Profile Website',
      image: ['/rssms.webp', '/rssms2.webp', '/rssms3.webp'],
      link: 'https://rssurabayamedicalservice.id',
      githubLink: '',
      startDate: 'Dec 2025',
      endDate: 'Present',
      status: 'active',
      desc: 'A medical service website featuring hospital information, doctor directories, and health-related articles, supported by a custom admin dashboard for managing doctors and news content.',
      skills: ['ReactJS', 'JavaScript', 'TailwindCSS'],
    },
    {
      name: 'Harta Jaya',
      type: 'Company Landing Page Website',
      image: ['/hartajaya.webp'],
      link: 'https://www.hartajayatourntraveljatim.com/',
      githubLink: '',
      startDate: 'Nov 2025',
      endDate: 'Present',
      status: 'active',
      desc: 'A responsive company profile and landing page for a tour and travel business, presenting travel services, company information, and key details to help potential customers explore available offerings.',
      skills: ['ReactJS', 'JavaScript', 'TailwindCSS'],
    },
    {
      name: 'BEM FIA UB 2025',
      type: 'Organization Profile Website',
      image: ['/bemfiaub.webp', '/bemfiaub2.webp', '/bemfiaub3.webp'],
      link: 'https://bemfiaub-ten.vercel.app/home',
      githubLink: '',
      startDate: 'May 2025',
      endDate: 'May 2026',
      status: 'inactive',
      desc: 'An organizational profile website for BEM FIA UB, designed to showcase the organization’s identity, activities, programs, and information for students and visitors.',
      skills: ['ReactJS', 'JavaScript', 'TailwindCSS'],
    },
    {
      name: 'Maraksara',
      type: 'Education Website',
      image: ['/maraksara.webp', '/maraksara1.webp', '/maraksara2.webp'],
      link: '',
      githubLink: '',
      status: 'inactive',
      startDate: 'Aug 2025',
      endDate: 'Aug 2026',
      desc: 'An educational website built to present learning programs and educational content through a user-friendly interface, with a Laravel backend supporting website content management.',
      skills: ['ReactJS', 'JavaScript', 'TailwindCSS'],
    },
    {
      name: 'DPM FIA UB 2024',
      type: 'Organization Profile Website',
      image: ['/dpmfiaub.webp', '/dpmfiaub2.webp', '/dpmfiaub3.webp'],
      link: 'https://dpmfiaub.vercel.app/#/',
      githubLink: '',
      status: 'inactive',
      startDate: 'Oct 2024',
      endDate: 'Oct 2025',
      desc: 'An organizational profile website for DPM FIA UB, designed to showcase the organization’s identity, activities, programs, and information for students and visitors.',
      skills: ['ReactJS', 'JavaScript', 'TailwindCSS'],
    },
  ];
  const [brightness, setBrightness] = useState(() => {
    return Number(localStorage.getItem('brightness')) || 100;
  });
  const [contrast, setContrast] = useState(() => {
    return Number(localStorage.getItem('contrast')) || 70;
  });
  const [grayscale, setGrayScale] = useState(() => {
    return Number(localStorage.getItem('grayscale')) || 50;
  });

  const [imgUrl, setImgUrl] = useState([]);
  const [skills, setSkills] = useState([]);
  const [desc, setDesc] = useState('');
  const [link, setLink] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [starDate, setStartDate] = useState('');
  const [endDate, setEndDeate] = useState('');

  const [layout, setLayout] = useState(0);
  const [active, setActive] = useState(null);

  const changeFilter = (filter, value) => {
    const val = Number(value);

    if (filter === 'brightness') {
      setBrightness(val);
      localStorage.setItem('brightness', val);
    } else if (filter === 'contrast') {
      setContrast(val);
      localStorage.setItem('contrast', val);
    } else if (filter === 'grayscale') {
      setGrayScale(val);
      localStorage.setItem('grayscale', val);
    }
  };

  return (
    <div className="bg-[#fffaf3]">
      <main className="font-montserrat">
        <section className="bg-[#fffaf3] w-full grid grid-cols-1 px-10 lg:grid-cols-2 place-content-center items-center lg:px-20 min-h-screen py-10">
          <div className="text-[#222222] w-full space-y-3">
            <h1 className="font-semibold text-4xl md:text-7xl lg:text-[4.5vw] leading-tight">
              Hi, I'm Henry Frizzel Johanis
            </h1>
            <p className="italic text-sm sm:text-base">
              Web Developer • Web Designer
            </p>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="flex flex-col gap-3 sm:gap-5 text-sm sm:text-base *:p-2 *:hover:p-4 *:hover:bg-[#e9ecea51] *:border-b *:border-dashed *:transition-all">
              <a href="#about">About</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#skills">Skills</a>
              {/* <a>Contact</a> */}
              <a href="#education">Education & Experience</a>
              <a target="_blank" href="https://frinaze.site">
                Build Your Website
              </a>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="bg-[#161616] grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 sm:px-10 lg:px-20 py-10"
        >
          <div className="flex flex-col justify-center gap-5">
            <span className="text-white font-medium text-2xl sm:text-3xl border-b-2 w-fit">
              About Me
            </span>

            <div className="text-white text-sm sm:text-base max-w-xl">
              <p>Hi there, I’m Henry. a web developer and designer.</p>
              <p>
                I build websites that are simple, functional, and enjoyable to
                use.
              </p>
              <p>Currently focused on ReactJS, NextJS, and TailwindCSS.</p>
            </div>

            {/* <div className="py-2 px-4 bg-white text-black text-sm w-fit">
            ReactJS • NextJS • TailwindCSS
          </div> */}

            <div className="flex gap-5 mt-4">
              <FaReact className="text-[#4f4e4e] text-5xl" />
              <RiNextjsFill className="text-[#4f4e4e] text-5xl" />
              <RiTailwindCssFill className="text-[#4f4e4e] text-5xl" />
            </div>
          </div>

          <div className="bg-[#fffaf3] w-full grid grid-cols-1 md:grid-cols-2 gap-5 p-5 items-center">
            <img
              src="/Henry.webp"
              alt=""
              className="w-full max-w-[250px] mx-auto object-contain"
              style={{
                filter: `brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%)
      `,
              }}
            />

            <div className="flex flex-col text-[#222222] gap-4">
              <h2 className="text-sm italic">
                Sorry, no good photo... but you can edit it.
              </h2>

              <div className="p-7 relative w-full shadow bg-white flex flex-col gap-3 text-sm">
                <RiResetRightFill
                  onClick={() => {
                    localStorage.clear();
                    setBrightness(100);
                    setContrast(70);
                    setGrayScale(50);
                  }}
                  className="absolute cursor-pointer top-3 right-3"
                />

                <div>
                  <label>Brightness</label>
                  <input
                    value={brightness}
                    min={0}
                    max={200}
                    step={5}
                    onChange={(e) => changeFilter('brightness', e.target.value)}
                    type="range"
                  />
                </div>

                <div>
                  <label>Contrast</label>
                  <input
                    value={contrast}
                    min={0}
                    max={200}
                    step={5}
                    onChange={(e) => changeFilter('contrast', e.target.value)}
                    type="range"
                  />
                </div>

                <div>
                  <label>Gray Scale</label>
                  <input
                    value={grayscale}
                    min={0}
                    max={200}
                    step={5}
                    onChange={(e) => changeFilter('grayscale', e.target.value)}
                    type="range"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="portfolio"
          className="min-h-[500px] flex flex-col px-2 sm:px-10 lg:px-20 py-10 bg-[#fffaf3]"
        >
          <div
            className={`grid ${layout === 3 ? 'grid-cols-1' : layout === 2 ? 'grid-cols-3' : 'grid-cols-2'} transition-all duration-300 lg:px-20 gap-1 sm:gap-2 lg:gap-4`}
          >
            <div className="col-span-full flex items-center gap-3 justify-between">
              <h1 className="font-medium mb-2 text-3xl md:text-4xl">
                Portfolio
              </h1>

              <div className="flex bg-[#222222] p-1 *:text-xs *:sm:text-lg">
                <button
                  onClick={() => setLayout(0)}
                  className={`${layout === 0 ? 'bg-white text-black' : 'text-white'} px-2 py-1 sm:px-3 sm:py-2`}
                >
                  <LuLayoutGrid />
                </button>
                <button
                  onClick={() => setLayout(1)}
                  className={`${layout === 1 ? 'bg-white text-black' : 'text-white'} px-2 py-1 sm:px-3 sm:py-2`}
                >
                  <LuLayoutPanelTop />
                </button>
                <button
                  onClick={() => setLayout(2)}
                  className={`${layout === 2 ? 'bg-white text-black' : 'text-white'} hidden sm:flex px-2 py-1 sm:px-3 sm:py-2`}
                >
                  <TfiLayoutGrid3 />
                </button>
                <button
                  onClick={() => setLayout(3)}
                  className={`${layout === 3 ? 'bg-white text-black' : 'text-white'} flex sm:hidden px-2 py-1 sm:px-3 sm:py-2`}
                >
                  <TfiLayoutMenuV />
                </button>
              </div>
            </div>
            {projects.map((project, index) => (
              <div
                onClick={() => setActive(index)}
                key={index}
                className={`relative group overflow-hidden ${layout === 1 && index === 0 ? 'col-span-2' : ''}`}
              >
                <div className="absolute top-0 left-0  bg-[#fffaf3] pb-1.5 sm:pb-3 pr-1.5 sm:pr-3 pl-0.5 sm:pl-1 pt-0.5 sm:pt-1 rounded-br-3xl sm:rounded-br-4xl">
                  <span className="absolute top-0 -right-1 sm:-right-2 w-1 sm:w-2 h-1 sm:h-2 bg-transparent rounded-tl-full shadow-[-2.5px_-2.5px_0_2.5px_#fffaf3] sm:shadow-[-5px_-5px_0_5px_#fffaf3]" />
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-1 sm:w-2 h-1 sm:h-2 bg-transparent rounded-tl-full shadow-[-2.5px_-2.5px_0_2.5px_#fffaf3] sm:shadow-[-5px_-5px_0_5px_#fffaf3]" />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setImgUrl(project.image);
                      setSkills(project.skills);
                      setDesc(project.desc);
                      setLink(project.link);
                      setName(project.name);
                      setType(project.type);
                      setStatus(project.status);
                      setStartDate(project.startDate);
                      setEndDeate(project.endDate);
                      document.getElementById('modal_portfolio').showModal();
                    }}
                    className="bg-[#222222] p-1.5 sm:p-2.5 rounded-br-2xl"
                  >
                    <RiInfoI className="text-xs sm:text-lg text-white" />
                  </button>
                </div>

                <div className="absolute z-20 bottom-0 right-0 bg-[#fffaf3] pl-1.5 sm:pl-3 pt-1.5 sm:pt-3 pb-0.5 pr-0.5  sm:pb-1 sm:pr-1 rounded-tl-3xl sm:rounded-tl-4xl flex items-center justify-center">
                  <span className="absolute -top-1 sm:-top-2 right-0 w-1 h-1 sm:w-2 sm:h-2 bg-transparent rounded-br-full shadow-[2.5px_2.5px_0_2.5px_#fffaf3] sm:shadow-[5px_5px_0_5px_#fffaf3]" />
                  <span className="absolute bottom-0 -left-1 sm:-left-2 w-1 h-1 sm:w-2 sm:h-2 bg-transparent rounded-br-full shadow-[2.5px_2.5px_0_2.5px_#fffaf3] sm:shadow-[5px_5px_0_5px_#fffaf3]" />

                  <a
                    href={project.link}
                    target="_blank"
                    className="bg-[#222222] p-1.5 sm:p-2.5 rounded-tl-xl sm:rounded-tl-2xl"
                  >
                    <RiArrowRightUpLine className="text-xs sm:text-lg text-white" />
                  </a>
                </div>
                <img
                  src={project.image[0]}
                  alt={project.name}
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </section>
        <section
          id="skills"
          className="bg-[#161616] px-5 sm:px-10 lg:px-20 py-16 flex flex-col gap-10 items-center"
        >
          <div className="flex flex-col items-center gap-3 text-center">
            <h1 className="text-white font-medium text-3xl md:text-4xl">
              Skills
            </h1>
            <p className="text-white/70 text-sm sm:text-base max-w-md">
              Still improving, but here’s what I’ve worked with so far.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl">
            <div className="bg-[#222] p-5 row-span-2 text-white space-y-2">
              <h2 className="font-semibold">Frontend</h2>
              <p className="text-sm text-white/70 break-after-all">
                ReactJS, NextJS, JavaScript, TypeScript, Component, React
                Lifecycle, Global State(Context, Zustand), Axios, TanStack
                (useQuery, useMutation)
              </p>
            </div>

            <div className="bg-[#222] p-5 text-white space-y-2">
              <h2 className="font-semibold">Styling</h2>
              <p className="text-sm text-white/70">
                Flexbox, Grid, Animation, Responsive Design, daisyUI, Bootstrap,
                TailwindCSS
              </p>
            </div>

            <div className="bg-[#222] p-5 text-white space-y-2">
              <h2 className="font-semibold">Backend</h2>
              <p className="text-sm text-white/70">Laravel (MVC), REST API</p>
            </div>
            <div className="bg-[#222] p-5 text-white space-y-2">
              <h2 className="font-semibold">Database</h2>
              <p className="text-sm text-white/70">
                SQL, Join, CRUD Operations
              </p>
            </div>
            <div className="bg-[#222] p-5 text-white space-y-2">
              <h2 className="font-semibold">Tools</h2>
              <p className="text-sm text-white/70">
                Figma, Git (GitHub, GitLab), Postman, Trello
              </p>
            </div>
          </div>
        </section>
        <section
          id="education"
          className="min-h-[500px] flex flex-col gap-5 px-2 sm:px-10 lg:px-20 py-10 bg-[#fffaf3]"
        >
          <div className="flex flex-col">
            <h1 className="font-medium text-3xl md:text-4xl">Education</h1>
            <p className="text-sm sm:text-base">
              Academic background & learning journey
            </p>
          </div>
          <div className="flex flex-col mb-3">
            <div className="flex gap-2">
              <div className="p-4 sm:p-8 bg-[#d1cec9] rounded-sm items-center justify-center hidden sm:flex">
                <RiGraduationCapFill className="text-[#777673] text-[35px] sm:text-[40px]" />
              </div>
              <div className="flex flex-col justify-between px-3">
                <div className="flex flex-col">
                  <h1 className="font-bold text-xl sm:text-2xl">
                    Universitas Terbuka
                  </h1>
                  <p className="text-xs sm:text-sm">
                    Bachelor of Information Systems
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mt-2 text-[#000000a1]">
                  <div className="flex gap-2 items-center">
                    <RiCalendar2Line />
                    <p className="text-xs sm:text-sm">Nov 2026 - Present </p>
                  </div>
                  <div className="divider divider-horizontal w-5 hidden sm:flex"></div>
                  <div className="flex gap-2 items-center">
                    <HiOutlineLibrary />
                    <p className="text-xs sm:text-sm">Transfer Student</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider divider-neutral h-1 opacity-40"></div>
            <div className="flex gap-2">
              <div className="p-4 sm:p-8 bg-[#d1cec9] rounded-sm items-center justify-center hidden sm:flex">
                <RiGraduationCapFill className="text-[#777673] text-[35px] sm:text-[40px]" />
              </div>
              <div className="flex flex-col justify-between px-3">
                <div className="flex flex-col">
                  <h1 className="font-bold text-xl sm:text-2xl">
                    Universitas Bunda Mulia
                  </h1>
                  <p className="text-xs sm:text-sm">
                    Bachelor of Information Systems
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mt-2 text-[#000000a1]">
                  <div className="flex gap-2 items-center">
                    <RiCalendar2Line />
                    <p className="text-xs sm:text-sm">Aug 2022 - Jan 2025 </p>
                  </div>
                  <div className="divider divider-horizontal w-5 hidden sm:flex"></div>
                  <div className="flex gap-2 items-center">
                    <HiOutlineLibrary />
                    <p className="text-xs sm:text-sm">Previous Institution</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider divider-neutral h-1 opacity-40"></div>
            <div className="flex gap-2">
              <div className="p-4 sm:p-8 bg-[#d1cec9] rounded-sm items-center justify-center hidden sm:flex">
                <RiBookShelfLine size={40} className="text-[#777673]" />
              </div>
              <div className="flex flex-col justify-between px-3">
                <div className="flex flex-col">
                  <h1 className="font-bold text-xl sm:text-2xl">Enigma Camp</h1>
                  <p className="text-xs sm:text-sm">React JS Bootcamp</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mt-2 text-[#000000a1]">
                  <div className="flex gap-2 items-center">
                    <RiCalendar2Line />
                    <p className="text-xs sm:text-sm">Apr 2025 - May 2025 </p>
                  </div>
                  <div className="divider divider-horizontal w-5"></div>
                  <div className="flex gap-2 items-center">
                    <RiTrophyLine />
                    <p className="text-xs sm:text-sm">
                      Top 4 of 17 participant
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-3xl md:text-4xl">Experience</h1>
            <p className="text-sm sm:text-base">My career journey so far</p>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <div className="p-4 sm:p-8 bg-[#d1cec9] rounded-sm items-center justify-center hidden sm:flex">
                <RiLightbulbFlashFill className="text-[#777673] text-[35px] sm:text-[40px]" />
              </div>
              <div className="flex flex-col justify-between px-3">
                <div className="flex flex-col">
                  <h1 className="font-bold text-xl sm:text-2xl">
                    NoLimit Indonesia
                  </h1>
                  <p className="text-xs sm:text-sm">
                    Frontend Developer Intern
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mt-2 text-[#000000a1]">
                  <div className="flex gap-2 items-center">
                    <RiCalendar2Line />
                    <p className="text-xs sm:text-sm">Jul 2026 - Oct 2026 </p>
                  </div>
                  <div className="divider divider-horizontal w-5 hidden sm:flex"></div>
                  <div className="flex gap-2 items-center">
                    <PiMapPinLineBold />
                    <p className="text-xs sm:text-sm">Bandung</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider divider-neutral h-1 opacity-40"></div>
            <div className="flex gap-2">
              <div className="p-4 sm:p-8 bg-[#d1cec9] rounded-sm items-center justify-center hidden sm:flex">
                <RiLightbulbFlashFill className="text-[#777673] text-[35px] sm:text-[40px]" />
              </div>
              <div className="flex flex-col justify-between px-3">
                <div className="flex flex-col">
                  <h1 className="font-bold text-xl sm:text-2xl">
                    Self Employed
                  </h1>
                  <p className="text-xs sm:text-sm">
                    Freelance Website Developer
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mt-2 text-[#000000a1]">
                  <div className="flex gap-2 items-center">
                    <RiCalendar2Line />
                    <p className="text-xs sm:text-sm">Oct 2024 - Present </p>
                  </div>
                  <div className="divider divider-horizontal w-5 hidden sm:flex"></div>
                  <div className="flex gap-2 items-center">
                    <PiMapPinLineBold />
                    <p className="text-xs sm:text-sm">Tangerang</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="divider divider-neutral h-1 opacity-40"></div> */}
          </div>
        </section>
        <PortfolioModal
          imgUrl={imgUrl}
          skills={skills}
          desc={desc}
          link={link}
          title={name}
          type={type}
          status={status}
          startDate={starDate}
          endDate={endDate}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
