import React from 'react';
import Layout from '@/layouts/layout';
import tw from "twin.macro";
import NewsletterSubscribe from "@/components/newsletter-subscribe";
import Link from 'next/link';
import Image from "next/image";
import {GiStoneCrafting} from "react-icons/gi";
import {RiUserHeartLine} from "react-icons/ri";
import {AiFillRightCircle} from "react-icons/ai";

const StyledDiv = tw.div``;

const IndexPage = () => {
  return (
    <Layout>
      <StyledDiv className="large-page-content-wrapper space-y-32">
        <div id="hero" className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
          <div className="hero-details md:col-span-2">
            <div className="">
              <span className="text-xl">DEV CONCEPTS COLLECTION</span>
            </div>
            <div className="mt-2">
              <span className="hero-text">Your guide to the fundamentals of software development</span>
            </div>
            <div className="mt-6">
              <p className="text-lg">A 12-volume collection of digital books that supports junior software developers in
                building an exceptional career.</p>
              <p className="mt-2 text-lg">Get a complete understanding of how every concept in software engineering fits
                together.</p>
            </div>
          </div>
          <div className="hero-image">
            <Image
              alt="Dev Concepts Collection"
              width={1196}
              height={1450}
              src="/static/images/devConcepts/DevConceptsHardCoverThin tinypng.png"
              className="rounded-lg"
            />
          </div>
        </div>

        <div id="core-agitation" className="grid grid-cols-1 place-items-center homepage-elevated-box">
          <div className="max-w-2xl">
            <div>
              <h3 className="max-w-2xl">What happens when someone realizes that you're out of your depth?</h3>
            </div>
            <div className="mt-6 max-w-4xl mx-auto prose dark:prose-dark prose-lg">
              <span>Your only option is to ask for help and:</span>
              <ol>
                <li>Sit blank-eyed, not understanding how their complex solution works</li>
                <li>"Get it" after annoying them with multiple questions</li>
              </ol>
              <p>Either way, every day you log off with your brain completely fried.</p>
              <p>Fact is, it's exhausting and demotivating trying to understand what you just don't know. You wind up
                feeling plain dumb with a growing mindset that it's just impossible</p>
              <p>But if it's impossible, how did others do it? What do they have that you don't?</p>
            </div>
          </div>
        </div>

        <div id="solution-intro" className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-between">
          <div className="solution-intro-details">
            <div className="mt-2">
              <h3>The mentorship you need to build a solid foundation, lead a better professional life, and show your
                true value</h3>
            </div>
            <div className="mt-6 prose dark:prose-dark prose-lg space-y-2">
              <p>Software development challenges you to constantly learn and grow. You're not some basic coder who
                churns out line after line of boring code.</p>
              <p>Developing software demands nothing less than craftsmanship.</p>
              <p>A lot of domain knowledge exists solely in your senior's head. You need someone to
                pass down the golden nuggets of experience acquired through countless hours of trial and error.</p>
            </div>
          </div>
          <div className="solution-intro-definition justify-center md:min-h-full flex flex-col homepage-elevated-box">
            <div className="text-devConceptsWhite">
              <h4>The definition of craftsmanship:</h4>
            </div>
            <div className="prose dark:prose-dark prose-xl">
              <ul>
                <li className="italic">Skill in planning, making, or executing</li>
                <li className="italic">Make or produce with care, skill, or ingenuity</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          id="solution-volumes"
          className="min-w-full w-full solution-overview grid grid-cols-1 place-items-center homepage-elevated-box">
          <div className="min-w-full">
            <div className="flex flex-row justify-center">
              <h3 className="max-w-xl text-center">Each volume is packed full of detailed definitions, pros/cons, tips,
                and real-world lessons</h3>
            </div>
            <div
              className="mt-6 min-w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 place-items-center">
              <a href="https://gumroad.com/l/lnPaD" rel="noopener">
                <div className="homepage-elevated-box-on-hover book-card">
                  <div><Image
                    alt="Dev Concepts Volume 1"
                    width={500}
                    height={334}
                    src="/static/images/devConcepts/DevConcepts01Cover3D - tinypng.png"
                    className="rounded-lg"
                  /></div>
                  <footer>
                    <div className="book-card-title">Volume 1</div>
                    <div className="book-card-subtitle">Software Craft</div>
                  </footer>
                </div>
              </a>
              <a href="https://gumroad.com/l/aQRvz" rel="noopener">
                <div className="homepage-elevated-box-on-hover book-card">
                  <div><Image
                    alt="Dev Concepts Volume 2"
                    width={500}
                    height={334}
                    src="/static/images/devConcepts/DevConcepts02Cover3D - tinypng.png"
                    className="rounded-lg"
                  /></div>
                  <footer>
                    <div className="book-card-title">Volume 2</div>
                    <div className="book-card-subtitle">What Clients Need</div>
                  </footer>
                </div>
              </a>
              <div className="homepage-elevated-box-on-hover book-card book-card-coming-soon">
                <div><Image
                  alt="Dev Concepts Volume 3"
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts03Cover3D - tinypng.png"
                  className="rounded-lg"
                />
                </div>
                <footer>
                  <div className="book-card-title">Volume 3</div>
                  <div className="book-card-subtitle">Architecture</div>
                  <div className="book-card-coming-soon-text"><span className="text-xl word-wrap font-semibold text-center">Coming soon</span></div>
                </footer>
              </div>
              <div className="homepage-elevated-box-on-hover book-card book-card-coming-soon">
                <div><Image
                  alt="Dev Concepts Volume 4"
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts04Cover3D - tinypng.png"
                  className="rounded-lg"
                /></div>
                <footer>
                  <div className="book-card-title">Volume 4</div>
                  <div className="book-card-subtitle">Software design</div>
                  <div className="book-card-coming-soon-text"><span className="text-xl word-wrap font-semibold text-center">Coming soon</span></div>
                </footer>
              </div>
              <div className="homepage-elevated-box-on-hover book-card book-card-coming-soon">
                <div><Image
                  alt="Dev Concepts Volume 5"
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts05Cover3D - tinypng.png"
                  className="rounded-lg"
                /></div>
                <footer>
                  <div className="book-card-title">Volume 5</div>
                  <div className="book-card-subtitle">Computer architecture and OS basics</div>
                  <div className="book-card-coming-soon-text"><span className="text-xl word-wrap font-semibold text-center">Coming soon</span></div>
                </footer>
              </div>
              <div className="homepage-elevated-box-on-hover book-card book-card-coming-soon">
                <div><Image
                  alt="Dev Concepts Volume 6"
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts06Cover3D - tinypng.png"
                  className="rounded-lg"
                /></div>
                <footer>
                  <div className="book-card-title">Volume 6</div>
                  <div className="book-card-subtitle">Coding basics</div>
                  <div className="book-card-coming-soon-text"><span className="text-xl word-wrap font-semibold text-center">Coming soon</span></div>
                </footer>
              </div>
              <div className="homepage-elevated-box-on-hover book-card book-card-coming-soon">
                <div><Image
                  alt="Dev Concepts Volume 7"
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts07Cover3D - tinypng.png"
                  className="rounded-lg"
                /></div>
                <footer>
                  <div className="book-card-title">Volume 7</div>
                  <div className="book-card-subtitle">Best practices</div>
                  <div className="book-card-coming-soon-text"><span className="text-xl word-wrap font-semibold text-center">Coming soon</span></div>
                </footer>
              </div>
              <div className="homepage-elevated-box-on-hover book-card book-card-coming-soon">
                <div><Image
                  alt="Dev Concepts Volume 8"
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts08Cover3D - tinypng.png"
                  className="rounded-lg"
                /></div>
                <footer>
                  <div className="book-card-title">Volume 8</div>
                  <div className="book-card-subtitle">Back-end development</div>
                  <div className="book-card-coming-soon-text"><span className="text-xl word-wrap font-semibold text-center">Coming soon</span></div>
                </footer>
              </div>
              <div className="homepage-elevated-box-on-hover book-card book-card-coming-soon">
                <div><Image
                  alt="Dev Concepts Volume 9"
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts09Cover3D - tinypng.png"
                  className="rounded-lg"
                /></div>
                <footer>
                  <div className="book-card-title">Volume 9</div>
                  <div className="book-card-subtitle">Front-end development</div>
                  <div className="book-card-coming-soon-text"><span className="text-xl word-wrap font-semibold text-center">Coming soon</span></div>
                </footer>
              </div>
              <div className="homepage-elevated-box-on-hover book-card book-card-coming-soon">
                <div><Image
                  alt="Dev Concepts Volume 10"
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts10Cover3D - tinypng.png"
                  className="rounded-lg"
                /></div>
                <footer>
                  <div className="book-card-title">Volume 10</div>
                  <div className="book-card-subtitle">IT Infrastructure</div>
                  <div className="book-card-coming-soon-text"><span className="text-xl word-wrap font-semibold text-center">Coming soon</span></div>
                </footer>
              </div>
              <div className="homepage-elevated-box-on-hover book-card book-card-coming-soon">
                <div><Image
                  alt="Dev Concepts Volume 11"
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts11Cover3D - tinypng.png"
                  className="rounded-lg"
                /></div>
                <footer>
                  <div className="book-card-title">Volume 11</div>
                  <div className="book-card-subtitle">Security</div>
                  <div className="book-card-coming-soon-text"><span className="text-xl word-wrap font-semibold text-center">Coming soon</span></div>
                </footer>
              </div>
              <div className="homepage-elevated-box-on-hover book-card book-card-coming-soon">
                <div><Image
                  alt="Dev Concepts Volume 12"
                  width={500}
                  height={334}
                  src="/static/images/devConcepts/DevConcepts12Cover3D - tinypng.png"
                  className="rounded-lg"
                /></div>
                <footer>
                  <div className="book-card-title">Volume 12</div>
                  <div className="book-card-subtitle">PM and SW. approaches</div>
                  <div className="book-card-coming-soon-text"><span className="text-xl word-wrap font-semibold text-center">Coming soon</span></div>
                </footer>
              </div>
            </div>
          </div>
        </div>

        <div id="solution-focus" className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          <div className="solution-focus-image">
            <Image
              alt="Picture courtesy of Nicolás Flor: https://unsplash.com/@nicolasflorr"
              width={1740}
              height={1160}
              src="/static/images/concentration.jpg"
              className="rounded-lg"
            />
          </div>
          <div className="solution-focus-details">
            <div className="">
              <h3>Find out what deserves your concentration with the Dev Concepts Collection</h3>
            </div>
            <div className="mt-6 prose dark:prose-dark prose-lg">
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-row items-center"><AiFillRightCircle className="text-3xl"/></div>
                <div className="flex flex-row items-center"><span className="">Know that you're choosing the best solution even when there are countless approaches.</span>
                </div>
              </div>

              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-row items-center"><AiFillRightCircle className="text-3xl"/></div>
                <div className="flex flex-row items-center"><span className="">Understand the entire development process so you don't make project-destroying mistakes.</span>
                </div>
              </div>

              <div className="mt-2 flex flex-row items-center gap-2">
                <div className="flex flex-row items-center"><AiFillRightCircle className="text-3xl"/></div>
                <div className="flex flex-row items-center"><span className="">Level up your game so team members, clients, and managers listen to your ideas.</span>
                </div>
              </div>

              <div className="mt-2 flex flex-row items-center gap-2">
                <div className="flex flex-row items-center"><AiFillRightCircle className="text-3xl"/></div>
                <div className="flex flex-row items-center"><span className="">Set yourself up for high-paying positions with a rock-solid grasp of all the moving parts and how they connect.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="solution-mentorship" className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          <div className="solution-mentorship-details">
            <div className="">
              <span className="text-xl">DIRECT ACCESS TO MENTORS</span>
            </div>
            <div className="mt-2">
              <h3>Save days of endless articles and how-to guides with Slack mentorship</h3>
            </div>
            <div className="mt-6 prose dark:prose-dark prose-lg">
              <p>You wouldn't expect an electrical engineer to walk into their role without a senior craftsman to guide
                them. You deserve access to the guidance of experienced mentors.</p>

              <div className="mt-2 flex flex-row items-center gap-2">
                <div className="flex flex-row items-center"><AiFillRightCircle className="text-3xl"/></div>
                <div className="flex flex-row items-center"><span className="">Experienced developers will answer your questions directly.</span>
                </div>
              </div>

              <div className="mt-2 flex flex-row items-center gap-2">
                <div className="flex flex-row items-center"><AiFillRightCircle className="text-3xl"/></div>
                <div className="flex flex-row items-center"><span className="">Get career guidance for practical problem solving and soft skills.</span>
                </div>
              </div>

              <div className="mt-2 flex flex-row items-center gap-2">
                <div className="flex flex-row items-center"><AiFillRightCircle className="text-3xl"/></div>
                <div className="flex flex-row items-center"><span className="">Engage with the community to build friendships and connections with like-minded developers.</span>
                </div>
              </div>

            </div>
          </div>
          <div className="solution-mentorship-image">
            <Image
              alt="Picture courtesy of Chang Duong: https://unsplash.com/@iamchang"
              width={1700}
              height={1133}
              src="/static/images/community.png"
              className="rounded-lg"
            />
          </div>
        </div>

        <div id="solution-confidence" className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          <div className="solution-confidence-image">
            <Image
              alt="Picture courtesy of Jonathan Klok: https://unsplash.com/@mostly_brave"
              width={1700}
              height={1133}
              src="/static/images/confidence.jpg"
              className="rounded-lg"
            />
          </div>
          <div className="solution-confidence-details">
            <div className="">
              <span className="text-xl">UNDERSTAND THE INDUSTRY</span>
            </div>
            <div className="mt-2">
              <h3>Know what’s happening at every step. Proceed with confidence.</h3>
            </div>
            <div className="mt-6 prose dark:prose-dark prose-lg">
              <p>Instead of trying to collect information from multiple sources and online ‘gurus’, get the correct info
                the first time around. This collection is your single source roadmap to software development and IT.</p>

              <p className="mt-2">Avoid the trap of misinformation and confidently rely on the knowledge you learn.</p>

              <p className="mt-2">Learn about concepts, abstractions, create solid mental models then keep exploring the
                hundreds of provided resources to fill your knowledge gaps.</p>
            </div>
          </div>
        </div>

        <div id="first-cta" className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center items-stretch">
          <div className="first-cta-starter-bundle text-center homepage-elevated-box-on-hover">
            <a href="https://gumroad.com/l/AwJYP" rel="noopener">
              <div>
                <h3>Starter Edition</h3>
              </div>
              <div className="mt-2">
                <h5 className="max-w-sm">Download the first two volumes in the collection</h5>
              </div>
              <div className="mt-16 list-none!">
                <ul className="font-semibold space-y-2">
                  <li className="prose dark:prose-dark prose-lg">Volume 1: Software Craft</li>
                  <li className="prose dark:prose-dark prose-lg">Volume 2: What Clients Need</li>
                  <li className="prose dark:prose-dark prose-lg">Lifetime Slack Community Access</li>
                </ul>
              </div>
              <div className="mt-12"><span className="button-no-hover">Buy for €14.99</span></div>
              <div className="mt-2"><span className="prose dark:prose-dark">14-day money-back guarantee</span></div>
            </a>
          </div>
          <div className="first-cta-lifetime-collection-access text-center homepage-elevated-box-on-hover">
            <a href="https://gumroad.com/l/TaEPM" rel="noopener">
              <div>
                <h3>Lifetime Collection Access</h3>
              </div>
              <div className="mt-2">
                <h5 className="max-w-sm">Published volumes plus all future releases</h5>
              </div>
              <div className="mt-16 list-none!">
                <ul className="font-semibold space-y-2">
                  <li className="prose dark:prose-dark prose-lg">All 12 Volumes</li>
                  <li className="prose dark:prose-dark prose-lg">Lifetime Slack Community Access</li>
                  <li className="prose dark:prose-dark prose-lg">BONUS: 30-minute live career coaching session</li>
                </ul>
              </div>
              <div className="mt-12"><span className="prose dark:prose-dark prose-xl">Save €75</span></div>
              <div className="mt-4"><span className="button-no-hover">Buy for €125</span></div>
              <div className="mt-2"><span className="prose dark:prose-dark">14-day money-back guarantee</span></div>
            </a>
          </div>
        </div>

        <div id="social-proof" className="author grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          <div className="solution-proof-author-picture">
            <Image
              alt="Sébastien Dubois, the author"
              width={528}
              height={635}
              src="/static/images/sebastien.png"
              className="rounded-lg"
            />
          </div>
          <div className="social-proof-author-details">
            <div className="">
              <span className="text-xl">A UNIQUE PERSPECTIVE</span>
            </div>
            <div className="mt-2">
              <h3>Practices, strategies, and practical examples that last your entire career</h3>
            </div>
            <div className="mt-6 prose dark:prose-dark prose-lg space-y-2">
              <p>Hi, I’m <a href="https://www.linkedin.com/in/sebastiend/" rel="noopener noreferrer">Sébastien
                Dubois</a>, an <a href="https://www.dsebastien.net/books" rel="noopener">author</a>, <a
                href="https://www.dsebastien.net/blog" rel="noopener">blogger</a>, software crafter, coach/mentor, open
                source contributor, CTO and founder. I've been working for <span className="italic">15 years</span> in
                the industry, and have explored many areas of IT. I've been a technical leader for both back-end and
                front-end. I've also worked as solutions architect, led large projects and teams, managed critical IT
                infrastructure. and founded <a href="https://developassion.be">my own company</a>.</p>
              <p>Daily, I help junior developers who often find themselves overwhelmed with a churn of programming
                languages, frameworks, libraries and tools.</p>
              <p>That’s why I created the Dev Concepts collection; to help even more developers avoid feeling
                overwhelmed, and show you where to apply your focus for maximum productivity and efficiency. The skills
                and habits from each volume form the foundation of your long-term success.</p>
              <p>Join a community of software crafters who, like you, are passionate about software, personal
                productivity, and career advancement.</p>
            </div>
          </div>
        </div>

        <div id="social-proof-quote" className="grid grid-cols-1 place-items-center">
          <div className="max-w-2xl">
            <span className="italic text-3xl">“I love this job, I’m doing exactly what I want, my coworkers are smart and helpful, the pay is good, and the work-life balance is fantastic”</span>
          </div>
        </div>

        <div id="solution-long-term-outcomes-vs-short-term-benefits"
             className="grid grid-cols-1 place-items-center homepage-elevated-box">
          <div className="">
            <div className="flex flex-row items-center justify-center">
              <h3 className="max-w-2xl text-center">Yes, it’s possible for you to enjoy a great job, and great life. The
                skills you need can be learned.</h3>
            </div>
            <div className="mt-6 flex flex-row items-center justify-center">
              <h5 className="max-w-2xl italic">Here’s what the Dev Concepts Collection will help you achieve.</h5>
            </div>
            <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <div><h3>Get your first job offers</h3></div>
                <div className="prose dark:prose-dark prose-lg">Maybe you’re just starting out. Maybe you’ve been
                  hunting for months. Wherever you are , the Dev Concepts collection will give you the skills you need
                  to put you ahead of other applicants.
                </div>
              </div>
              <div>
                <div><h3>Land your dream position</h3></div>
                <div className="prose dark:prose-dark prose-lg">Being a good developer isn’t just about skill, it’s also
                  about passion and experience. Use a strong foundation to build software that delights end users.
                </div>
              </div>
              <div>
                <div><h3>Start the path to a senior position</h3></div>
                <div className="prose dark:prose-dark prose-lg">Startup culture often means that you’re thrown out of
                  your depth with no one to guide you in best practices. Dev Concepts puts you on the right path.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="faq" className="grid grid-cols-1 place-items-center"> {/* homepage-elevated-box */}
          <div className="min-w-full">
            <div className="flex flex-row items-center justify-center">
              <h3 className="max-w-2xl text-center">Frequently asked questions</h3>
            </div>
            <div className="mt-12 mx-auto grid grid-cols-1 md:grid-cols-1 gap-x-12 gap-y-4">
              <details className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 cursor-pointer">
                <summary className="font-semibold text-lg dark:text-devConceptsWhite">
                  I’m unmotivated and frustrated because of a lack of progress — not laziness. Is this going to fix
                  that?
                </summary>

                <span className="prose dark:prose-dark prose-lg dark:text-devConceptsWhite">
                  A book isn’t going to magically fix your career, but it will give you the mindset you need to succeed in software development.
                </span>
              </details>

              <details className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 cursor-pointer">
                <summary className="font-semibold text-lg dark:text-devConceptsWhite">
                  I don’t have time to read an entire book... let alone a collection! Can I still learn something here?
                </summary>

                <span className="prose dark:prose-dark prose-lg dark:text-devConceptsWhite">
                  Yes! While it’s recommended that you do a quick read-through, the volumes and chapters are designed to stand alone. Every time you face a particular problem, you can do a quick search and find the chapter that will help you the fastest. Plus each section includes external links and resources that you will help you dive much deeper into the subject matter.
                </span>
              </details>

              <details className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 cursor-pointer">
                <summary className="font-semibold text-lg dark:text-devConceptsWhite">
                  Will this collection teach me the technical side of engineering?
                </summary>

                <span className="prose dark:prose-dark prose-lg dark:text-devConceptsWhite">
                  Dev Concept includes many practical examples and code snippets, but it isn't a replacement for hands-on training. Most of the concepts are presented in isolation to facilitate comprehension.
                </span>
              </details>

              <details className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 cursor-pointer">
                <summary className="font-semibold text-lg dark:text-devConceptsWhite">
                  How does the Slack group work?
                </summary>

                <span className="prose dark:prose-dark prose-lg dark:text-devConceptsWhite">
                  The Slack community is where you can send questions about all aspects of software engineering and IT. Your questions will always be answered by a senior engineer.  You can ask questions about technical issues, conceptual ones, or even about how to deal with work challenges. We’re a friendly community that’s excited to welcome you!
                </span>
              </details>

              <details className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 cursor-pointer">
                <summary className="font-semibold text-lg dark:text-devConceptsWhite">
                  What if I don’t like the collection? How does the money-back guarantee work?
                </summary>

                <span className="prose dark:prose-dark prose-lg dark:text-devConceptsWhite">
                  If you're not satisfied with the content, then contact me within 14 days and you'll get a full refund. The only thing I'll ask is to understand what did not meet your expectations.
                </span>
              </details>

              <details className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 cursor-pointer">
                <summary className="font-semibold text-lg dark:text-devConceptsWhite">
                  Why are only some of the volumes available right now?
                </summary>

                <span className="prose dark:prose-dark prose-lg dark:text-devConceptsWhite">
                  Dev Concepts is a <span className="italic">huge</span> project. I will release a new volume every few months. If you purchase the lifetime plan, you will get immediate access as soon as it’s published. In addition, the content will be updated regularly to remain relevant and up to date.
                </span>
              </details>

              <details className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 cursor-pointer">
                <summary className="font-semibold text-lg dark:text-devConceptsWhite">
                  I don’t understand what’s in each volume
                </summary>

                <span className="prose dark:prose-dark prose-lg dark:text-devConceptsWhite">
                  Check out <Link href="volumes">the full chapter breakdown for each volume</Link>. You can also free samples volume 1 <a
                  href="https://dsebastien.net/blog" rel="noopener">here</a>.
                </span>
              </details>

              <details className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 cursor-pointer">
                <summary className="font-semibold text-lg dark:text-devConceptsWhite">
                  I’m not so sure about the standard edition... Can I buy just a single volume instead?
                </summary>

                <span className="prose dark:prose-dark prose-lg dark:text-devConceptsWhite">
                  You can <a href="#solution-volumes">buy each volume separately</a>. That being said, I recommend the Lifetime Collection Bundle to save €75.
                </span>
              </details>

              <details className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 cursor-pointer">
                <summary className="font-semibold text-lg dark:text-devConceptsWhite">
                  I can't afford to buy this...
                </summary>

                <span className="prose dark:prose-dark prose-lg dark:text-devConceptsWhite">
                  Contact me through <a href="https://twitter.com/dsebastien" rel="noopener">Twitter</a> or by <a
                  href="mailto:sebastien@developassion.be" rel="noopener">mail</a>, and we'll figure something out.
                </span>
              </details>

              <details className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 cursor-pointer">
                <summary className="font-semibold text-lg dark:text-devConceptsWhite">
                  I want to buy Dev Concepts for a group at work
                </summary>

                <span className="prose dark:prose-dark prose-lg dark:text-devConceptsWhite">
                  No problem! You just need to buy a group license. Contact me through <a
                  href="https://twitter.com/dsebastien" rel="noopener">Twitter</a> or by <a
                  href="mailto:sebastien@developassion.be" rel="noopener">mail</a> for more information.
                </span>
              </details>
            </div>
          </div>
        </div>

        <div id="social-proof-message" className="grid grid-cols-1 place-items-center">
          <div className="max-w-2xl">
            <span className="text-3xl font-semibold">Going from studying to the actual real-world environment? Switching to a different role? No problem.</span>
          </div>
        </div>

        <div id="main-cta" className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center items-stretch">
          <div className="main-cta-starter-bundle homepage-elevated-box-on-hover">
            <a href="https://gumroad.com/l/AwJYP" rel="noopener">
              <div>
                <h3 className="text-center">Starter Edition</h3>
              </div>
              <div className="mt-2 flex flex-row text-center justify-center">
                <h5 className="">Download the first two volumes in the collection</h5>
              </div>
              <div className="mt-12 list-none!">
                <ul className="space-y-4">
                  <li className="prose dark:prose-dark prose-lg">
                    <div className="font-semibold">Volume 1: Software Craft</div>
                    <div>How to develop a craftsmanship attitude that helps you solve real-world problems.</div>
                  </li>
                  <li className="prose dark:prose-dark prose-lg">
                    <div className="font-semibold">Volume 2: What Clients Need</div>
                    <div>Understand a client’s functional needs, and how you can decode end-user goals. Make sure your software is always solving the right problems.</div>
                  </li>
                  <li className="prose dark:prose-dark prose-lg">
                    <div className="font-semibold">Lifetime Slack Community Access</div>
                    <div>Get answers to your development questions, build a network of like-minded software crafters & learn with mentorship from a senior developer.</div>
                  </li>
                </ul>
              </div>
              <div className="mt-12"><span className="button-no-hover">Buy for €14.99</span></div>
              <div className="mt-2 text-center"><span className="prose dark:prose-dark">14-day money-back guarantee</span></div>
            </a>
          </div>

          <div className="main-cta-lifetime-collection-access homepage-elevated-box-on-hover">
            <a href="https://gumroad.com/l/TaEPM" rel="noopener">
              <div>
                <h3 className="text-center">Lifetime Collection Access</h3>
              </div>
              <div className="mt-2 flex flex-row text-center justify-center">
                <h5 className="">Published volumes plus all future releases</h5>
              </div>
              <div className="mt-12 list-none!">
                <ul className="space-y-4 ">
                  <li className="prose dark:prose-dark prose-lg">
                    <div className="font-semibold">All 12 Volumes</div>
                    <div>All currently published volumes plus all the future releases covering: IT architecture, Software design, Computer architecture & OS basics, Coding Basics, General concerns & Best practices, Back-end, Front-end, IT Infrastructure, Security, Project management & Software development approaches.</div>
                  </li>
                  <li className="prose dark:prose-dark prose-lg">
                    <div className="font-semibold">Lifetime Slack Community Access</div>
                    <div>Get answers to your development questions, build a network of like-minded software crafters & learn with mentorship from a senior developer.</div>
                  </li>
                  <li className="prose dark:prose-dark prose-lg">
                    <div className="font-semibold">BONUS: 30-minute live career coaching session</div>
                    <div>Meet with Sébastien, the author and coach. Get actionable, personalized advice on job seeking, your skill development, and more.</div>
                  </li>
                </ul>
              </div>
              <div className="mt-12 text-center"><span className="prose dark:prose-dark prose-xl">Save €75</span></div>
              <div className="mt-4 text-center"><span className="button-no-hover">Buy for €125</span></div>
              <div className="mt-2 text-center"><span className="prose dark:prose-dark">14-day money-back guarantee</span></div>
            </a>
          </div>
        </div>

        <div className="mt-16 max-w-7xl flex flex-row justify-center">
          <NewsletterSubscribe/>
        </div>
      </StyledDiv>
    </Layout>
  );
};

export default IndexPage;
