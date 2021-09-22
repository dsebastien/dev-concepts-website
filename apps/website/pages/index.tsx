import React from 'react';
import Layout from '@/layouts/layout';
import tw from "twin.macro";
import NewsletterSubscribe from "@/components/newsletter-subscribe";
import Image from "next/image";
import {GiStoneCrafting} from "react-icons/gi";
import {RiUserHeartLine} from "react-icons/ri";
import {AiFillRightCircle} from "react-icons/ai";

const StyledDiv = tw.div``;

const IndexPage = () => {
  return (
    <Layout>
      <StyledDiv className="homepage-content-wrapper space-y-32">
        <div className="hero grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          <div className="hero-details">
            <div className="">
              <span className="text-xl">DEV CONCEPTS COLLECTION</span>
            </div>
            <div className="mt-2">
              <span className="hero-text">Your guide to the fundamentals of Software Development</span>
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
              width={1076}
              height={778}
              src="/static/images/devConcepts/DevConceptsHardCover tinypng.png"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="core-agitation grid grid-cols-1 place-items-center homepage-elevated-box">
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

        <div className="solution-intro grid grid-cols-1 md:grid-cols-2 gap-12 justify-between">
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
          className="solution-volumes min-w-full w-full solution-overview grid grid-cols-1 place-items-center homepage-elevated-box">
          <div className="min-w-full">
            <div className="flex flex-row justify-center">
              <h3 className="max-w-xl text-center">Each volume is packed full of detailed definitions, pros/cons, tips,
                and real-world lessons</h3>
            </div>
            <div
              className="mt-6 min-w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 place-items-center">
              <a href="https://gumroad.com/l/lnPaD" rel="noopener">
                <div className="homepage-elevated-box-on-hover book-card">
                  <div><GiStoneCrafting/></div>
                  <footer>
                    <div className="book-card-title">Volume 1</div>
                    <div className="book-card-subtitle">Software Craft</div>
                  </footer>
                </div>
              </a>
              <a href="https://gumroad.com/l/aQRvz" rel="noopener">
                <div className="homepage-elevated-box-on-hover book-card">
                  <div><RiUserHeartLine/></div>
                  <footer>
                    <div className="book-card-title">Volume 2</div>
                    <div className="book-card-subtitle">What Clients Need</div>
                  </footer>
                </div>
              </a>
              <div className="homepage-elevated-box-on-hover book-card book-card-coming-soon">
                <div><span className="text-4xl word-wrap font-semibold text-center">Coming soon</span></div>
                <footer>
                  <div className="book-card-title">Volume 3</div>
                  <div className="book-card-subtitle">Architecture</div>
                </footer>
              </div>
              <div className="homepage-elevated-box-on-hover book-card book-card-coming-soon">
                <div><span className="text-4xl word-wrap font-semibold text-center">Coming soon</span></div>
                <footer>
                  <div className="book-card-title">Volume 4</div>
                  <div className="book-card-subtitle">Software Design</div>
                </footer>
              </div>
              <div className="homepage-elevated-box-on-hover book-card book-card-coming-soon">
                <div><span className="text-4xl word-wrap font-semibold text-center">Coming soon</span></div>
                <footer>
                  <div className="book-card-title">Volume 5</div>
                  <div className="book-card-subtitle">Computer architecture and OS basics</div>
                </footer>
              </div>
              <div className="homepage-elevated-box-on-hover book-card book-card-coming-soon">
                <div><span className="text-4xl word-wrap font-semibold text-center">Coming soon</span></div>
                <footer>
                  <div className="book-card-title">Volume 6</div>
                  <div className="book-card-subtitle">Coding basics</div>
                </footer>
              </div>
              <div className="homepage-elevated-box-on-hover book-card book-card-coming-soon">
                <div><span className="text-4xl word-wrap font-semibold text-center">Coming soon</span></div>
                <footer>
                  <div className="book-card-title">Volume 7</div>
                  <div className="book-card-subtitle">Best practices</div>
                </footer>
              </div>
              <div className="homepage-elevated-box-on-hover book-card book-card-coming-soon">
                <div><span className="text-4xl word-wrap font-semibold text-center">Coming soon</span></div>
                <footer>
                  <div className="book-card-title">Volume 8</div>
                  <div className="book-card-subtitle">Back-end development</div>
                </footer>
              </div>
              <div className="homepage-elevated-box-on-hover book-card book-card-coming-soon">
                <div><span className="text-4xl word-wrap font-semibold text-center">Coming soon</span></div>
                <footer>
                  <div className="book-card-title">Volume 9</div>
                  <div className="book-card-subtitle">Front-end development</div>
                </footer>
              </div>
              <div className="homepage-elevated-box-on-hover book-card book-card-coming-soon">
                <div><span className="text-4xl word-wrap font-semibold text-center">Coming soon</span></div>
                <footer>
                  <div className="book-card-title">Volume 10</div>
                  <div className="book-card-subtitle">IT Infrastructure</div>
                </footer>
              </div>
              <div className="homepage-elevated-box-on-hover book-card book-card-coming-soon">
                <div><span className="text-4xl word-wrap font-semibold text-center">Coming soon</span></div>
                <footer>
                  <div className="book-card-title">Volume 11</div>
                  <div className="book-card-subtitle">Security</div>
                </footer>
              </div>
              <div className="homepage-elevated-box-on-hover book-card book-card-coming-soon">
                <div><span className="text-4xl word-wrap font-semibold text-center">Coming soon</span></div>
                <footer>
                  <div className="book-card-title">Volume 12</div>
                  <div className="book-card-subtitle">PM and SW. approaches</div>
                </footer>
              </div>
            </div>
          </div>
        </div>

        <div className="solution-mentorship grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          <div className="solution-mentorship-details">
            <div className="">
              <span className="text-xl">DIRECT ACCESS TO MENTORS</span>
            </div>
            <div className="mt-2">
              <h3>Save days of endless articles and how-to guides with Slack mentorship</h3>
            </div>
            <div className="mt-6 prose dark:prose-dark prose-lg">
              <p>You wouldn’t expect an electrical engineer to walk into their role without a senior craftsman to guide
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

        <div className="solution-confidence grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
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
                the first time around. This collection is your single source roadmap to software development.</p>

              <p className="mt-2">Avoid the trap of misinformation and confidently rely on the knowledge you learn.</p>
            </div>
          </div>
        </div>


        <div className="first-cta grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center items-stretch">
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
              <div className="mt-12"><span className="button-no-hover">Buy for €12.99</span></div>
              <div className="mt-2"><span>14-day money-back guarantee</span></div>
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
              <div className="mt-12"><span className="text-xl">Save €75</span></div>
              <div className="mt-4"><span className="button-no-hover">Buy for €125</span></div>
              <div className="mt-2"><span>14-day money-back guarantee</span></div>
            </a>
          </div>
        </div>

        <div className="social-proof-author grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
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
              <p>Hi, I’m <a href="https://www.linkedin.com/in/sebastiend/" rel="noopener noreferrer">Sébastien Dubois</a>, an <a href="https://www.dsebastien.net/books" rel="noopener">author</a>, <a href="https://www.dsebastien.net/blog" rel="noopener">blogger</a>, software crafter, coach/mentor, open source contributor, CTO and founder. I've been working for <span className="italic">15 years</span> in the industry, and have explored many areas of IT. I've been a technical leader for both back-end and front-end. I've also worked as solutions architect, led large projects and teams, managed critical IT infrastructure. and founded <a href="https://developassion.be">my own company</a>.</p>
              <p>Daily, I help guide junior developers who often find themselves overwhelmed with a churn of best practices, new languages, and communication.</p>
              <p>That’s why I created the Dev Concepts collection; to help even more developers avoid feeling overwhelmed, and show you where to apply your focus for maximum productivity and efficiency. The skills and habits from each volume form the foundation of your long-term success.</p>
              <p>Join a community of software crafters who, like you, are passionate about software, personal productivity, and career advancement.</p>
            </div>
          </div>
        </div>

        <div className="social-proof-quote grid grid-cols-1 place-items-center">
          <div className="max-w-2xl">
            <span className="italic text-3xl">“I love this job, I’m doing exactly what I want, my coworkers are smart and helpful, the pay is good, and the work-life balance is fantastic”</span>
          </div>
        </div>


        {/* https://app.gumroad.com/products/TaEPM/edit */}


        <div className="mt-16 max-w-7xl flex flex-row justify-center">
          <NewsletterSubscribe/>
        </div>
      </StyledDiv>
    </Layout>
  );
};

export default IndexPage;
