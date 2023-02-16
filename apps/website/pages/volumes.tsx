import React from 'react';
import Layout from '@/layouts/layout';
import NewsletterSubscribe from '@/components/newsletter-subscribe';
import { BsCollection } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillRightCircle } from 'react-icons/ai';
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
  volume10,
  volume11,
  volume12,
} from '../constants';

const VolumeSummariesPage = () => {
  return (
    <Layout
      customMeta={{
        title: 'Volumes – Dev Concepts',
        description: 'Software Development books',
      }}
    >
      <article className="large-page-content-wrapper space-y-12">
        <div className="min-w-full text-center">
          <h1 className="page-heading">
            The Dev Concepts Collection <BsCollection className="ml-2 inline" />
          </h1>
        </div>

        <div id="volumes-quote" className="grid grid-cols-1 place-items-center">
          <div className="max-w-2xl">
            <span className="italic text-3xl">A reference guide for your whole career in IT</span>
          </div>
        </div>

        <div className="min-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-12 place-items-center">
            {/* ------------------------------ VOLUME 01 START ------------------------------ */}
            <div id="volume-01" className="homepage-elevated-box large-book-card">
              <div className="flex-grow-0 flex-shrink-0">
                <Image
                  alt={volume01.coverDescription}
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts01Cover3D - small - tinypng.png"
                  className="rounded-lg"
                />
              </div>
              <footer>
                <div className="book-card-title">Volume 1</div>
                <div className="book-card-subtitle">{volume01.name}</div>
                <div className="book-card-description">
                  Explains the skills you need to acquire and improve to solve real-world problems. Find out how to shape your mentality
                  towards software development for maximum productivity.
                </div>
                <div className="mt-6 prose dark:prose-dark prose-lg space-y-2 dark:text-devConceptsWhite">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Explore skills developers need to acquire</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">How to become a software crafter</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Explore IT career paths</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a className="no-underline!" href={volume01.gumroadShortUrl} rel="noopener">
                    <span className="button-dark-bg">Buy now: {volume01.price}</span>
                  </a>
                </div>
                <div className="mt-2 text-center">
                  <Link href={`/table-of-contents/#${volume01.tocAnchor}`}>
                    <span className="prose dark:prose-dark underline hover:cursor-pointer">Chapter breakdown</span>
                  </Link>
                </div>
              </footer>
            </div>
            {/* ------------------------------ VOLUME 01 END ------------------------------ */}

            {/* ------------------------------ VOLUME 02 START ------------------------------ */}
            <div id="volume-02" className="homepage-elevated-box large-book-card">
              <div className="flex-grow-0 flex-shrink-0">
                <Image
                  alt={volume02.coverDescription}
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts02Cover3D - small - tinypng.png"
                  className="rounded-lg"
                />
              </div>
              <footer>
                <div className="book-card-title">Volume 2</div>
                <div className="book-card-subtitle">{volume02.name}</div>
                <div className="book-card-description">
                  If you can manage clients effectively, you’ll be in hot demand. Learn how to understand a client’s functional needs, and
                  how you can decode their end-user goals. Make sure your software is always solving the right problems.
                </div>
                <div className="mt-6 prose dark:prose-dark prose-lg space-y-2 dark:text-devConceptsWhite">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Understand User Experience (UX)</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Uncover Jobs-To-Be-Done</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Create delightful products</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a className="no-underline!" href={volume02.gumroadShortUrl} rel="noopener">
                    <span className="button-dark-bg">Buy now: {volume02.price}</span>
                  </a>
                </div>
                <div className="mt-2 text-center">
                  <Link href={`/table-of-contents/#${volume02.tocAnchor}`}>
                    <span className="prose dark:prose-dark underline hover:cursor-pointer">Chapter breakdown</span>
                  </Link>
                </div>
              </footer>
            </div>
            {/* ------------------------------ VOLUME 02 END ------------------------------ */}

            {/* ------------------------------ VOLUME 03 START ------------------------------ */}
            <div id="volume-03" className="homepage-elevated-box large-book-card">
              <div className="flex-grow-0 flex-shrink-0">
                <Image
                  alt={volume03.coverDescription}
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts03Cover3D - small - tinypng.png"
                  className="rounded-lg"
                />
              </div>
              <footer>
                <div className="book-card-title">Volume 3</div>
                <div className="book-card-subtitle">{volume03.name}</div>
                <div className="book-card-description">
                  To avoid time-consuming disasters in project planning and execution, you need a good understanding of key concepts in IT &
                  software architecture. Use this volume to learn how to devise simple but brilliant solutions to complex problems.
                </div>
                <div className="mt-6 prose dark:prose-dark prose-lg space-y-2 dark:text-devConceptsWhite">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Guided tour of software architecture</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Key software architecture patterns</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Explore data architecture</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a className="no-underline!" href={volume03.gumroadShortUrl} rel="noopener">
                    <span className="button-dark-bg">Pre-order: {volume03.price}</span>
                  </a>
                </div>
                <div className="mt-2 text-center">
                  <Link href={`/table-of-contents/#${volume03.tocAnchor}`}>
                    <span className="prose dark:prose-dark underline hover:cursor-pointer">Chapter breakdown</span>
                  </Link>
                </div>
              </footer>
            </div>
            {/* ------------------------------ VOLUME 03 END ------------------------------ */}

            {/* ------------------------------ VOLUME 04 START ------------------------------ */}
            <div id="volume-04" className="homepage-elevated-box large-book-card">
              <div className="flex-grow-0 flex-shrink-0">
                <Image
                  alt={volume04.coverDescription}
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts04Cover3D - small - tinypng.png"
                  className="rounded-lg"
                />
              </div>
              <footer>
                <div className="book-card-title">Volume 4</div>
                <div className="book-card-subtitle">{volume04.name}</div>
                <div className="book-card-description">
                  Dive into the details of software design so you can avoid costly mistakes and ongoing issues. You’ll use these key
                  concepts in your daily life to speed up your workflow and keep your mental health stable.
                </div>
                <div className="mt-6 prose dark:prose-dark prose-lg space-y-2 dark:text-devConceptsWhite">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Solid overview of software design</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Explore design principles</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Learn key design patterns</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a className="no-underline!" href={volume04.gumroadShortUrl} rel="noopener">
                    <span className="button-dark-bg">Pre-order: {volume04.price}</span>
                  </a>
                </div>
                <div className="mt-2 text-center">
                  <Link href={`/table-of-contents/#${volume04.tocAnchor}`}>
                    <span className="prose dark:prose-dark underline hover:cursor-pointer">Chapter breakdown</span>
                  </Link>
                </div>
              </footer>
            </div>
            {/* ------------------------------ VOLUME 04 END ------------------------------ */}

            {/* ------------------------------ VOLUME 05 START ------------------------------ */}
            <div id="volume-05" className="homepage-elevated-box large-book-card">
              <div className="flex-grow-0 flex-shrink-0">
                <Image
                  alt={volume05.coverDescription}
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts05Cover3D - small - tinypng.png"
                  className="rounded-lg"
                />
              </div>
              <footer>
                <div className="book-card-title">Volume 5</div>
                <div className="book-card-subtitle">{volume05.name}</div>
                <div className="book-card-description">
                  An introduction to how computers and Operating Systems (OSes) work. Discover what CPUs, memory, file systems, files,
                  processes, scheduling, and more, are all about.
                </div>
                <div className="mt-6 prose dark:prose-dark prose-lg space-y-2 dark:text-devConceptsWhite">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Understand how computers work</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Learn about operating systems</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Boost your productivity as a developer</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a className="no-underline!" href={volume05.gumroadShortUrl} rel="noopener">
                    <span className="button-dark-bg">Pre-order: {volume05.price}</span>
                  </a>
                </div>
                <div className="mt-2 text-center">
                  <Link href={`/table-of-contents/#${volume05.tocAnchor}`}>
                    <span className="prose dark:prose-dark underline hover:cursor-pointer">Chapter breakdown</span>
                  </Link>
                </div>
              </footer>
            </div>
            {/* ------------------------------ VOLUME 05 END ------------------------------ */}

            {/* ------------------------------ VOLUME 06 START ------------------------------ */}
            <div id="volume-06" className="homepage-elevated-box large-book-card">
              <div className="flex-grow-0 flex-shrink-0">
                <Image
                  alt={volume06.coverDescription}
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts06Cover3D - small - tinypng.png"
                  className="rounded-lg"
                />
              </div>
              <footer>
                <div className="book-card-title">Volume 6</div>
                <div className="book-card-subtitle">{volume06.name}</div>
                <div className="book-card-description">
                  Get a clear overview of the coding concepts that you will use in almost every piece of software you touch. Fundamentals,
                  while they sound boring, can save you hundreds of hours debugging or finding workarounds.
                </div>
                <div className="mt-6 prose dark:prose-dark prose-lg space-y-2 dark:text-devConceptsWhite">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Get started with programming</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Learn core programming concepts</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Understand programming paradigms</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a className="no-underline!" href={volume06.gumroadShortUrl} rel="noopener">
                    <span className="button-dark-bg">Pre-order: {volume06.price}</span>
                  </a>
                </div>
                <div className="mt-2 text-center">
                  <Link href={`/table-of-contents/#${volume06.tocAnchor}`}>
                    <span className="prose dark:prose-dark underline hover:cursor-pointer">Chapter breakdown</span>
                  </Link>
                </div>
              </footer>
            </div>
            {/* ------------------------------ VOLUME 06 END ------------------------------ */}

            {/* ------------------------------ VOLUME 07 START ------------------------------ */}
            <div id="volume-07" className="homepage-elevated-box large-book-card">
              <div className="flex-grow-0 flex-shrink-0">
                <Image
                  alt={volume07.coverDescription}
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts07Cover3D - small - tinypng.png"
                  className="rounded-lg"
                />
              </div>
              <footer>
                <div className="book-card-title">Volume 7</div>
                <div className="book-card-subtitle">{volume07.name}</div>
                <div className="book-card-description">
                  A rock-solid understanding of what truly needs to get done to keep everything running smoothly. Learn how to write
                  world-class code, discover source code management workflows and how to manage applications in production like a
                  professional.
                </div>
                <div className="mt-6 prose dark:prose-dark prose-lg space-y-2 dark:text-devConceptsWhite">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Learn all the best practices</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">How to write great quality code</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Source code management workflows</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a className="no-underline!" href={volume07.gumroadShortUrl} rel="noopener">
                    <span className="button-dark-bg">Pre-order: {volume07.price}</span>
                  </a>
                </div>
                <div className="mt-2 text-center">
                  <Link href={`/table-of-contents/#${volume07.tocAnchor}`}>
                    <span className="prose dark:prose-dark underline hover:cursor-pointer">Chapter breakdown</span>
                  </Link>
                </div>
              </footer>
            </div>
            {/* ------------------------------ VOLUME 07 END ------------------------------ */}

            {/* ------------------------------ VOLUME 08 START ------------------------------ */}
            <div id="volume-08" className="homepage-elevated-box large-book-card">
              <div className="flex-grow-0 flex-shrink-0">
                <Image
                  alt={volume08.coverDescription}
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts08Cover3D - small - tinypng.png"
                  className="rounded-lg"
                />
              </div>
              <footer>
                <div className="book-card-title">Volume 8</div>
                <div className="book-card-subtitle">{volume08.name}</div>
                <div className="book-card-description">
                  Know exactly what happens in back-end development, how the layers and responsibilities fit together, security and
                  performance concerns, and how to craft software that can scale.
                </div>
                <div className="mt-6 prose dark:prose-dark prose-lg space-y-2 dark:text-devConceptsWhite">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Explore back-end development concerns</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">How to create scalable solutions</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">How to architect back-end systems</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a className="no-underline!" href={volume08.gumroadShortUrl} rel="noopener">
                    <span className="button-dark-bg">Pre-order: {volume08.price}</span>
                  </a>
                </div>
                <div className="mt-2 text-center">
                  <Link href={`/table-of-contents/#${volume08.tocAnchor}`}>
                    <span className="prose dark:prose-dark underline hover:cursor-pointer">Chapter breakdown</span>
                  </Link>
                </div>
              </footer>
            </div>
            {/* ------------------------------ VOLUME 08 END ------------------------------ */}

            {/* ------------------------------ VOLUME 09 START ------------------------------ */}
            <div id="volume-09" className="homepage-elevated-box large-book-card">
              <div className="flex-grow-0 flex-shrink-0">
                <Image
                  alt={volume09.coverDescription}
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts09Cover3D - small - tinypng.png"
                  className="rounded-lg"
                />
              </div>
              <footer>
                <div className="book-card-title">Volume 9</div>
                <div className="book-card-subtitle">{volume09.name}</div>
                <div className="book-card-description">
                  Understand the basics of front-end development, how their projects operate, components, UI design, and web design.
                  Introduces you to HTML & CSS basics for the creation of web apps and mobile apps.
                </div>
                <div className="mt-6 prose dark:prose-dark prose-lg space-y-2 dark:text-devConceptsWhite">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Explore front-end development specificities</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Learn HTML and CSS</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">How to architect front-end systems</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a className="no-underline!" href={volume09.gumroadShortUrl} rel="noopener">
                    <span className="button-dark-bg">Pre-order: {volume09.price}</span>
                  </a>
                </div>
                <div className="mt-2 text-center">
                  <Link href={`/table-of-contents/#${volume09.tocAnchor}`}>
                    <span className="prose dark:prose-dark underline hover:cursor-pointer">Chapter breakdown</span>
                  </Link>
                </div>
              </footer>
            </div>
            {/* ------------------------------ VOLUME 09 END ------------------------------ */}

            {/* ------------------------------ VOLUME 10 START ------------------------------ */}
            <div id="volume-10" className="homepage-elevated-box large-book-card">
              <div className="flex-grow-0 flex-shrink-0">
                <Image
                  alt={volume10.coverDescription}
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts10Cover3D - small - tinypng.png"
                  className="rounded-lg"
                />
              </div>
              <footer>
                <div className="book-card-title">Volume 10</div>
                <div className="book-card-subtitle">{volume10.name}</div>
                <div className="book-card-description">
                  Having a good understanding of where our applications are hosted, how the environment is configured, secured, monitored,
                  etc is super valuable and makes the difference between someone who “just” writes code and someone who contributes to
                  developing end-to-end solutions.
                </div>
                <div className="mt-6 prose dark:prose-dark prose-lg space-y-2 dark:text-devConceptsWhite">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">IT Infrastructure overview</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Introduction to cloud computing</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Understand DevOps</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a className="no-underline!" href={volume10.gumroadShortUrl} rel="noopener">
                    <span className="button-dark-bg">Pre-order: {volume10.price}</span>
                  </a>
                </div>
                <div className="mt-2 text-center">
                  <Link href={`/table-of-contents/#${volume10.tocAnchor}`}>
                    <span className="prose dark:prose-dark underline hover:cursor-pointer">Chapter breakdown</span>
                  </Link>
                </div>
              </footer>
            </div>
            {/* ------------------------------ VOLUME 10 END ------------------------------ */}

            {/* ------------------------------ VOLUME 11 START ------------------------------ */}
            <div id="volume-11" className="homepage-elevated-box large-book-card">
              <div className="flex-grow-0 flex-shrink-0">
                <Image
                  alt={volume11.coverDescription}
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts11Cover3D - small - tinypng.png"
                  className="rounded-lg"
                />
              </div>
              <footer>
                <div className="book-card-title">Volume 11</div>
                <div className="book-card-subtitle">{volume11.name}</div>
                <div className="book-card-description">
                  20 years ago, things were less complicated, but now, if an insecure system goes online for just a few seconds; it can get
                  hacked. Learn about the most important IT security concepts and make sure you understand enough to cover the basics in any
                  system you work on.
                </div>
                <div className="mt-6 prose dark:prose-dark prose-lg space-y-2 dark:text-devConceptsWhite">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Overview of security concepts</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Secure coding and DevSecOps</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Cryptography and secure communications</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a className="no-underline!" href={volume11.gumroadShortUrl} rel="noopener">
                    <span className="button-dark-bg">Pre-order: {volume11.price}</span>
                  </a>
                </div>
                <div className="mt-2 text-center">
                  <Link href={`/table-of-contents/#${volume11.tocAnchor}`}>
                    <span className="prose dark:prose-dark underline hover:cursor-pointer">Chapter breakdown</span>
                  </Link>
                </div>
              </footer>
            </div>
            {/* ------------------------------ VOLUME 11 END ------------------------------ */}

            {/* ------------------------------ VOLUME 12 START ------------------------------ */}
            <div id="volume-12" className="homepage-elevated-box large-book-card">
              <div className="flex-grow-0 flex-shrink-0">
                <Image
                  alt={volume12.coverDescription}
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts12Cover3D - small - tinypng.png"
                  className="rounded-lg"
                />
              </div>
              <footer>
                <div className="book-card-title">Volume 12</div>
                <div className="book-card-subtitle">{volume12.name}</div>
                <div className="book-card-description">
                  Get the skills you need to lead projects, teams, and manage products. Explore product management, discover how to maintain
                  a product backlog. Discover modern project management and how to become a great team leader.
                </div>
                <div className="mt-6 prose dark:prose-dark prose-lg space-y-2 dark:text-devConceptsWhite">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Master product and project management</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Become a great team leader</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center">
                      <AiFillRightCircle className="text-3xl" />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="">Help your team succeed</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a className="no-underline!" href={volume12.gumroadShortUrl} rel="noopener">
                    <span className="button-dark-bg">Pre-order: {volume12.price}</span>
                  </a>
                </div>
                <div className="mt-2 text-center">
                  <Link href={`/table-of-contents/#${volume12.tocAnchor}`}>
                    <span className="prose dark:prose-dark underline hover:cursor-pointer">Chapter breakdown</span>
                  </Link>
                </div>
              </footer>
            </div>
            {/* ------------------------------ VOLUME 12 END ------------------------------ */}
          </div>
        </div>

        <section className="min-w-full flex flex-row justify-center">
          <NewsletterSubscribe />
        </section>
      </article>
    </Layout>
  );
};

export default VolumeSummariesPage;
