"use server";


import HomeHero from '@/components/HomeHero';
import RecDefault from "public/images/RecDefault.png";
import Image from 'next/image';
import Link from 'next/link';
import findOutArrow from "public/images/FindOutArrow.svg";
import aboutUsBackground from "public/images/AboutUsBackground.svg";
import aboutUsBackgroundMobile from "public/images/MobileAboutUsBackGround.svg"

import DepartmentSectionsBackgroundLarge from "public/images/DepartmentsSectionsBackgroundLarge.svg"
import DepartmentSectionsBackgroundSmall from "public/images/DepartmentSectionsMobile.svg";

import ResourcesSectionsBackgroundLarge from "public/images/ResourcesSectionBackgroundLarge.svg";
import ResourcesSectionBackgroundSmall from "public/images/ResourceSectionSmall.svg";

import EventsSectionsBackgroundLarge from "public/images/EventsSectionBackgroundLarge.svg";
import EventsSectionBackgroundSmall from 'public/images/EventsSectionBackgroundSmall.svg';


export default async function Home() {
  return (
    <div className="scroll-smooth">
      <HomeHero />

      <div className="w-screen h-screen grid-cols-12 grid-rows-12 grid overflow-x-hidden overflow-y-hidden">
        <div className="sm:ml-4 z-0 m-2 text-7xl sm:text-8xl sm:row-start-1 sm:text-left inter-extralight text-center col-start-1 row-start-1 row-span-full col-span-full">
          About Us
        </div>
        <Image src={aboutUsBackgroundMobile} alt="mobile background" className="select-none pointer-events-none md:invisible visible col-start-1 ml-3 col-span-full row-start-2 row-span-full" />
        <Image src={aboutUsBackground} className='select-none pointer-events-none sm:invisible md:visible z-3 w-full h-full z-2 col-start-2 row-start-1 col-span-11 row-span-11' alt="background for the about us page (large verison)" />
        <Image className="z-2 col-start-1 row-span-3 col-span-11 ml-5 row-start-2 sm:row-start-3 sm:row-span-7 sm:col-span-10 sm:col-start-1 sm:ml-10 md:row-start-3 md:row-span-5 md:col-start-1 md:ml-20 md:col-span-8" src={RecDefault} alt="About us image" />
        <div className="z-1 row-start-7 text-2xl ml-2 col-start-1 col-span-full md:col-start-4 md:col-span-full row-span-full sm:row-start-9 md:row-start-10  md:row-span-4  sm:text-2xl inter-extralight mr-2">
          The Senior Caucus is dedicated to representing and advocating for the interests and concerns of the senior class. It plays a key role in organizing events, collecting resources, and communicating with school administration to alleviate stress and foster a sense of unity among the graduating class.
        </div>
      </div>

      <div className="w-screen h-10 sm:h-0" />

      {/* Dept. section */}
      <div className='grid grid-cols-12 grid-rows-12 w-screen h-screen overflow-x-hidden  overflow-y-hidden'>
        <Image className="select-none pointer-events-none invisible md:visible col-start-1 row-start-1 m-4 col-span-10 row-span-11" src={DepartmentSectionsBackgroundLarge} alt="the department page background large" />
        <Image className="select-none pointer-events-none visible md:invisible col-start-1 row-start-1 m-8 col-span-full row-span-fll" src={DepartmentSectionsBackgroundSmall} alt="" />
        <Image className="visible md:invisible col-start-2 row-start-2 col-span-10 row-span-6 w-full h-auto" src={RecDefault} alt="dept image 1" />
        <div className='col-start-1 row-start-1 row-span-1 col-span-2 inter-extralight text-6xl sm:text-7xl md:text-8xl sm:*:'>Departments</div>
        <div className='ml-4 invisible md:visible col-start-1 row-start-2 mt-16 col-span-8 row-span-8 grid grid-cols-2 grid-rows-2 gap-1 w-fit h-fit'>
          <Image className="w-full h-auto" src={RecDefault} alt="dept image 1" />
          <Image className="w-full h-auto" src={RecDefault} alt="dept image 2" />
          <Image className="w-full h-auto" src={RecDefault} alt="dept image 3" />
          <Image className="w-full h-auto" src={RecDefault} alt="dept image 4" />
        </div>
        <div className='col-start-1 row-start-5 sm:row-start-7 col-span-full text-2xl row-span-full md:col-start-7 ml-4 sm:ml-8 md:row-start-3 md:col-span-6 md:row-span-6 inter-extralight mr-2'>
          The Senior Caucus is a collaborative effort made up of various departments that manage events, resources, and communications for the senior class. Each department plays a vital role in organizing key activities, creating content, handling finances, and providing educational and career support, ensuring a memorable and well-rounded senior year experience.
          <br />
          <div className="transition-transform hover:translate-x-1">
            <Link href="/members" className="transition-transform hover:translate-x-1">
              <div className='underline underline-offset-1 cursor-pointer inter-bold inline-block'>Check out more</div>
              <Image src={findOutArrow} alt="arrow to find out more" className="select-none pointer-events-none inline-block ml-1 w-6 h-6 hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-screen h-10" />
      {/* Resources section */}
      <div className='grid grid-cols-12 grid-rows-12 w-screen h-screen overflow-x-hidden overflow-y-hidden'>
        <Image className="select-none pointer-events-none invisible md:visible col-start-1 row-start-1 col-span-full row-span-full" src={ResourcesSectionsBackgroundLarge} alt="background for the resources section" />
        <Image className="select-none pointer-events-none visible md:invisible col-start-1 row-start-1 col-span-full row-span-full" src={ResourcesSectionBackgroundSmall} alt="resources page background (on mobile)" />
        <Image className="col-start-1 row-start-2 ml-4 sm:col-start-2 sm:row-start-2 col-span-full sm:col-span-8 row-span-8 lg:col-start-6 lg:row-start-3 lg:col-span-6 lg:row-span-8" src={RecDefault} alt="Resources image" />
        <div className='sm:ml-2 col-start-1 row-start-1 col-span-full row-span-1 inter-extralight text-6xl sm:text-7xl md:text-8xl'>Resources</div>
        <div className='ml-2 sm:ml-14 text-2xl col-start-1 row-start-4 sm:row-start-5 row-span-8 col-span-full md:col-start-1 md:row-start-8 md:col-span-10 md:row-span-4 lg:col-start-1 lg:row-start-3 lg:col-span-6 lg:row-span-6 inter-extralight mr-2'>
          Senior Caucus offers a variety of academic resources throughout the entire school year. Some of our projects include the College Data Organizer, the LAST newsletters, our scholarships compilations, the ongoing college workshop series with Y Tu También, and our course selection guides for each semester.
          <br />
          <div className="transition-transform hover:translate-x-1">
            <Link href="/resources" className="transition-transform hover:translate-x-1">
              <div className='underline underline-offset-1 cursor-pointer inter-bold inline-block'>Check out more</div>
              <Image src={findOutArrow} alt="arrow to find out more" className="select-none pointer-events-none inline-block ml-1 w-6 h-6 hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
      <div className="w-screen h-10 sm:h-0" />

      {/* Events section */}
      <div className='grid grid-rows-12 grid-cols-12 w-screen h-screen overflow-x-hidden  overflow-y-hidden'>
        <Image className="select-none pointer-events-none invisible md:visible col-start-1 col-span-full row-start-1 row-span-full" src={EventsSectionsBackgroundLarge} alt="events section background for large devices" />
        <Image className="select-none pointer-events-none visible md:invisible col-start-1 col-span-full row-start-1 row-span-full" src={EventsSectionBackgroundSmall} alt="events section background for small devices" />
        <Image className="row-start-1 mt-10 col-start-1 col-span-10 ml-4 sm:ml-0  md:col-start-6 md:col-span-6 row-span-full w-full h-auto" src={RecDefault} alt="Resources image" />
        <div className='col-start-1 row-start-1 row-span-1 col-span-full inter-extralight text-7xl sm:text-8xl'>Events</div>
        <div className='row-start-3 row-span-full col-start-1 col-span-full md:col-start-1 md:col-span-7 md:row-start-3 ml-10 md:rows-span-6 inter-extralight text-2xl mr-2'>
          The Events Department is responsible for planning and arranging events inside and outside of Stuy to promote school community and engagement. Possible events we look forward to hosting this year include Senior Field Day, slime events, and a movie night. We will also be organizing Senior Prom and hosting fundraisers throughout the year, such as bake sales, to lower costs of tickets for everyone.
          <br />
          <div className='transition-transform hover:translate-x-1'>

            <Link href="/events" className="">
              <div className='underline underline-offset-1 cursor-pointer inter-bold inline-block'>Check out more</div>
              <Image src={findOutArrow} alt="arrow to find out more" className="select-none pointer-events-none inline-block ml-1 w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-screen h-10 sm:h-0" />

    </div >
  );
}