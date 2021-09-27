import React from 'react';
import Layout from '@/layouts/layout';
import {
  FaBook,
  FaGem,
  FaGopuram,
  FaLayerGroup,
  FaLink,
  FaLock,
  FaMagic,
  FaNetworkWired,
  FaSeedling,
  FaServer,
  FaShoppingCart,
  FaSitemap,
} from 'react-icons/fa';
import tw from 'twin.macro';
import NewsletterSubscribe from "@/components/newsletter-subscribe";
import {AiOutlineTeam} from "react-icons/ai";
import {GiStoneCrafting} from "react-icons/gi";
import {RiUserHeartLine} from "react-icons/ri";
import Link from 'next/link';
import {
  volume01,
  volume02,
  volume03,
  volume04,
  volume05,
  volume06,
  volume07,
  volume08,
  volume09,
  volume10, volume11, volume12
} from "../constants";
import Image from "next/image";

const StyledArticle = tw.article``;

const TocPage = () => {
  return (
    <Layout
      customMeta={{
        title: 'Table of Contents – Dev Concepts',
        description: 'The table of contents of the Dev Concepts collection',
      }}
    >
      <StyledArticle className="large-page-content-wrapper space-y-12">
        <div className="min-w-full text-center">
          <h1 className="page-heading">
            Table of contents <FaBook className="ml-2 inline"/>
          </h1>
        </div>

        <div className="w-full flex flex-row justify-around">
          <div className="max-w-4xl prose leading-6 text-gray-900 dark:text-gray-400">
            This is the outline of the whole Dev Concepts collection. The table of contents will continue to evolve over
            time. Note that this version is intentionally kept "short". The actual outline is much longer.
          </div>
        </div>

        <div id="top" className="min-w-full flex flex-col">
          <div className="mt-4 flex flex-col md:flex-row-reverse md:h-full md:min-h-full w-full">
            <div className="md:h-full md:min-h-full md:sticky md:top-0 md:w-5/12 lg:w-4/12">
              <div>
                <h3 className="w-full text-center text-xl lg:text-3xl">Dev Concepts Volumes</h3>
                <section className="grid object-center grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-2 text-devConceptsWhite">
                  <Link
                    href={`/table-of-contents/#${volume01.tocAnchor}`}
                    aria-label={`Volume 1: ${volume01.name}`}
                  >
                    <div
                      className="no-underline h-full rounded bg-devConceptsBlue-500 hover:bg-devConceptsBlue-400 hover:no-underline hover:cursor-pointer shadow-lg flex flex-row object-center py-2 px-2"
                      onClick={() =>
                        history.pushState(null, `Dev Concepts - Table of contents - ${volume01.name}`, `#${volume01.tocAnchor}`)
                      }>
                      <div className="text-xl flex items-center">01</div>
                      <div
                        className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <GiStoneCrafting/>
                      </span>
                        <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">{volume01.shortName}</div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href={`/table-of-contents/#${volume02.tocAnchor}`}
                    aria-label={`Volume 2: ${volume02.name}`}
                  >
                    <div
                      className="no-underline h-full rounded bg-devConceptsGreen-700 hover:bg-devConceptsGreen-600 hover:no-underline hover:cursor-pointer shadow-lg flex flex-row object-center py-2 px-2"
                      onClick={() =>
                        history.pushState(null, `Dev Concepts - Table of contents - ${volume02.name}`, `#${volume02.tocAnchor}`)
                      }>
                      <div className="text-xl flex items-center">02</div>
                      <div
                        className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <RiUserHeartLine/>
                      </span>
                        <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">{volume02.shortName}</div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href={`/table-of-contents/#${volume03.tocAnchor}`}
                    aria-label={`Volume 3: ${volume03.name}`}
                  >
                    <div
                      className="no-underline h-full rounded bg-devConceptsTeal-800 hover:bg-devConceptsTeal-700 hover:no-underline hover:cursor-pointer shadow-lg flex flex-row object-center py-2 px-2"
                      onClick={() =>
                        history.pushState(null, `Dev Concepts - Table of contents - ${volume03.name}`, `#${volume03.tocAnchor}`)
                      }>
                      <div className="text-xl flex items-center">03</div>
                      <div
                        className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <FaGopuram/>
                      </span>
                        <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">{volume03.shortName}</div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href={`/table-of-contents/#${volume04.tocAnchor}`}
                    aria-label={`Volume 4: ${volume04.name}`}
                  >
                    <div
                      className="no-underline h-full rounded bg-devConceptsPink-600 hover:bg-devConceptsPink-500 hover:no-underline hover:cursor-pointer shadow-lg flex flex-row object-center py-2 px-2"
                      onClick={() =>
                        history.pushState(null, `Dev Concepts - Table of contents - ${volume04.name}`, `#${volume04.tocAnchor}`)
                      }>
                      <div className="text-xl flex items-center">04</div>
                      <div
                        className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <FaGem/>
                      </span>
                        <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">{volume04.shortName}</div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href={`/table-of-contents/#${volume05.tocAnchor}`}
                    aria-label={`Volume 5: ${volume05.name}`}
                  >
                    <div
                      className="no-underline h-full rounded bg-devConceptsOrange-700 hover:bg-devConceptsOrange-600 hover:no-underline hover:cursor-pointer shadow-lg flex flex-row object-center py-2 px-2"
                      onClick={() =>
                        history.pushState(null, `Dev Concepts - Table of contents - ${volume05.name}`, `#${volume05.tocAnchor}`)
                      }>
                      <div className="text-xl flex items-center">05</div>
                      <div
                        className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <FaServer/>
                      </span>
                        <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">{volume05.shortName}</div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href={`/table-of-contents/#${volume06.tocAnchor}`}
                    aria-label={`Volume 6: ${volume06.name}`}
                  >
                    <div
                      className="no-underline h-full rounded bg-devConceptsIndigo-800 hover:bg-devConceptsIndigo-700 hover:no-underline hover:cursor-pointer shadow-lg flex flex-row object-center py-2 px-2"
                      onClick={() =>
                        history.pushState(null, `Dev Concepts - Table of contents - ${volume06.name}`, `#${volume06.tocAnchor}`)
                      }>
                      <div className="text-xl flex items-center">06</div>
                      <div
                        className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <FaSeedling/>
                      </span>
                        <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">{volume06.shortName}</div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href={`/table-of-contents/#${volume07.tocAnchor}`}
                    aria-label={`Volume 7: ${volume07.name}`}
                  >
                    <div
                      className="no-underline h-full rounded bg-devConceptsCerise-700 hover:bg-devConceptsCerise-600 hover:no-underline hover:cursor-pointer shadow-lg flex flex-row object-center py-2 px-2"
                      onClick={() =>
                        history.pushState(null, `Dev Concepts - Table of contents - ${volume07.name}`, `#${volume07.tocAnchor}`)
                      }>
                      <div className="text-xl flex items-center">07</div>
                      <div
                        className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <FaSitemap/>
                      </span>
                        <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">{volume07.shortName}</div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href={`/table-of-contents/#${volume08.tocAnchor}`}
                    aria-label={`Volume 8: ${volume08.name}`}
                  >
                    <div
                      className="no-underline h-full rounded bg-devConceptsOrange-900 hover:bg-devConceptsOrange-800 hover:no-underline hover:cursor-pointer shadow-lg flex flex-row object-center py-2 px-2"
                      onClick={() =>
                        history.pushState(null, `Dev Concepts - Table of contents - ${volume08.name}`, `#${volume08.tocAnchor}`)
                      }>
                      <div className="text-xl flex items-center">08</div>
                      <div
                        className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <FaLayerGroup/>
                      </span>
                        <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">{volume08.shortName}</div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href={`/table-of-contents/#${volume09.tocAnchor}`}
                    aria-label={`Volume 9: ${volume09.name}`}
                  >
                    <div
                      className="no-underline h-full rounded bg-devConceptsTeal-800 hover:bg-devConceptsTeal-700 hover:no-underline hover:cursor-pointer shadow-lg flex flex-row object-center py-2 px-2"
                      onClick={() =>
                        history.pushState(null, `Dev Concepts - Table of contents - ${volume09.name}`, `#${volume09.tocAnchor}`)
                      }>
                      <div className="text-xl flex items-center">09</div>
                      <div
                        className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <FaMagic/>
                      </span>
                        <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">{volume09.shortName}</div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href={`/table-of-contents/#${volume10.tocAnchor}`}
                    aria-label={`Volume 10: ${volume10.name}`}
                  >
                    <div
                      className="no-underline h-full rounded bg-devConceptsPurple-700 hover:bg-devConceptsPurple-600 hover:no-underline hover:cursor-pointer shadow-lg flex flex-row object-center py-2 px-2"
                      onClick={() =>
                        history.pushState(null, `Dev Concepts - Table of contents - ${volume10.name}`, `#${volume10.tocAnchor}`)
                      }>
                      <div className="text-xl flex items-center">10</div>
                      <div
                        className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <FaNetworkWired/>
                      </span>
                        <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">{volume10.shortName}</div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href={`/table-of-contents/#${volume11.tocAnchor}`}
                    aria-label={`Volume 11: ${volume11.name}`}
                  >
                    <div
                      className="no-underline h-full rounded bg-devConceptsAmber-600 hover:bg-devConceptsAmber-500 hover:no-underline hover:cursor-pointer shadow-lg flex flex-row object-center py-2 px-2"
                      onClick={() =>
                        history.pushState(null, `Dev Concepts - Table of contents - ${volume11.name}`, `#${volume11.tocAnchor}`)
                      }>
                      <div className="text-xl flex items-center">11</div>
                      <div
                        className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <FaLock/>
                      </span>
                        <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">{volume11.shortName}</div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href={`/table-of-contents/#${volume12.tocAnchor}`}
                    aria-label={`Volume 12: ${volume12.name}`}
                  >
                    <div
                      className="no-underline h-full rounded bg-devConceptsGray-800 hover:bg-devConceptsGray-700 hover:no-underline hover:cursor-pointer shadow-lg flex flex-row object-center py-2 px-2"
                      onClick={() =>
                        history.pushState(null, `Dev Concepts - Table of contents - ${volume12.name}`, `#${volume12.tocAnchor}`)
                      }>
                      <div className="text-xl flex items-center">12</div>
                      <div
                        className="text-center w-full md:flex md:flex-row md:object-center md:items-center lg:flex-col lg:justify-center">
                      <span className="text-xl sm:text-2xl md:ml-4 lg:ml-0 lg:text-2xl xg:text-3xl">
                        <AiOutlineTeam/>
                      </span>
                        <div className="md:ml-4 lg:ml-0 xg:px-2 xl:mt-2">{volume12.shortName}</div>
                      </div>
                    </div>
                  </Link>
                </section>
              </div>
            </div>
            <div id="main-toc" className="mt-4 md:mt-0 md:px-4 lg:px-16 md:w-7/12 lg:w-8/12">
              {/*  /!* -------------------------------------- VOLUME 1 -------------------------------------- *!/*/}
              <section id={`${volume01.tocAnchor}`} className="">
                <a href={`#${volume01.tocAnchor}`} className="anchor">
                  <h3>
                    Volume 1: {volume01.name}
                    <span className="anchor-icon">
                    <FaLink/>
                  </span>
                  </h3>
                </a>
                <div className="sm:flex sm:justify-end">
                  <div className="mt-4 flex justify-center sm:mt-0">
                    <a
                      href={volume01.gumroadShortUrl}
                      rel="noopener"
                      aria-label="Buy volume 1"
                      className="bg-devConceptsBlue-500 hover:bg-devConceptsBlue-400 hover:no-underline shadow-lg p-2 rounded-md text-white!"
                    >
                      <FaShoppingCart className="text-xl mr-2"/>
                      Buy volume 1: {volume01.price}
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center">
                  <a
                    href={volume01.gumroadShortUrl}
                    rel="noopener"
                    aria-label="Buy volume 1"
                    title="Buy volume 1"
                    className="cursor-pointer"
                  >
                    <Image
                      alt="Dev Concepts Volume 1"
                      width={500}
                      height={334}
                      src="/static/images/devConcepts/DevConcepts01Cover3D - tinypng.png"
                      className="rounded-lg opacity-80 hover:opacity-100"
                      loading={"eager"}
                    />
                  </a>
                </div>
                <br/>
                <p>
                  This volume explains the different skills that you’ll need to acquire and improve
                  over the course of your career to become a software crafter. There are no secrets and no magic to
                  become one. It’s mostly a
                  question of work, dedication, passion, and <span className="italic">fun</span>.
                </p>
                <br/>
                <p>
                  This volume is much less about technology than about personality traits and psychology. Even if we all
                  start with our own
                  background, strengths and weaknesses, there are things to know, tips and tricks that will guide you on
                  the path towards
                  becoming a software crafter.
                </p>
                <h3 className="mt-2">In this volume:</h3>
                <ol>
                  <li>Introduction</li>
                  <li>What is software development</li>
                  <li>What is software engineering</li>
                  <li>What is a software developer/engineer/coder/programmer</li>
                  <li>Evolution</li>
                  <li>What is a software crafter</li>
                  <li>Quality vs user satisfaction</li>
                  <li>
                    Important skills and practical advice
                    <ol>
                      <li>Enjoy solving problems</li>
                      <li>Improve your analytical skills</li>
                      <li>Be creative and open-minded</li>
                      <li>Be organized</li>
                      <li>Always Be Curious (ABC)</li>
                      <li>Improve continuously</li>
                      <li>Build habits</li>
                      <li>Learn your craft</li>
                      <li>Understand client needs</li>
                      <li>Go above and beyond</li>
                      <li>Learn to deal with hard problems</li>
                      <li>Learn to deal with failure</li>
                      <li>Focus on quality</li>
                      <li>Focus on security</li>
                      <li>Be reliable</li>
                      <li>Be pragmatic</li>
                      <li>Be super productive</li>
                      <li>Work in a structured manner</li>
                      <li>Have fun</li>
                      <li>Be a good communicator</li>
                      <li>Be a true team member</li>
                      <li>Be an Innovator and Influence others</li>
                      <li>Be a great decision maker</li>
                      <li>Manage your career</li>
                      <li>Preserve yourself</li>
                    </ol>
                  </li>
                </ol>
              </section>

              {/* -------------------------------------- VOLUME 2 -------------------------------------- */}
              <section id={`${volume02.tocAnchor}`} className="mt-4">
                <a href={`#${volume02.tocAnchor}`} className="anchor">
                  <h3>
                    Volume 2: {volume02.name}
                    <span className="anchor-icon">
                    <FaLink/>
                  </span>
                  </h3>
                </a>
                <div className="sm:flex sm:justify-end">
                  <div className="mt-4 flex justify-center sm:mt-0">
                    <a
                      href={volume02.gumroadShortUrl}
                      aria-label="Buy volume 2"
                      className="bg-devConceptsGreen-700 hover:bg-devConceptsGreen-600 hover:no-underline shadow-lg p-2 rounded-md text-white!"
                    >
                      <FaShoppingCart className="text-xl mr-2"/>
                      Buy volume 2: {volume02.price}
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center">
                  <a
                    href={volume02.gumroadShortUrl}
                    rel="noopener"
                    aria-label="Buy volume 2"
                    title="Buy volume 2"
                    className="cursor-pointer"
                  >
                    <Image
                      alt="Dev Concepts Volume 2"
                      width={500}
                      height={334}
                      src="/static/images/devConcepts/DevConcepts02Cover3D - tinypng.png"
                      className="rounded-lg opacity-80 hover:opacity-100"
                      loading={"eager"}
                    />
                  </a>
                </div>
                <br/>
                <p>
                  All software development endeavors have one thing in common: they aim to solve real-world{" "}
                  <span className="font-bold">problems</span>.
                </p>
                <br/>
                <p>
                  This volume focuses on how to understand what clients truly need. It covers concepts such as
                  functional & non-functional
                  requirements, techniques that you can use to understand business problems and end user goals. It also
                  covers what
                  specifications are and why they matter.
                </p>
                <br/>
                <p>
                  These ideas are important because,{" "}
                  <span className="font-bold">
                  no matter how good a software developer you are, it doesn’t matter at all if you end up building something that solves the
                  wrong problems.
                </span>
                </p>
                <h3 className="mt-2">In this volume:</h3>
                <ol>
                  <li>Introduction</li>
                  <li>What do clients need?</li>
                  <li>
                    Requirements
                    <ol>
                      <li>Functional requirements and jobs to be done</li>
                      <li>Non-functional requirements</li>
                      <li>Software Requirements Specification (SRS)</li>
                      <li>Actors, use cases and user stories</li>
                      <li>Business domain and Ubiquitous language</li>
                    </ol>
                  </li>
                  <li>
                    Requirements discovery
                    <ol>
                      <li>Requirements always change</li>
                      <li>Event storming</li>
                      <li>Discovery tools and techniques</li>
                      <li>Clarify and refine gradually</li>
                    </ol>
                  </li>
                  <li>
                    User Centered Design (UCD)
                    <ol>
                      <li>User Research</li>
                      <li>Jobs to be done</li>
                      <li>Design Thinking</li>
                    </ol>
                  </li>
                  <li>
                    User Experience Design (UX)
                    <ol>
                      <li>What UX designers focus on</li>
                      <li>
                        UX Concepts overview
                        <ol>
                          <li>UX User Research</li>
                          <li>User personas</li>
                          <li>User path, scenario, journey, and journey mapping</li>
                          <li>Human-Computer Interaction (HCI)</li>
                          <li>Interaction Design (IxD)</li>
                          <li>Usability and ergonomics</li>
                          <li>Accessibility</li>
                          <li>Information architecture & content strategy</li>
                          <li>UX/UI Design Patterns</li>
                          <li>A/B testing</li>
                        </ol>
                      </li>
                      <li>UX Workflow</li>
                      <li>Tools</li>
                    </ol>
                  </li>
                  <li>Design Sprints</li>
                  <li>The Lean Startup and Minimum Lovable Products</li>
                  <li>Specifications</li>
                  <li>Conclusion</li>
                </ol>
              </section>

              {/*  /!* -------------------------------------- VOLUME 3 -------------------------------------- *!/*/}
              <section id={`${volume03.tocAnchor}`} className="mt-4">
                <a href={`#${volume03.tocAnchor}`} className="anchor">
                  <h3>
                    Volume 3: {volume03.name}
                    <span className="anchor-icon">
                    <FaLink/>
                  </span>
                  </h3>
                </a>

                <div className="sm:flex sm:justify-end">
                  <div className="mt-4 flex justify-center sm:mt-0">
                    <a
                      href={volume03.gumroadShortUrl}
                      aria-label="Pre-order volume 3"
                      className="bg-devConceptsTeal-800 hover:bg-devConceptsTeal-700 hover:no-underline shadow-lg p-2 rounded-md text-white!"
                    >
                      <FaShoppingCart className="text-xl mr-2"/>
                      Pre-order volume 3: {volume03.price}
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center">
                  <a
                    href={volume03.gumroadShortUrl}
                    rel="noopener"
                    aria-label="Pre-order volume 3"
                    title="Pre-order volume 3"
                    className="cursor-pointer"
                  >
                    <Image
                      alt="Dev Concepts Volume 3"
                      width={500}
                      height={334}
                      src="/static/images/devConcepts/DevConcepts03Cover3D - tinypng.png"
                      className="rounded-lg opacity-80 hover:opacity-100"
                      loading={"eager"}
                    />
                  </a>
                </div>

                <br/>
                <p>
                  Once you have accumulated enough understanding about the requirements, you need to create IT solutions
                  that efficiently
                  solve the problems.
                </p>
                <br/>
                <p>
                  Before diving into design and code, you need to get in the shoes of an architect and devise{" "}
                  <span className="italic">solutions</span>. Software crafters are not necessarily architects, but they
                  should at least
                  understand what architects do and should be able to provide useful input to them.
                </p>
                <br/>
                <p>
                  Sometimes, you’ll also have to play the role of the architect (e.g., in small startups) and when that
                  happens, you need to
                  know what needs to be done to avoid disasters. Here, we'll explore some key ideas about IT
                  architecture in general and
                  software architecture in particular.
                </p>
                <h3 className="mt-2">In this volume:</h3>
                <ol>
                  <li>IT Architecture Overview</li>
                  <li>Enterprise Applications</li>
                  <li>The Hype Cycle</li>
                  <li>Enterprise Architecture (EA)</li>
                  <li>Solution architecture</li>
                  <li>
                    Software architecture
                    <ol>
                      <li>The role of a software architect</li>
                      <li>Overview</li>
                      <li>A basic example</li>
                      <li>Agile and Minimum Viable Architecture</li>
                      <li>
                        Patterns
                        <ol>
                          <li>Modular and multi-tier architectures</li>
                          <li>Layered</li>
                          <li>Monoliths</li>
                          <li>Microservices architecture & bounded contexts</li>
                          <li>Cloud-native applications</li>
                          <li>Serverless & Functions as a Service (FaaS)</li>
                          <li>Command Query Responsibility Segregation (CQRS)</li>
                          <li>Event-Driven Architecture (EDA)</li>
                          <li>Event Sourcing (ES)</li>
                          <li>Communications (protocols, HTTP, WebSockets, Message Queues, REST, GraphQL, SOAP, etc)
                          </li>
                        </ol>
                      </li>
                      <li>Architecture and scalability</li>
                      <li>Technical stack selection</li>
                    </ol>
                  </li>
                  <li>
                    Information/Data architecture
                    <ol>
                      <li>Data modeling</li>
                      <li>Data storage</li>
                      <li>
                        Data integration
                        <ol>
                          <li>Extract Transform Load (ETL)</li>
                          <li>Change Data Capture (CDC)</li>
                          <li>Web Services / SOA</li>
                        </ol>
                      </li>
                      <li>Data governance</li>
                      <li>Big Data</li>
                      <li>
                        Data analytics
                        <ol>
                          <li>Data Mining</li>
                          <li>Business Intelligence (BI)</li>
                          <li>Artificial Intelligence (AI)</li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                  <li>Infrastructure architecture</li>
                  <li>Security architecture</li>
                </ol>
              </section>

              {/*  /!*-------------------------------------- VOLUME 4 -------------------------------------- *!/*/}
              <section id={`${volume04.tocAnchor}`} className="mt-4">
                <a href={`#${volume04.tocAnchor}`} className="anchor">
                  <h3>
                    Volume 4: {volume04.name}
                    <span className="anchor-icon">
                    <FaLink/>
                  </span>
                  </h3>
                </a>
                <div className="sm:flex sm:justify-end">
                  <div className="mt-4 flex justify-center sm:mt-0">
                    <a
                      href={volume04.gumroadShortUrl}
                      aria-label="Pre-order volume 4"
                      className="bg-devConceptsPink-600 hover:bg-devConceptsPink-500 hover:no-underline shadow-lg p-2 rounded-md text-white!"
                    >
                      <FaShoppingCart className="text-xl mr-2"/>
                      Pre-order volume 4: {volume04.price}
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center">
                  <a
                    href={volume04.gumroadShortUrl}
                    rel="noopener"
                    aria-label="Pre-order volume 4"
                    title="Pre-order volume 4"
                    className="cursor-pointer"
                  >
                    <Image
                      alt="Dev Concepts Volume 4"
                      width={500}
                      height={334}
                      src="/static/images/devConcepts/DevConcepts04Cover3D - tinypng.png"
                      className="rounded-lg opacity-80 hover:opacity-100"
                      loading={"eager"}
                    />
                  </a>
                </div>
                <br/>
                <p>
                  Software design is where the real action begins. Previous volumes covered much higher level concepts.
                  Solving the wrong
                  problem means game over, a bad architecture means tons of waste, and bad software design means costly
                  maintenance. Here, we
                  explore software design, explain why it is critical for mental health (seriously!) and key concepts
                  that you’ll use on a
                  daily basis during your software crafter’s career.
                </p>
                <h3 className="mt-2">In this volume:</h3>
                <ol>
                  <li>
                    Technical design
                    <ol>
                      <li>
                        Data
                        <ol>
                          <li>Data models</li>
                          <li>Data structures</li>
                          <li>State machines (FSM)</li>
                        </ol>
                      </li>
                      <li>Business rules</li>
                      <li>Database design</li>
                      <li>
                        Algorithms
                        <ol>
                          <li>Complexity and the Big-O notation</li>
                        </ol>
                      </li>
                      <li>Workflows</li>
                      <li>
                        Code design principles
                        <ol>
                          <li>Problem partitioning</li>
                          <li>Design strategies</li>
                          <li>Abstraction</li>
                          <li>Modularity</li>
                          <li>Encapsulation</li>
                          <li>Law of Demeter (LoD)</li>
                          <li>Separation of concerns</li>
                          <li>SOLID principles</li>
                          <li>Don't Repeat Yourself (DRY)</li>
                          <li>Don't reinvent the wheel</li>
                          <li>You aren't gonna need it (YAGNI)</li>
                          <li>Pareto principle</li>
                          <li>Convention over configuration</li>
                          <li>API design</li>
                          <li>Refactoring/Refinement</li>
                        </ol>
                      </li>
                      <li>Design patterns</li>
                      <li>Naming</li>
                      <li>Choosing frameworks and libraries</li>
                      <li>
                        Documentation
                        <ol>
                          <li>Diagrams / Notations</li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                  <li>Domain Driven Design (DDD)</li>
                </ol>
              </section>

              {/*  /!* -------------------------------------- VOLUME 5 -------------------------------------- *!/*/}
              <section id={`${volume05.tocAnchor}`} className="mt-4">
                <a href={`#${volume05.tocAnchor}`} className="anchor">
                  <h3>
                    Volume 5: {volume05.name}
                    <span className="anchor-icon">
                    <FaLink/>
                  </span>
                  </h3>
                </a>
                <div className="sm:flex sm:justify-end">
                  <div className="mt-4 flex justify-center sm:mt-0">
                    <a
                      href={volume05.gumroadShortUrl}
                      aria-label="Pre-order volume 5"
                      className="bg-devConceptsOrange-700 hover:bg-devConceptsOrange-600 hover:no-underline shadow-lg p-2 rounded-md text-white!"
                    >
                      <FaShoppingCart className="text-xl mr-2"/>
                      Pre-order volume 5: {volume05.price}
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center">
                  <a
                    href={volume05.gumroadShortUrl}
                    rel="noopener"
                    aria-label="Pre-order volume 5"
                    title="Pre-order volume 5"
                    className="cursor-pointer"
                  >
                    <Image
                      alt="Dev Concepts Volume 5"
                      width={500}
                      height={334}
                      src="/static/images/devConcepts/DevConcepts05Cover3D - tinypng.png"
                      className="rounded-lg opacity-80 hover:opacity-100"
                      loading={"eager"}
                    />
                  </a>
                </div>
                <br/>
                <p>
                  This volume is dedicated to real beginners who first want to understand computers and operating
                  systems. We all need to
                  start somewhere, and this is an excellent introduction to basic principles underlying everything that
                  we do as software
                  crafters. Whether our code runs locally on our computer or somewhere in the cloud, it is always
                  executed by a CPU (physical
                  or virtual), accesses memory, reads/writes files, etc.
                </p>
                <br/>
                <p>
                  If you want to learn about CPUs, memory, file systems, files, processes, scheduling and whatnot, then
                  this volume is for
                  you.
                </p>
                <h3 className="mt-2">In this volume:</h3>
                <ol>
                  <li>Introduction</li>
                  <li>
                    Computer architecture basics
                    <ol>
                      <li>Central Processing Unit (CPU)</li>
                      <li>Memory (RAM)</li>
                      <li>Graphical Processing Unit (GPU)</li>
                      <li>Binary</li>
                      <li>Hexadecimal</li>
                    </ol>
                  </li>
                  <li>
                    Operating system basics
                    <ol>
                      <li>Major components</li>
                      <li>Programs</li>
                      <li>Processes and process management</li>
                      <li>Memory management</li>
                      <li>I/O management</li>
                      <li>File systems and files</li>
                      <li>Users and groups</li>
                      <li>Inter-Process Communication (IPC)</li>
                      <li>Ports</li>
                      <li>POSIX</li>
                      <li>Built-in programs</li>
                      <li>Shells</li>
                      <li>Environment variables</li>
                      <li>Services/Daemons</li>
                      <li>Scheduled tasks</li>
                      <li>Virtualization</li>
                      <li>Containerization</li>
                    </ol>
                  </li>
                </ol>
              </section>

              {/*  /!* -------------------------------------- VOLUME 6 -------------------------------------- *!/*/}
              <section id={`${volume06.tocAnchor}`} className="mt-4">
                <a href={`#${volume06.tocAnchor}`} className="anchor">
                  <h3>
                    Volume 6: {volume06.name}
                    <span className="anchor-icon">
                    <FaLink/>
                  </span>
                  </h3>
                </a>
                <div className="sm:flex sm:justify-end">
                  <div className="mt-4 flex justify-center sm:mt-0">
                    <a
                      href={volume06.gumroadShortUrl}
                      aria-label="Pre-order volume 6"
                      className="bg-devConceptsIndigo-800 hover:bg-devConceptsIndigo-700 hover:no-underline shadow-lg p-2 rounded-md text-white!"
                    >
                      <FaShoppingCart className="text-xl mr-2"/>
                      Pre-order volume 6: {volume06.price}
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center">
                  <a
                    href={volume06.gumroadShortUrl}
                    rel="noopener"
                    aria-label="Pre-order volume 6"
                    title="Pre-order volume 6"
                    className="cursor-pointer"
                  >
                    <Image
                      alt="Dev Concepts Volume 6"
                      width={500}
                      height={334}
                      src="/static/images/devConcepts/DevConcepts06Cover3D - tinypng.png"
                      className="rounded-lg opacity-80 hover:opacity-100"
                      loading={"eager"}
                    />
                  </a>
                </div>
                <br/>
                <p>
                  This volume is dedicated to real beginners who’d like to learn how to C-O-D-E. We will only scratch
                  the surface but this
                  volume is a great and practical introduction to{" "}
                  <span className="font-bold">
                  coding concepts that all software crafters <span className="italic">must</span> know
                </span>{" "}
                  and use literally all the time.
                </p>
                <h3 className="mt-2">In this volume:</h3>
                <ol>
                  <li>Introduction</li>
                  <li>
                    Programming concepts
                    <ol>
                      <li>Pseudocode</li>
                      <li>Variables</li>
                      <li>Constants</li>
                      <li>References</li>
                      <li>Special values</li>
                      <li>Operators</li>
                      <li>Statements</li>
                      <li>Expressions</li>
                      <li>Keywords</li>
                      <li>Data types</li>
                      <li>Mutability</li>
                      <li>Conditional structures</li>
                      <li>Functions</li>
                      <li>Loops</li>
                      <li>Errors/Exceptions</li>
                      <li>Generics</li>
                      <li>Decorators/annotations</li>
                      <li>Regular expressions (Regex)</li>
                      <li>Recursion</li>
                      <li>Serialization</li>
                      <li>Modules/Packages</li>
                      <li>Concurrency</li>
                      <li>Streams</li>
                      <li>Libraries</li>
                      <li>Frameworks</li>
                      <li>Bugs</li>
                      <li>Debugging</li>
                    </ol>
                  </li>
                  <li>
                    Programming paradigms
                    <ol>
                      <li>
                        Imperative
                        <ol>
                          <li>Procedural</li>
                          <li>Object-Oriented Programming (OOP)</li>
                        </ol>
                      </li>
                      <li>
                        Declarative
                        <ol>
                          <li>Functional Programming (FP)</li>
                          <li>Functional Reactive Programming (FRP)</li>
                        </ol>
                      </li>
                      <li>Aspect Oriented Programming (AOP)</li>
                    </ol>
                  </li>
                  <li>
                    Programming languages & platforms
                    <ol>
                      <li>Generations</li>
                      <li>Families</li>
                      <li>Characteristics</li>
                      <li>Examples</li>
                      <li>How to choose</li>
                    </ol>
                  </li>
                  <li>
                    Development tools
                    <ol>
                      <li>Integrated Development Environment (IDE)</li>
                      <li>Source Control Management client</li>
                      <li>Build tools</li>
                      <li>Development environment setup</li>
                    </ol>
                  </li>
                  <li>Free and Open Source Software (FOSS)</li>
                  <li>
                    Databases
                    <ol>
                      <li>Database transactions</li>
                      <li>Relational Database Management Systems (RDBMS)</li>
                      <li>NoSQL</li>
                    </ol>
                  </li>
                  <li>Character encoding</li>
                  <li>
                    Internet
                    <ol>
                      <li>How does it work?</li>
                      <li>
                        Hypertext Transfer Protocol (HTTP)
                        <ol>
                          <li>Server/Clients</li>
                          <li>Requests/Responses</li>
                          <li>URLs</li>
                          <li>Verbs</li>
                          <li>Headers</li>
                          <li>Status codes</li>
                          <li>Protocol versions</li>
                          <li>Tools</li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                  <li>Full Text Search (FTS)</li>
                </ol>
              </section>

              {/*  /!* -------------------------------------- VOLUME 7 -------------------------------------- *!/*/}
              <section id={`${volume07.tocAnchor}`} className="mt-4">
                <a href={`#${volume07.tocAnchor}`} className="anchor">
                  <h3>
                    Volume 7: {volume07.name}
                    <span className="anchor-icon">
                    <FaLink/>
                  </span>
                  </h3>
                </a>
                <div className="sm:flex sm:justify-end">
                  <div className="mt-4 flex justify-center sm:mt-0">
                    <a
                      href={volume07.gumroadShortUrl}
                      aria-label="Pre-order volume 7"
                      className="bg-devConceptsCerise-700 hover:bg-devConceptsCerise-600 hover:no-underline shadow-lg p-2 rounded-md text-white!"
                    >
                      <FaShoppingCart className="text-xl mr-2"/>
                      Pre-order volume 7: {volume07.price}
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center">
                  <a
                    href={volume07.gumroadShortUrl}
                    rel="noopener"
                    aria-label="Pre-order volume 7"
                    title="Pre-order volume 7"
                    className="cursor-pointer"
                  >
                    <Image
                      alt="Dev Concepts Volume 7"
                      width={500}
                      height={334}
                      src="/static/images/devConcepts/DevConcepts07Cover3D - tinypng.png"
                      className="rounded-lg opacity-80 hover:opacity-100"
                      loading={"eager"}
                    />
                  </a>
                </div>
                <br/>
                <p>
                  This volume is dedicated to elements that must be taken care of <span
                  className="font-bold italic">everywhere</span>;
                  whether you’re doing back-end or front-end software development. Note that I also consider those
                  necessary for
                  infrastructure scripting (but it’s always hard to make IT operations personnel realize that they are
                  also software
                  developers ;-)
                </p>
                <br/>
                <p>
                  This is a critical volume for true software crafters because many of these points are unfortunately
                  often overlooked for
                  various reasons (mostly bad ones). If you want to become a <span
                  className="italic">true</span> software crafter, then
                  you’ll make sure to always pay attention to those and to convince everyone else to do the same; even
                  if it means going
                  against some pointy-haired manager ;-)
                </p>
                <h3 className="mt-2">In this volume:</h3>
                <ol>
                  <li>Error handling</li>
                  <li>
                    Code quality & Quality Assurance (QA)
                    <ol>
                      <li>Broken windows theory</li>
                      <li>Technical debt</li>
                      <li>
                        Code quality checks
                        <ol>
                          <li>
                            Static Code Analysis (SCA)
                            <ol>
                              <li>Metrics</li>
                              <li>Tools</li>
                            </ol>
                          </li>
                        </ol>
                      </li>
                      <li>Testing</li>
                      <li>
                        Clean code advice
                        <ol>
                          <li>
                            General
                            <ol>
                              <li>Code duplication</li>
                              <li>Coding conventions</li>
                              <li>Defensive programming</li>
                              <li>Dead code elimination</li>
                              <li>Code quality checklist</li>
                              <li>Code comments</li>
                            </ol>
                          </li>
                          <li>Variables</li>
                          <li>Functions</li>
                          <li>Conditionals</li>
                          <li>Error handling</li>
                          <li>Testing</li>
                          <li>Performance</li>
                        </ol>
                      </li>
                      <li>Continuous Integration (CI)</li>
                      <li>Code review process</li>
                      <li>Issue/Bug tracking</li>
                    </ol>
                  </li>
                  <li>Logging</li>
                  <li>Performance/resource usage</li>
                  <li>Internationalization (i18n) and localization (l10n)</li>
                  <li>Encoding</li>
                  <li>
                    Caching
                    <ol>
                      <li>Concepts</li>
                      <li>Types</li>
                      <li>Patterns</li>
                    </ol>
                  </li>
                  <li>Feature flagging</li>
                  <li>How to fix bugs</li>
                  <li>Version management</li>
                  <li>
                    Source Control Management (SCM)
                    <ol>
                      <li>Workflows</li>
                      <li>Monorepos</li>
                      <li>Practical advice</li>
                    </ol>
                  </li>
                  <li>Continuous Delivery/Deployment</li>
                  <li>
                    Operational Maturity (OM)
                    <ol>
                      <li>Business Continuity Management (BCM)</li>
                      <li>IT Service Management (ITSM)</li>
                      <li>Backup/restore</li>
                      <li>Disaster Recovery (DR)</li>
                    </ol>
                  </li>
                  <li>Security</li>
                </ol>
              </section>

              {/*  /!* -------------------------------------- VOLUME 8 -------------------------------------- *!/*/}
              <section id={`${volume08.tocAnchor}`} className="mt-4">
                <a href={`#${volume08.tocAnchor}`} className="anchor">
                  <h3>
                    Volume 8: {volume08.name}
                    <span className="anchor-icon">
                    <FaLink/>
                  </span>
                  </h3>
                </a>
                <div className="sm:flex sm:justify-end">
                  <div className="mt-4 flex justify-center sm:mt-0">
                    <a
                      href={volume08.gumroadShortUrl}
                      aria-label="Pre-order volume 8"
                      className="bg-devConceptsOrange-900 hover:bg-devConceptsOrange-800 hover:no-underline shadow-lg p-2 rounded-md text-white!"
                    >
                      <FaShoppingCart className="text-xl mr-2"/>
                      Pre-order volume 8: {volume08.price}
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center">
                  <a
                    href={volume08.gumroadShortUrl}
                    rel="noopener"
                    aria-label="Pre-order volume 8"
                    title="Pre-order volume 8"
                    className="cursor-pointer"
                  >
                    <Image
                      alt="Dev Concepts Volume 8"
                      width={500}
                      height={334}
                      src="/static/images/devConcepts/DevConcepts08Cover3D - tinypng.png"
                      className="rounded-lg opacity-80 hover:opacity-100"
                      loading={"eager"}
                    />
                  </a>
                </div>
                <br/>
                <p>
                  This volume is all about back-end software, where most of the action occurs under the hood… without
                  anyone knowing. Back-end
                  developers have to focus on very different aspects of IT systems, compared to front-end developers.
                  Software crafters need
                  to understand those differences.
                </p>
                <h3 className="mt-2">In this volume:</h3>
                <ol>
                  <li>What back-end developers focus on and why</li>
                  <li>
                    Data
                    <ol>
                      <li>Models</li>
                      <li>Persistence / Retrieval / Search</li>
                      <li>Exposure through APIs</li>
                      <li>Batch processing</li>
                    </ol>
                  </li>
                  <li>
                    Usual layers and responsibilities
                    <ol>
                      <li>Domain</li>
                      <li>Repository</li>
                      <li>Business</li>
                      <li>Web services</li>
                      <li>Integration</li>
                      <li>Batch</li>
                      <li>Shared</li>
                      <li>Cross-cutting</li>
                    </ol>
                  </li>
                  <li>Security</li>
                  <li>Performance</li>
                  <li>Scalability</li>
                  <li>
                    APIs
                    <ol>
                      <li>
                        Types
                        <ol>
                          <li>RESTful</li>
                          <li>GraphQL</li>
                          <li>SOAP</li>
                          <li>GRPC</li>
                        </ol>
                      </li>
                      <li>Comparison</li>
                      <li>Tools</li>
                    </ol>
                  </li>
                  <li>Frameworks and major libraries</li>
                  <li>Going full-stack</li>
                </ol>
              </section>

              {/*  /!* -------------------------------------- VOLUME 9 -------------------------------------- *!/*/}
              <section id={`${volume09.tocAnchor}`} className="mt-4">
                <a href={`#${volume09.tocAnchor}`} className="anchor">
                  <h3>
                    Volume 9: {volume09.name}
                    <span className="anchor-icon">
                    <FaLink/>
                  </span>
                  </h3>
                </a>
                <div className="sm:flex sm:justify-end">
                  <div className="mt-4 flex justify-center sm:mt-0">
                    <a
                      href={volume09.gumroadShortUrl}
                      aria-label="Pre-order volume 9"
                      className="bg-devConceptsTeal-800 hover:bg-devConceptsTeal-700 hover:no-underline shadow-lg p-2 rounded-md text-white!"
                    >
                      <FaShoppingCart className="text-xl mr-2"/>
                      Pre-order volume 9: {volume09.price}
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center">
                  <a
                    href={volume09.gumroadShortUrl}
                    rel="noopener"
                    aria-label="Pre-order volume 9"
                    title="Pre-order volume 9"
                    className="cursor-pointer"
                  >
                    <Image
                      alt="Dev Concepts Volume 9"
                      width={500}
                      height={334}
                      src="/static/images/devConcepts/DevConcepts09Cover3D - tinypng.png"
                      className="rounded-lg opacity-80 hover:opacity-100"
                      loading={"eager"}
                    />
                  </a>
                </div>
                <br/>
                <p>
                  This volume is all about front-end systems, which are the tip of the iceberg; the one concrete part
                  that end users see and
                  can feel. Given the visual nature of front-end applications, front-end developers have to focus on
                  very different aspects,
                  compared to back-end developers. Software crafters must not necessarily be artists, but they still
                  have to pay attention to
                  the aesthetics… among many other things.
                </p>
                <h3 className="mt-2">In this volume:</h3>
                <ol>
                  <li>What front-end developers focus on and why</li>
                  <li>Usual layers and responsibilities</li>
                  <li>
                    Component architecture
                    <ol>
                      <li>Smart components</li>
                      <li>Dumb components</li>
                      <li>Component libraries</li>
                    </ol>
                  </li>
                  <li>
                    User Interface Design (UI)
                    <ol>
                      <li>Principles</li>
                      <li>Elements</li>
                      <li>Design systems</li>
                      <li>Mockups/prototypes & fidelity</li>
                    </ol>
                  </li>
                  <li>
                    Web Design
                    <ol>
                      <li>Technologies</li>
                      <li>Progressive enhancement</li>
                      <li>Graceful degradation</li>
                      <li>Responsive Web Design (RWD)</li>
                      <li>Cross-browser testing</li>
                    </ol>
                  </li>
                  <li>
                    Accessibility (a11y)
                    <ol>
                      <li>Standards</li>
                      <li>Tools</li>
                    </ol>
                  </li>
                  <li>
                    Performance
                    <ol>
                      <li>Testing/Scoring</li>
                      <li>Tools</li>
                    </ol>
                  </li>
                  <li>
                    The Web Platform
                    <ol>
                      <li>Main technologies of the Web</li>
                      <li>How Web browsers work</li>
                      <li>Web standards</li>
                    </ol>
                  </li>
                  <li>HTML basics</li>
                  <li>CSS basics</li>
                  <li>Metadata on the Web</li>
                  <li>
                    Data entry
                    <ol>
                      <li>HTML forms</li>
                      <li>Captcha & security</li>
                    </ol>
                  </li>
                  <li>
                    Approaches to create Web applications
                    <ol>
                      <li>Old school</li>
                      <li>Single Page Applications (SPAs)</li>
                      <li>Server-Side Rendering (SSR)</li>
                      <li>Static sites</li>
                      <li>Micro front-ends</li>
                    </ol>
                  </li>
                  <li>Progressive Web Apps (PWAs)</li>
                  <li>
                    UI state management
                    <ol>
                      <li>Types</li>
                      <li>
                        Redux
                        <ol>
                          <li>Architecture</li>
                          <li>Libraries</li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                  <li>Scalable Vector Graphics (SVG)</li>
                  <li>Web fonts</li>
                  <li>Desktop/Mobile apps</li>
                  <li>Frameworks and major libraries</li>
                </ol>
              </section>

              {/*  /!* -------------------------------------- VOLUME 10 -------------------------------------- *!/*/}
              <section id={`${volume10.tocAnchor}`} className="mt-4">
                <a href={`#${volume10.tocAnchor}`} className="anchor">
                  <h3>
                    Volume 10: {volume10.name}
                    <span className="anchor-icon">
                    <FaLink/>
                  </span>
                  </h3>
                </a>
                <div className="sm:flex sm:justify-end">
                  <div className="mt-4 flex justify-center sm:mt-0">
                    <a
                      href={volume10.gumroadShortUrl}
                      aria-label="Pre-order volume 10"
                      className="bg-devConceptsPurple-700 hover:bg-devConceptsPurple-600 hover:no-underline shadow-lg p-2 rounded-md text-white!"
                    >
                      <FaShoppingCart className="text-xl mr-2"/>
                      Pre-order volume 10: {volume10.price}
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center">
                  <a
                    href={volume10.gumroadShortUrl}
                    rel="noopener"
                    aria-label="Pre-order volume 10"
                    title="Pre-order volume 10"
                    className="cursor-pointer"
                  >
                    <Image
                      alt="Dev Concepts Volume 10"
                      width={500}
                      height={334}
                      src="/static/images/devConcepts/DevConcepts10Cover3D - tinypng.png"
                      className="rounded-lg opacity-80 hover:opacity-100"
                      loading={"eager"}
                    />
                  </a>
                </div>
                <br/>
                <p>
                  Back-end software is conceptually below the front-end in terms of visibility, but IT infrastructure
                  goes way further down,
                  from services, servers and networks down to cable and electrical signals; phew! ;-)
                </p>
                <br/>
                <p>
                  Having a good understanding of where our applications are hosted, how the environment is
                  configured/secured/monitored, etc is super valuable and makes the difference between someone who
                  “just” writes code and someone who contributes to developing end-to-end solutions. This volume
                  explains some important concepts about IT infrastructure. All DevSecOps engineers (and thus software
                  crafters) should be aware of at least a part of those ideas.
                </p>
                <h3 className="mt-2">In this volume:</h3>
                <ol>
                  <li>What IT infrastructure focuses on and why</li>
                  <li>
                    Networking concepts
                    <ol>
                      <li>OSI Model</li>
                      <li>Networks</li>
                      <li>Routing</li>
                      <li>Network Address Translation (NAT)</li>
                      <li>Ports</li>
                      <li>Port Address Translation (PAT)</li>
                      <li>Network zones</li>
                      <li>Cloud networks</li>
                      <li>DHCP</li>
                      <li>DNS</li>
                    </ol>
                  </li>
                  <li>Network domains</li>
                  <li>
                    Availability & performance
                    <ol>
                      <li>High Availability (HA)</li>
                      <li>Clustering</li>
                      <li>Load Balancing (LB)</li>
                    </ol>
                  </li>
                  <li>Systems maintenance</li>
                  <li>
                    Systems management
                    <ol>
                      <li>Databases</li>
                      <li>Configuration management</li>
                      <li>Compliance management</li>
                      <li>Naming conventions</li>
                    </ol>
                  </li>
                  <li>
                    Data
                    <ol>
                      <li>Storage</li>
                      <li>Backup/restore</li>
                      <li>File services</li>
                      <li>Enterprise Content Management (ECM)</li>
                      <li>Databases</li>
                    </ol>
                  </li>
                  <li>
                    Cloud computing
                    <ol>
                      <li>Infrastructure as a Service (IaaS)</li>
                      <li>Software as a Service (SaaS)</li>
                      <li>Platform as a Service (PaaS</li>
                      <li>Cloud types</li>
                      <li>Workload portability</li>
                    </ol>
                  </li>
                  <li>
                    Hosting
                    <ol>
                      <li>Applications</li>
                      <li>Services</li>
                      <li>Functions</li>
                    </ol>
                  </li>
                  <li>Deployments</li>
                  <li>Environments</li>
                  <li>Security</li>
                  <li>
                    Automation
                    <ol>
                      <li>Scripting</li>
                      <li>Infrastructure as code</li>
                      <li>GitOps</li>
                      <li>ChatOps</li>
                      <li>Tools</li>
                    </ol>
                  </li>
                  <li>API integration</li>
                </ol>
              </section>

              {/*  /!* -------------------------------------- VOLUME 11 -------------------------------------- *!/*/}
              <section id={`${volume11.tocAnchor}`} className="mt-4">
                <a href={`#${volume11.tocAnchor}`} className="anchor">
                  <h3>
                    Volume 11: {volume11.name}
                    <span className="anchor-icon">
                    <FaLink/>
                  </span>
                  </h3>
                </a>
                <div className="sm:flex sm:justify-end">
                  <div className="mt-4 flex justify-center sm:mt-0">
                    <a
                      href={volume11.gumroadShortUrl}
                      aria-label="Pre-order volume 11"
                      className="bg-devConceptsAmber-600 hover:bg-devConceptsAmber-500 hover:no-underline shadow-lg p-2 rounded-md text-white!"
                    >
                      <FaShoppingCart className="text-xl mr-2"/>
                      Pre-order volume 11: {volume11.price}
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center">
                  <a
                    href={volume11.gumroadShortUrl}
                    rel="noopener"
                    aria-label="Pre-order volume 11"
                    title="Pre-order volume 11"
                    className="cursor-pointer"
                  >
                    <Image
                      alt="Dev Concepts Volume 11"
                      width={500}
                      height={334}
                      src="/static/images/devConcepts/DevConcepts11Cover3D - tinypng.png"
                      className="rounded-lg opacity-80 hover:opacity-100"
                      loading={"eager"}
                    />
                  </a>
                </div>
                <br/>
                <p>
                  Once you understand what your clients need (or at least, what they need right now), you can think
                  about the “product”. Product management is a specific job, but as a software crafter, it is important
                  to at least understand what it is and what it entails because, sometimes, you might have to take the
                  lead for some parts of product management.
                </p>
                <br/>
                <p>
                  How are products and their features defined, prioritized, and organized? Dive into this volume to
                  learn about technical product management, product backlogs, product roadmaps as well as how to create,
                  structure, and maintain those.
                </p>
                <br/>
                <p>
                  Explore software development approaches, methodologies, and discover modern project management.
                </p>
                <br/>
                <p>
                  Learn how to become a great team leader and help your team succeed.
                </p>
                <h3 className="mt-2">In this volume:</h3>
                <ol>
                  <li>Attackers</li>
                  <li>
                    Key concepts
                    <ol>
                      <li>Attack vectors</li>
                      <li>Attack surface</li>
                      <li>Physical security</li>
                      <li>Confidentiality, Integrity, Availability (CIA)</li>
                      <li>Non-repudiation</li>
                      <li>Defense-in-depth</li>
                      <li>Identification</li>
                      <li>Authentication, Authorization, Auditing (AAA)</li>
                      <li>Principle of least privilege</li>
                      <li>Allow lists and deny lists</li>
                      <li>Privilege escalation</li>
                      <li>Need to know</li>
                      <li>Segregation of duties</li>
                      <li>Responsibility Assignment Matrix (RACI)</li>
                      <li>Security by obscurity</li>
                      <li>Personally Identifiable Information (PII)</li>
                    </ol>
                  </li>
                  <li>
                    Risk management
                    <ol>
                      <li>Operational Risk Management (ORM)</li>
                      <li>Risk assessment</li>
                      <li>Risk mitigation</li>
                    </ol>
                  </li>
                  <li>
                    Security controls
                    <ol>
                      <li>Common controls</li>
                      <li>OWASP</li>
                    </ol>
                  </li>
                  <li>
                    Cryptography
                    <ol>
                      <li>Encryption</li>
                      <li>Hashing</li>
                      <li>Digital Signatures</li>
                      <li>Pseudo-Random Number Generators (PRNG)</li>
                      <li>Keys</li>
                    </ol>
                  </li>
                  <li>
                    Secure communications
                    <ol>
                      <li>
                        Secure protocols
                        <ol>
                          <li>Why HTTPS matters</li>
                          <li>Transport Layer Security (TLS)</li>
                          <li>Perfect Forward Secrecy</li>
                        </ol>
                      </li>
                      <li>Public Key Infrastructure (PKI)</li>
                      <li>Firewalls</li>
                      <li>Network segregation</li>
                      <li>Proxies</li>
                      <li>NAC, IDS, IPS</li>
                    </ol>
                  </li>
                  <li>
                    Configuration hardening
                    <ol>
                      <li>Accounts security</li>
                      <li>Hosts security</li>
                      <li>Web servers security</li>
                      <li>Domain security</li>
                      <li>Cloud security</li>
                      <li>Configuration drift</li>
                    </ol>
                  </li>
                  <li>
                    Secret management
                    <ol>
                      <li>Password management</li>
                      <li>Privileged Access Management (PAM)</li>
                      <li>Hardware Security Modules (HSM)</li>
                    </ol>
                  </li>
                  <li>
                    Vulnerability tracking
                    <ol>
                      <li>Vulnerability databases</li>
                      <li>How to track vulnerabilities</li>
                    </ol>
                  </li>
                  <li>
                    Security testing
                    <ol>
                      <li>Security verification</li>
                      <li>Penetration testing</li>
                      <li>Bug bounty programs</li>
                    </ol>
                  </li>
                  <li>
                    Web platform security
                    <ol>
                      <li>Same Origin Policy (SOP)</li>
                      <li>Mixed content</li>
                      <li>Browser sandbox</li>
                      <li>Content Security Policy (CSP)</li>
                      <li>Cross-Origin Resource Sharing (CORS)</li>
                      <li>Cookies security</li>
                      <li>Privacy sandbox</li>
                    </ol>
                  </li>
                  <li>
                    Secure coding
                    <ol>
                      <li>OWASP top vulnerabilities</li>
                      <li>Integrating security in the SDLC</li>
                      <li>General advice</li>
                      <li>Input validation</li>
                      <li>Output encoding</li>
                      <li>Authentication</li>
                      <li>Session management</li>
                      <li>Authorization</li>
                      <li>Error handling</li>
                      <li>Logging and auditing</li>
                      <li>Data security</li>
                      <li>... and more!</li>
                    </ol>
                  </li>
                  <li>Incident response</li>
                  <li>Security monitoring</li>
                  <li>Security automation</li>
                  <li>Administrative measures</li>
                  <li>Laws and regulations</li>
                </ol>
              </section>

              {/*  /!* -------------------------------------- VOLUME 12 -------------------------------------- *!/*/}
              <section id={`${volume12.tocAnchor}`} className="mt-4">
                <a href={`#${volume12.tocAnchor}`} className="anchor">
                  <h3>
                    Volume 12: {volume12.name}
                    <span className="anchor-icon">
                    <FaLink/>
                  </span>
                  </h3>
                </a>
                <div className="sm:flex sm:justify-end">
                  <div className="mt-4 flex justify-center sm:mt-0">
                    <a
                      href={volume12.gumroadShortUrl}
                      aria-label="Pre-order volume 12"
                      className="bg-devConceptsGray-800 hover:bg-devConceptsGray-700 hover:no-underline shadow-lg p-2 rounded-md text-white!"
                    >
                      <FaShoppingCart className="text-xl mr-2"/>
                      Pre-order volume 12: {volume12.price}
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center">
                  <a
                    href={volume12.gumroadShortUrl}
                    rel="noopener"
                    aria-label="Pre-order volume 12"
                    title="Pre-order volume 12"
                    className="cursor-pointer"
                  >
                    <Image
                      alt="Dev Concepts Volume 12"
                      width={500}
                      height={334}
                      src="/static/images/devConcepts/DevConcepts12Cover3D - tinypng.png"
                      className="rounded-lg opacity-80 hover:opacity-100"
                      loading={"eager"}
                    />
                  </a>
                </div>
                <br/>
                <p>
                  Once you understand what your clients need (or at least, what they need right now), you can think
                  about the “product”.
                  Product management is a specific job, but as a software crafter, it is important to at least
                  understand what it is and what
                  it entails because, sometimes, you might have to take the lead for some parts of product management.
                </p>
                <br/>
                <p>
                  How are products and their features defined, prioritized and organized? Dive into this volume to learn
                  about technical
                  product management, product backlogs, product roadmaps as well as how to create, structure and
                  maintain those.
                </p>
                <h3 className="mt-2">In this volume:</h3>
                <ol>
                  <li>Project roles</li>
                  <li>
                    Product management
                    <ol>
                      <li>Product manager's role</li>
                      <li>
                        Product roadmap
                        <ol>
                          <li>Phases/Milestones</li>
                          <li>User Story Map</li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                  <li>
                    Backlog management
                    <ol>
                      <li>Advice</li>
                      <li>Tools</li>
                    </ol>
                  </li>
                  <li>
                    Software development process
                    <ol>
                      <li>Cowboy coding</li>
                      <li>Software/System Development Life Cycle (SDLC)</li>
                    </ol>
                  </li>
                  <li>
                    Software development approaches
                    <ol>
                      <li>Waterfall</li>
                      <li>Rational Unified Process (RUP)</li>
                      <li>
                        Agile
                        <ol>
                          <li>Scrum</li>
                          <li>Kanban</li>
                          <li>Scrumban</li>
                          <li>Disciplined Agile Delivery (DAD)</li>
                          <li>Agile Unified Process (AUP)</li>
                        </ol>
                      </li>
                      <li>
                        Lean
                        <ol>
                          <li>Lean thinking</li>
                          <li>Lean Product Development (LPD)</li>
                        </ol>
                      </li>
                      <li>Extreme Programming (XP)</li>
                      <li>Feature-driven Development (FDD)</li>
                      <li>DevOps and DevSecOps</li>
                    </ol>
                  </li>
                  <li>Project management basics</li>
                  <li>
                    Important definitions for teams
                    <ol>
                      <li>Definition of Ready to implement</li>
                      <li>Definition of Done</li>
                    </ol>
                  </li>
                  <li>Release management</li>
                </ol>
              </section>
            </div>
          </div>
        </div>

        <section className="min-w-full flex flex-row justify-center">
          <NewsletterSubscribe/>
        </section>
      </StyledArticle>
    </Layout>
  );
};

export default TocPage;
