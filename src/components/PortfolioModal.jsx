import { useState } from 'react';
import { BiInfoCircle } from 'react-icons/bi';
import { CiCircleCheck } from 'react-icons/ci';
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from 'react-icons/io';
import {
  RiCalendar2Line,
  RiCloseLine,
  RiCodeSSlashFill,
  RiExternalLinkLine,
} from 'react-icons/ri';
import 'react-photo-view/dist/react-photo-view.css';

export default function PortfolioModal({
  title,
  imgUrl = [],
  skills = [],
  desc,
  link,
  type,
  status,
  startDate,
  endDate,
}) {
  const [imgIndex, setImgIndex] = useState(0);
  return (
    <dialog id="modal_portfolio" className="modal w-full">
      <div className="modal-box rounded-none aspect-10/12 sm:aspect-video min-w-[65%] relative p-0 overflow-y-auto">
        <button
          onClick={() => {
            document.getElementById('modal_portfolio')?.close();
            setImgIndex(0);
          }}
          className="absolute top-2 right-2 bg-[#222] text-white z-20"
        >
          <RiCloseLine size={25} />
        </button>
        <div className="flex flex-col gap-2 w-full h-full overflow-auto scrollbar-none pt-6 p-4">
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <div className="flex flex-col gap-2 sm:w-[70%]">
              <div className="relative min-h-40 sm:min-h-65 h-full w-full z-10 bg-gray-100">
                <img
                  src={imgUrl[imgIndex]}
                  alt=""
                  className="absolute object-contain h-full w-full"
                />
              </div>
              <div className="flex gap-2 mb-2 min-h-14 overflow-x-auto overflow-y-hidden scrollbar-none  sm:hidden">
                {imgUrl.map((item, index) => (
                  <div
                    onMouseOver={() => setImgIndex(index)}
                    onClick={() => setImgIndex(index)}
                    className="relative h-14 aspect-10/8 cursor-pointer"
                  >
                    <img
                      src={item}
                      className="absolute object-cover h-full w-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:w-1/2 items-start text-xs">
              <div className="flex pt-2 w-full items-center justify-between">
                <div className="flex flex-col w-[70%]">
                  <h1 className="text-3xl font-bold ">{title}</h1>
                  <h2 className="text-sm">{type}</h2>
                </div>
                {status === 'active' ? (
                  <div className="px-2.5 bg-green-200 py-1.5 mt-1.5 flex gap-1 items-center justify-center rounded-2xl ">
                    <IoIosCheckmarkCircleOutline className="text-lg" />
                    <p className="font-medium text-xs">Active</p>
                  </div>
                ) : (
                  <div className="px-2.5 bg-red-200 py-1.5 mt-1.5 flex gap-1 items-center justify-center rounded-2xl ">
                    <IoIosCloseCircleOutline className="text-lg" />
                    <p className="font-medium text-xs">Inactive</p>
                  </div>
                )}
              </div>
              <div className="flex mt-3 items-center">
                <div className="flex gap-2 items-center">
                  <RiCalendar2Line size={20} />
                  <span className="text-nowrap">
                    {startDate} - {endDate}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-center ">
                  <RiCodeSSlashFill size={20} />
                  <div className="flex gap-2">
                    {skills.map((skill) => (
                      <div className="px-4 py-1.5 bg-gray-200 text-[10px] flex items-center">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-auto items-center">
                <RiExternalLinkLine size={20} />
                <a
                  href={link}
                  target="_blank"
                  className="text-xs link link-primary line-clamp-1 break-all"
                >
                  {link}
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-2 max-w-[55%] mb-2 min-h-20 overflow-x-auto overflow-y-hidden scrollbar-none hidden sm:flex">
            {imgUrl.map((item, index) => (
              <div
                onMouseOver={() => setImgIndex(index)}
                onClick={() => setImgIndex(index)}
                className="relative h-18 aspect-10/8 cursor-pointer"
              >
                <img
                  src={item}
                  className="absolute object-cover h-full w-full"
                />
              </div>
            ))}
          </div>
          <div className="border-t-[0.5px] border-gray-200 pt-4 pb-2">
            <h1 className="text-xl font-bold">About This Project</h1>
            <p className="mt-1">{desc}</p>
          </div>
          {status === 'inactive' && (
            <div className="flex gap-4 mt-2 p-5 bg-gray-100 items-center">
              <BiInfoCircle size={30} />
              <div className="flex flex-col">
                <h1 className="text-lg font-bold leading-tight">
                  This project is no longer maintained
                </h1>
                <p className="mt-1 text-sm">
                  The website is no loonger actively developed or updated
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}
