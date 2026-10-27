import { RiCloseLine } from 'react-icons/ri';

export default function PortfolioModal({ imgUrl, skills = [], desc, link }) {
  return (
    <dialog id="modal_portfolio" className="modal w-full">
      <div className="modal-box rounded-none aspect-video min-w-1/2 relative p-0">
        <button
          onClick={() => document.getElementById('modal_portfolio')?.close()}
          className="absolute top-2 right-2 bg-[#222] text-white z-20"
        >
          <RiCloseLine size={20} />
        </button>
        <div className="flex flex-col gap-2 w-full h-full overflow-auto scrollbar-none pt-6 p-4">
          <div className="relative h-[500px] w-full z-10">
            <img
              src={imgUrl}
              alt=""
              className="absolute object-cover h-full w-full"
            />
          </div>
          <div className="flex gap-1">
            {skills.map((skill) => (
              <div className="px-4 py-1.5 bg-[#222] text-[10px] text-white">
                {skill}
              </div>
            ))}
          </div>
          <div className="border-t-[0.5px] border-b-[0.5px] border-gray-200 mt-1 pt-2 pb-2">
            <p>{desc}</p>
          </div>
          <div className='flex flex-col w-full mt-1'>
            <div className='flex justify-between w-full'>
              <p className='text-xs'>Live Priview</p>
              <a href={link} target='_blank' className='text-xs link link-primary'>{link}</a>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
