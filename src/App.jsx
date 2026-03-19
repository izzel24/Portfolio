import { useState } from 'react'
import './App.css'
import { RiResetRightFill } from 'react-icons/ri'
import { LuLayoutGrid, LuLayoutPanelTop } from 'react-icons/lu'
import { TfiLayoutGrid3, TfiLayoutMenuV } from 'react-icons/tfi'
import { TbHammerOff } from 'react-icons/tb'

function App() {

  const projects = [
    {
      name: "Frinaze",
      image: "/frinaze.webp",
      link: "https://frinaze.site",
      desc: "Company Profile Website",
      tech: "NextJS • Tailwind"
    },
    {
      name: "QR Generator",
      image: "/qrgenerator.webp",
      link: "https://tools.frinaze.site/qr-generator/url",
      desc: "Custom Qr Code Generator Website",
      tech: "NextJS • Tailwind"
    },
    {
      name: "RS SMS",
      image: "/rssms.webp",
      link: "https://rssurabayamedicalservice.id",
      desc: "Company Profile Website",
      tech: "ReactJS • Tailwind • Laravel"
    },
    {
      name: "Harta Jaya",
      image: "/hartajaya.webp",
      link: "https://www.hartajayatourntraveljatim.com/",
      desc: "Company Profile Website",
      tech: "ReactJS • Tailwind"
    },
    {
      name: "BEM FIA UB",
      image: "/bemfiaub.webp",
      link: "https://www.bemfiaub.com/home",
      desc: "Organization Profile Website",
      tech: "ReactJS • Tailwind"
    },
    {
      name: "Maraksara",
      image: "/maraksara.webp",
      link: "https://maraksara.id",
      desc: "Education Website",
      tech: "ReactJS • Tailwind • Laravel"
    }
  ]

  const [brightness, setBrightness] = useState(() => {
    return Number(localStorage.getItem("brightness")) || 100
  })
  const [contrast, setContrast] = useState(() => {
    return Number(localStorage.getItem("contrast")) || 70
  })
  const [grayscale, setGrayScale] = useState(() => {
    return Number(localStorage.getItem("grayscale")) || 50
  })

  const [layout, setLayout] = useState(0)
  const [active, setActive] = useState(null)


  const changeFilter = (filter, value) => {
    const val = Number(value)

    if (filter === "brightness") {
      setBrightness(val)
      localStorage.setItem("brightness", val)
    } else if (filter === "contrast") {
      setContrast(val)
      localStorage.setItem("contrast", val)
    } else if (filter === "grayscale") {
      setGrayScale(val)
      localStorage.setItem("grayscale", val)
    }
  }

  return (
    <main className='font-montserrat'>
      <section className='bg-[#fffaf3] w-full grid grid-cols-1 px-10 lg:grid-cols-2 place-content-center items-center lg:px-20 min-h-screen py-10'>

        <div className='text-[#222222] w-full space-y-3'>
          <h1 className='font-semibold text-4xl md:text-7xl lg:text-[4.5vw] leading-tight'>
            Hi, I'm Henry Frizzel Johanis
          </h1>
          <p className='italic text-sm sm:text-base'>Web Developer • Web Designer</p>
        </div>

        <div className='mt-10 lg:mt-0'>
          <div className='flex flex-col gap-3 sm:gap-5 text-sm sm:text-base *:p-2 *:hover:p-4 *:hover:bg-[#e9ecea51] *:border-b *:border-dashed *:transition-all'>
            <a href='#about'>About</a>
            <a href='#portfolio'>Portfolio</a>
            <a href='#skills'>Skills</a>
            {/* <a>Contact</a> */}
            <a target='_blank' href='https://frinaze.site'>Build Your Website</a>
          </div>
        </div>

      </section>
      <section id='about' className='bg-[#161616] grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 sm:px-10 lg:px-20 py-10'>

        <div className='flex flex-col justify-center gap-5'>
          <span className='text-white font-medium text-2xl sm:text-3xl border-b-2 w-fit'>
            About Me
          </span>

          <div className='text-white text-sm sm:text-base space-y-4 max-w-xl'>
            <p>Hi there, I’m Henry. a web developer and designer.</p>
            <p>I build websites that are simple, functional, and enjoyable to use.</p>
            <p>Currently focused on ReactJS, TailwindCSS, and learning NextJS.</p>
          </div>

          <div className='py-2 px-4 bg-white text-black text-sm w-fit'>
            5+ Projects • ReactJS • TailwindCSS
          </div>
        </div>

        <div className='bg-[#fffaf3] w-full grid grid-cols-1 md:grid-cols-2 gap-5 p-5 items-center'>

          <img
            src="/Henry.webp"
            alt=""
            className='w-full max-w-[250px] mx-auto object-contain'
            style={{
              filter: `
        brightness(${brightness}%)
        contrast(${contrast}%)
        grayscale(${grayscale}%)
      `,
            }}
          />

          <div className='flex flex-col text-[#222222] gap-4'>
            <h2 className='text-sm italic'>
              Sorry, no good photo... but you can edit it.
            </h2>

            <div className='p-7 relative w-full shadow bg-white flex flex-col gap-3 text-sm'>
              <RiResetRightFill
                onClick={() => {
                  localStorage.clear()
                  setBrightness(100)
                  setContrast(70)
                  setGrayScale(50)
                }}
                className='absolute cursor-pointer top-3 right-3'
              />

              <div>
                <label>Brightness</label>
                <input value={brightness} min={0} max={200} step={5} onChange={(e) => changeFilter("brightness", e.target.value)} type='range' />
              </div>

              <div>
                <label>Contrast</label>
                <input value={contrast} min={0} max={200} step={5} onChange={(e) => changeFilter("contrast", e.target.value)} type='range' />
              </div>

              <div>
                <label>Gray Scale</label>
                <input value={grayscale} min={0} max={200} step={5} onChange={(e) => changeFilter("grayscale", e.target.value)} type='range' />
              </div>
            </div>

          </div>
        </div>

      </section>
      <section id='portfolio' className='min-h-[500px] flex flex-col px-2 sm:px-10 lg:px-20 py-10 bg-[#fffaf3]'>
        <div className={`grid ${layout === 3 ? "grid-cols-1" : layout === 2 ? "grid-cols-3" : "grid-cols-2"} transition-all duration-300 lg:px-20 gap-1 sm:gap-2 lg:gap-4`}>
          <div className='col-span-full flex items-center gap-3 justify-between'>

            <h1 className='font-medium text-2xl sm:text-3xl md:text-4xl'>
              Portfolio
            </h1>

            <div className="flex bg-[#222222] p-1 *:text-xs *:sm:text-lg">
              <button onClick={() => setLayout(0)} className={`${layout === 0 ? "bg-white text-black" : "text-white"} px-2 py-1 sm:px-3 sm:py-2`}>
                <LuLayoutGrid  />
              </button>
              <button onClick={() => setLayout(1)} className={`${layout === 1 ? "bg-white text-black" : "text-white"} px-2 py-1 sm:px-3 sm:py-2`}>
                <LuLayoutPanelTop />
              </button>
              <button onClick={() => setLayout(2)} className={`${layout === 2 ? "bg-white text-black" : "text-white"} hidden sm:flex px-2 py-1 sm:px-3 sm:py-2`}>
                <TfiLayoutGrid3 />
              </button>
              <button onClick={() => setLayout(3)} className={`${layout === 3 ? "bg-white text-black" : "text-white"} flex sm:hidden px-2 py-1 sm:px-3 sm:py-2`}>
                <TfiLayoutMenuV />
              </button>
            </div>

          </div>
          {projects.map((project, index) => (
            <div
              onClick={() => setActive(index)}
              key={index}
              className={`relative group overflow-hidden ${layout === 1 && index === 0 ? "col-span-2" : ""}`}
            >
              <img
                src={project.image}
                alt={project.name}
                className='w-full h-full object-cover transition-all duration-300 group-hover:opacity-40'
              />
              <a 
                href={project.link || "#"}
                target="_blank" className={`absolute inset-0 ${active === index ? "flex" : "hidden"} lg:flex flex-col justify-end p-4 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/70 to-transparent text-white`}>
                <h2 className="text-lg font-semibold">{project.name}</h2>
                <p className="text-sm">{project.desc}</p>
                <span className="text-xs opacity-80">{project.tech}</span>
              </a>
            </div>
          ))}

        </div>
      </section>
        <section id='skills' className='bg-[#161616] px-5 sm:px-10 lg:px-20 py-16 flex flex-col gap-10 items-center'>

          <div className='flex flex-col items-center gap-3 text-center'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-light text-white uppercase'>
              Skills
            </h1>
            <p className='text-white/70 text-sm sm:text-base max-w-md'>
              Still improving, but here’s what I’ve worked with so far.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-6xl'>

            <div className='bg-[#222] p-5 rounded-lg text-white space-y-2'>
              <h2 className='font-semibold'>Frontend</h2>
              <p className='text-sm text-white/70'>
                ReactJS, NextJS(still learn), TailwindCSS, Bootstrap
              </p>
            <p className='text-xs text-white/50'>
              Currently learning NextJS and TypeScript
            </p>
            </div>


            <div className='bg-[#222] p-5 rounded-lg text-white space-y-2'>
              <h2 className='font-semibold'>Styling</h2>
              <p className='text-sm text-white/70'>
                Flexbox, Grid, Animation, Responsive Design
              </p>
            </div>

            <div className='bg-[#222] p-5 rounded-lg text-white space-y-2'>
              <h2 className='font-semibold'>Backend</h2>
              <p className='text-sm text-white/70'>
                Laravel (MVC), REST API
              </p>
            </div>

            {/* DATABASE */}
            <div className='bg-[#222] p-5 rounded-lg text-white space-y-2'>
              <h2 className='font-semibold'>Database</h2>
              <p className='text-sm text-white/70'>
                SQL, Join, CRUD Operations
              </p>
            </div>

          </div>

        </section>
      {/* <section id='contact' className='min-h-[500px] bg-[#fffaf3]'>

      </section> */}
    </main>
  )
}

export default App
