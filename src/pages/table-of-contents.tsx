import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faLink, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { graphql, Link, useStaticQuery } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";

const AboutPage: React.FC<RouteComponentProps> = () => {
  const data: {
    site: {
      siteMetadata: {
        salesPageUrl: string;
      };
    };
  } = useStaticQuery(graphql`
    query TableOfContentsPageQuery {
      site {
        siteMetadata {
          salesPageUrl
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title="Software Development Concepts - Table of contents"
        description="Table of contents of the Software Development Concepts book"
      />

      <section className="flex flex-col md:mx-16 lg:mx-32">
        <h1>Table of contents</h1>

        <section id="top">
          <ul className="list-disc list-inside ml-2">
            <li>
              <a href="#software-craft" className="link no-underline">
                Part 1: Software craft
              </a>
            </li>
            <li>
              <a href="#what-clients-need" className="link no-underline">
                Part 2: What clients need
              </a>
            </li>
            <li>
              <a href="#architecture" className="link no-underline">
                Part 3: Architecture
              </a>
            </li>
            <li>
              <a href="#software-design" className="link no-underline">
                Part 4: Software design
              </a>
            </li>
            <li>
              <a href="#computers-and-operating-systems" className="link no-underline">
                Part 5: Computer architecture and Operating systems basics
              </a>
            </li>
            <li>
              <a href="#coding-basics" className="link no-underline">
                Part 6: Coding basics
              </a>
            </li>
            <li>
              <a href="#general-concerns" className="link no-underline">
                Part 7: General concerns
              </a>
            </li>
            <li>
              <a href="#back-end" className="link no-underline">
                Part 8: Back-end development
              </a>
            </li>

            <li>Coming soon...</li>
          </ul>
        </section>

        {/* -------------------------------------- PART 1 -------------------------------------- */}
        <section id="software-craft" className="mt-4">
          <a href="#software-craft" className="anchor">
            <h2>
              Part 1: Software craft
              <span className="anchor-icon">
                <FontAwesomeIcon icon={faLink} />
              </span>
            </h2>
          </a>
          <p>
            This part explains the different <span className="font-bold italic">skills</span> that you’ll need to acquire and improve over
            the course of your career to become a software crafter. There are no secrets and no magic; to become one. It’s mostly a question
            of work, dedication, passion, and <span className="italic">fun</span>.
          </p>
          <br />
          <p>
            This part is much less about technology than about personality traits and psychology. Even if we all start with our own
            background, strengths and weaknesses, there are things to know, tips and tricks that will guide you on the path towards becoming
            a software crafter.
          </p>
          <h4 className="mt-2">In this part:</h4>
          <ol>
            <li>Introduction</li>
            <li>What is software development</li>
            <li>What is a software crafter</li>
            <li>Important skills and practical advice</li>
          </ol>
        </section>

        {/* -------------------------------------- PART 2 -------------------------------------- */}
        <section id="what-clients-need" className="mt-4">
          <a href="#what-clients-need" className="anchor">
            <h2>
              Part 2: What clients need
              <span className="anchor-icon">
                <FontAwesomeIcon icon={faLink} />
              </span>
            </h2>
          </a>
          <p>
            All software development endeavors have one thing in common: they aim to solve real-world{" "}
            <span className="font-bold">problems</span>.
          </p>
          <br />
          <p>
            This part focuses on how to understand what clients truly need. It covers concepts such as functional & non-functional
            requirements, techniques that you can use to understand business problems and end user goals. It also covers what specifications
            are and why they matter.
          </p>
          <br />
          <p>
            These ideas are important because,{" "}
            <span className="font-bold">
              no matter how good a software developer you are, it doesn’t matter at all if you end up building something that solves the
              wrong problems.
            </span>
          </p>
          <h4 className="mt-2">In this part:</h4>
          <ol>
            <li>Introduction</li>
            <li>
              Requirements
              <ol>
                <li>Functional</li>
                <li>Non-functional</li>
                <li>Discovery process</li>
              </ol>
            </li>
            <li>User Centered Design (UCD)</li>
            <li>
              User Experience Design (UX)
              <ol>
                <ul>
                  <li>What is it</li>
                  <li>Why you should care</li>
                  <li>Concepts</li>
                  <li>Tools</li>
                </ul>
              </ol>
            </li>
            <li>
              Specifications
              <ol>
                <ul>
                  <li>Business analysis</li>
                  <li>Business rules</li>
                  <li>Ubiquitous language</li>
                  <li>Functional/Technical analysis</li>
                </ul>
              </ol>
            </li>
            <li>Minimum Viable Product (MVP)</li>
          </ol>
        </section>

        {/* -------------------------------------- PART 3 -------------------------------------- */}
        <section id="architecture" className="mt-4">
          <a href="#architecture" className="anchor">
            <h2>
              Part 3: Architecture
              <span className="anchor-icon">
                <FontAwesomeIcon icon={faLink} />
              </span>
            </h2>
          </a>
          <p>
            Once you have accumulated enough understanding about the requirements, you need to create IT solutions that efficiently solve
            the problems.
          </p>
          <br />
          <p>
            Before diving into design and code, you need to get in the shoes of an architect and devise{" "}
            <span className="italic">solutions</span>. Software crafters are not necessarily architects, but they should at least understand
            what architects do and should be able to provide useful input to them.
          </p>
          <br />
          <p>
            Sometimes, you’ll also have to play the role of the architect (e.g., in small startups) and when that happens, you need to know
            what needs to be done to avoid disasters. Here, we'll explore some key ideas about IT architecture in general and software
            architecture in particular.
          </p>
          <h4 className="mt-2">In this part:</h4>
          <ol>
            <li>
              Introduction
              <ol>
                <li>Hype cycle</li>
              </ol>
            </li>
            <li>
              Solution architecture
              <ol>
                <li>What is it about</li>
                <li>Covered domains</li>
                <li>Architecture specifications</li>
              </ol>
            </li>
            <li>
              Software architecture
              <ol>
                <li>What is it about</li>
                <li>
                  Architectural/high level design patterns
                  <ol>
                    <li>What are architectural patterns</li>
                    <li>Multi-tier architectures</li>
                    <li>Microservices vs monoliths</li>
                    <li>Cloud-native apps</li>
                    <li>Serverless & Functions as a Service (FaaS)</li>
                    <li>Command Query Responsibility Segregation (CQRS)</li>
                    <li>Event Sourcing (ES)</li>
                    <li>Event-Driven Architecture (EDA)</li>
                    <li>RDBMs vs NoSQL</li>
                    <li>Enterprise Application Integration (EAI)</li>
                    <li>Micro Front-ends</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              Information/Data architecture
              <ol>
                <li>What is it about</li>
                <li>Data modeling</li>
                <li>Data storage</li>
                <li>
                  Data integration
                  <ol>
                    <li>Extract Transform Load (ETL)</li>
                    <li>Web Services / SOA</li>
                  </ol>
                </li>
                <li>
                  Data governance
                  <ol>
                    <li>Data Quality Management</li>
                    <li>Master Data Management (MDM)</li>
                  </ol>
                </li>
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
            <li>
              Infrastructure architecture
              <ol>
                <li>What is it about</li>
                <li>Problems it tackles</li>
                <li>On-premise vs cloud vs hybrid</li>
                <li>Vendor lock-in</li>
              </ol>
            </li>
            <li>
              Security architecture
              <ol>
                <li>What is it about</li>
                <li>Problems it tackles</li>
              </ol>
            </li>
            <li>
              Enterprise architecture
              <ol>
                <li>What is it about</li>
                <li>Problems it tackles</li>
                <li>Benefits</li>
              </ol>
            </li>
          </ol>
        </section>

        {/*-------------------------------------- PART 4 -------------------------------------- */}
        <section id="software-design" className="mt-4">
          <a href="#software-design" className="anchor">
            <h2>
              Part 4: Software design
              <span className="anchor-icon">
                <FontAwesomeIcon icon={faLink} />
              </span>
            </h2>
          </a>
          <p>
            Software design is where the real action begins. Previous parts talk about much higher level concepts. Solving the wrong problem
            means game over, a bad architecture means tons of waste, and bad software design means costly maintenance. Here, we explore
            software design, explain why it is critical for mental health (seriously!) and key concepts that you’ll use on a daily basis
            during your software crafter’s career.
          </p>
          <h4 className="mt-2">In this part:</h4>
          <ol>
            <li>Introduction</li>
            <li>What software design is all about</li>
            <li>Objectives</li>
            <li>
              No big design up front (BDUF)
              <ol>
                <li>Waterfall vs agile</li>
              </ol>
            </li>
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
                <li>
                  Database design
                  <ol>
                    <li>Tables</li>
                    <li>Columns</li>
                    <li>Data types</li>
                    <li>Constraints</li>
                    <li>Data Definition Language (DDL)</li>
                  </ol>
                </li>
                <li>
                  Algorithms
                  <ol>
                    <li>Examples</li>
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
                <li>
                  Design patterns
                  <ol>
                    <li>What are design patterns</li>
                    <li>Examples</li>
                  </ol>
                </li>
                <li>Naming</li>
                <li>Choosing frameworks and libraries</li>
                <li>
                  Documentation
                  <ol>
                    <li>Why documentation is critical</li>
                    <li>Practical advice</li>
                    <li>Diagrams / Notations</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>Domain Driven Design (DDD)</li>
          </ol>
        </section>

        {/* -------------------------------------- PART 5 -------------------------------------- */}
        <section id="computers-and-operating-systems" className="mt-4">
          <a href="#computers-and-operating-systems" className="anchor">
            <h2>
              Part 5: Computer architecture and Operating systems basics
              <span className="anchor-icon">
                <FontAwesomeIcon icon={faLink} />
              </span>
            </h2>
          </a>
          <p>
            This part is dedicated to real beginners who first want to understand computers and operating systems. We all need to start
            somewhere, and this is an excellent introduction to basic principles underlying everything that we do as software crafters.
            Whether our code runs locally on our computer or somewhere in the cloud, it is always executed by a CPU (physical or virtual),
            accesses memory, reads/writes files, etc.
          </p>
          <br />
          <p>If you want to learn about CPUs, memory, file systems, files, processes, scheduling and whatnot, then this part is for you.</p>
          <h4 className="mt-2">In this part:</h4>
          <ol>
            <li>Introduction</li>
            <li>
              Computer architecture basics
              <ol>
                <li>
                  Central Processing Unit (CPU)
                  <ol>
                    <li>What is a CPU</li>
                    <li>Machine code</li>
                    <li>Instruction set</li>
                    <li>Cores</li>
                    <li>Hyperthreading</li>
                    <li>Input/Output</li>
                    <li>Input/Output Operations per Seconds (IOPS)</li>
                  </ol>
                </li>
                <li>Memory (RAM)</li>
                <li>Graphical Processing Unit (GPU)</li>
                <li>Binary</li>
                <li>Hexadecimal</li>
              </ol>
            </li>
            <li>
              Operating system basics
              <ol>
                <li>Introduction</li>
                <li>
                  Major components
                  <ol>
                    <li>File systems</li>
                    <li>Scheduler</li>
                    <li>Device drivers</li>
                    <li>Abstractions</li>
                    <li>Mechanisms</li>
                  </ol>
                </li>
                <li>
                  Programs
                  <ol>
                    <li>Instructions</li>
                    <li>Binaries</li>
                  </ol>
                </li>
                <li>
                  Processes and process management
                  <ol>
                    <li>Introduction</li>
                    <li>What is a process</li>
                    <li>Memory organization</li>
                    <li>Process states</li>
                    <li>Process Control Block (PCB)</li>
                    <li>Concurrency, parallelism and threads</li>
                    <li>Kernel vs user-space</li>
                    <li>
                      Scheduling
                      <ol>
                        <li>Process manager</li>
                        <li>Process scheduling queues</li>
                        <li>Context switching</li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>Memory management</li>
                <li>I/O management</li>
                <li>
                  File systems and files
                  <ol>
                    <li>File systems</li>
                    <li>File</li>
                    <li>
                      File formats
                      <ol>
                        <li>What is a file format</li>
                        <li>Data exchange formats</li>
                        <li>Mime types</li>
                        <li>
                          Reading/writing files
                          <ol>
                            <li>File handles</li>
                            <li>File access modes</li>
                          </ol>
                        </li>
                      </ol>
                    </li>
                    <li>File permissions</li>
                  </ol>
                </li>
                <li>Users and groups</li>
                <li>Inter-Process Communication (IPC)</li>
                <li>Ports</li>
                <li>POSIX</li>
                <li>Built-in programs</li>
                <li>
                  Shells
                  <ol>
                    <li>What is a shell</li>
                    <li>Examples</li>
                    <li>Prompt</li>
                    <li>Current working directory (CWD)</li>
                    <li>Scripting</li>
                    <li>Aliases</li>
                    <li>Standard streams</li>
                  </ol>
                </li>
                <li>Environment variables</li>
                <li>
                  Services/Daemons
                  <ol>
                    <li>What is a service or daemon</li>
                    <li>Built-in vs custom</li>
                    <li>Examples</li>
                  </ol>
                </li>
                <li>
                  Scheduled tasks
                  <ol>
                    <li>What is a scheduled task</li>
                    <li>Built-in vs custom</li>
                    <li>Examples</li>
                  </ol>
                </li>
                <li>
                  Virtualization
                  <ol>
                    <li>What is it</li>
                    <li>
                      Hypervisor
                      <ol>
                        <li>Type-1</li>
                        <li>Type-2</li>
                      </ol>
                    </li>
                    <li>Virtual Machines (VMs)</li>
                    <li>Types of virtualization</li>
                  </ol>
                </li>
                <li>
                  Containerization
                  <ol>
                    <li>What is it?</li>
                    <li>Examples</li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </section>

        {/* -------------------------------------- PART 6 -------------------------------------- */}
        <section id="coding-basics" className="mt-4">
          <a href="#coding-basics" className="anchor">
            <h2>
              Part 6: Coding basics
              <span className="anchor-icon">
                <FontAwesomeIcon icon={faLink} />
              </span>
            </h2>
          </a>
          <p>
            This part is dedicated to real beginners who’d like to learn how to C-O-D-E. We will only scratch the surface but this part is a
            great and practical introduction to{" "}
            <span className="font-bold">
              coding concepts that all software crafters <span className="italic">must</span> know
            </span>{" "}
            and use literally all the time.
          </p>
          <h4 className="mt-2">In this part:</h4>
          <ol>
            <li>Introduction</li>
            <li>
              Programming concepts
              <ol>
                <li>Pseudocode</li>
                <li>
                  Variables
                  <ol>
                    <li>Declaration</li>
                    <li>Type</li>
                    <li>Scope</li>
                  </ol>
                </li>
                <li>Constants</li>
                <li>References</li>
                <li>
                  Operators
                  <ol>
                    <li>Arithmetic</li>
                    <li>Comparison</li>
                    <li>Logical</li>
                    <li>Assignment</li>
                  </ol>
                </li>
                <li>Statements</li>
                <li>Expressions</li>
                <li>Keywords</li>
                <li>
                  Data types
                  <ol>
                    <li>Primitives</li>
                    <li>Classes</li>
                    <li>Objects</li>
                    <li>Interfaces</li>
                    <li>Enumerations (enums)</li>
                    <li>Functions</li>
                  </ol>
                </li>
                <li>
                  Mutability
                  <ol>
                    <li>What is it</li>
                    <li>Why is it (often) bad</li>
                  </ol>
                </li>
                <li>
                  Conditional structures
                  <ol>
                    <li>Introduction</li>
                    <li>If-then-else</li>
                    <li>Ternary operator</li>
                    <li>Switch</li>
                  </ol>
                </li>
                <li>
                  Functions
                  <ol>
                    <li>Introduction</li>
                    <li>Signature</li>
                    <li>Scope</li>
                    <li>
                      Arguments
                      <ol>
                        <li>Pass by value</li>
                        <li>Pass by reference</li>
                      </ol>
                    </li>
                    <li>Call stack</li>
                  </ol>
                </li>
                <li>Loops</li>
                <li>
                  Errors/Exceptions
                  <ol>
                    <li>What are errors and exceptions</li>
                    <li>Error types</li>
                    <li>Errors vs exceptions</li>
                    <li>Uncaught/unhandled exceptions</li>
                    <li>Control flow</li>
                    <li>Syntax/keywords</li>
                    <li>Stack traces</li>
                    <li>Differences between programming languages</li>
                  </ol>
                </li>
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
                <li>
                  Debugging
                  <ol>
                    <li>Introduction</li>
                    <li>Concepts</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              Programming paradigms
              <ol>
                <li>What is a programming paradigm</li>
                <li>
                  Imperative
                  <ol>
                    <li>What is imperative programming</li>
                    <li>Procedural</li>
                    <li>
                      Object-Oriented Programming (OOP)
                      <ol>
                        <li>What is it</li>
                        <li>Encapsulation</li>
                        <li>Inheritance</li>
                        <li>Polymorphism</li>
                        <li>Classes</li>
                        <li>Abstraction</li>
                        <li>Interfaces</li>
                        <li>Enumerations (enums)</li>
                        <li>Overloading</li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  Declarative
                  <ol>
                    <li>What is declarative programming</li>
                    <li>
                      Functional Programming (FP)
                      <ol>
                        <li>What is it</li>
                        <li>Characteristics</li>
                        <li>Examples</li>
                      </ol>
                    </li>
                    <li>
                      Functional Reactive Programming (FRP)
                      <li>What is it</li>
                      <li>Characteristics</li>
                      <li>Examples</li>
                      <li>Libraries</li>
                    </li>
                  </ol>
                </li>
                <li>
                  Aspect Oriented Programming (AOP)
                  <ol>
                    <li>What is it</li>
                    <li>Examples</li>
                    <li>Libraries</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              Programming languages & platforms
              <ol>
                <li>Introduction</li>
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
                <li>Introduction</li>
                <li>
                  Integrated Development Environment (IDE)
                  <ol>
                    <li>What is it</li>
                    <li>Features</li>
                    <li>Tools</li>
                  </ol>
                </li>
                <li>
                  Source Control Management client
                  <ol>
                    <li>What is it</li>
                    <li>Tools</li>
                  </ol>
                </li>
                <li>
                  Build tools
                  <ol>
                    <li>What is it</li>
                    <li>Command Line Interfaces (CLI)</li>
                    <li>Tools</li>
                  </ol>
                </li>
                <li>Development environment setup</li>
              </ol>
            </li>
            <li>
              Free and Open Source Software (FOSS)
              <ol>
                <li>What is Open Source</li>
                <li>Values</li>
                <li>Popular Open source licenses</li>
              </ol>
            </li>
            <li>
              Databases
              <ol>
                <li>Introduction</li>
                <li>
                  Database transactions
                  <ol>
                    <li>What are transactions</li>
                    <li>ACID</li>
                  </ol>
                </li>
                <li>
                  Relational Database Management Systems (RDBMS)
                  <ol>
                    <li>Specificities</li>
                    <li>Good for</li>
                    <li>Structured Query Language (SQL)</li>
                    <li>Tools</li>
                  </ol>
                </li>
                <li>
                  NoSQL
                  <ol>
                    <li>Specificities</li>
                    <li>Good for</li>
                    <li>Types</li>
                    <li>Tools</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              Character encoding
              <ol>
                <li>Introduction</li>
                <li>Types</li>
                <li>Advice</li>
              </ol>
            </li>
            <li>
              Internet
              <ol>
                <li>How does it work?</li>
                <li>
                  Hypertext Transfer Protocol (HTTP)
                  <ol>
                    <li>What is it</li>
                    <li>Overview</li>
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
            <li>
              Full Text Search (FTS)
              <ol>
                <li>What is it</li>
                <li>Tools</li>
              </ol>
            </li>
          </ol>
        </section>

        {/* -------------------------------------- PART 7 -------------------------------------- */}
        <section id="general-concerns" className="mt-4">
          <a href="#general-concerns" className="anchor">
            <h2>
              Part 7: General concerns
              <span className="anchor-icon">
                <FontAwesomeIcon icon={faLink} />
              </span>
            </h2>
          </a>
          <p>
            This part is dedicated to elements that must be taken care of <span className="font-bold italic">everywhere</span>; whether
            you’re doing back-end or front-end software development. Note that I also consider those necessary for infrastructure scripting
            (but it’s always hard to make IT operations personnel realize that they are also software developers ;-)
          </p>
          <br />
          <p>
            This is a critical part for true software crafters because many of these points are unfortunately often overlooked for various
            reasons (mostly bad ones). If you want to become a <span className="italic">true</span> software crafter, then you’ll make sure
            to always pay attention to those and to convince everyone else to do the same; even if it means going against some pointy-haired
            manager ;-)
          </p>
          <h4 className="mt-2">In this part:</h4>
          <ol>
            <li>Introduction</li>
            <li>
              Error handling
              <ol>
                <li>Goals</li>
                <li>Why you should care</li>
                <li>Debate around exceptions</li>
                <li>Advice</li>
              </ol>
            </li>
            <li>
              Code quality & Quality Assurance (QA)
              <ol>
                <li>Goals</li>
                <li>Why you should care</li>
                <li>Broken windows theory</li>
                <li>
                  Technical debt
                  <ol>
                    <li>Introduction</li>
                    <li>Advice to fight against it</li>
                  </ol>
                </li>
                <li>
                  Code quality checks
                  <li>Introduction</li>
                  <li>Goals</li>
                  <li>
                    Static Code Analysis (SCA)
                    <ol>
                      <li>Introduction</li>
                      <li>Metrics</li>
                      <li>Tools</li>
                    </ol>
                  </li>
                </li>
                <li>
                  Testing
                  <ol>
                    <li>Introduction</li>
                    <li>Goals</li>
                    <li>Test categories</li>
                    <li>Testing concepts</li>
                    <li>Tools</li>
                  </ol>
                </li>
                <li>
                  Clean code advice
                  <ol>
                    <li>Introduction</li>
                    <li>Goals</li>
                    <li>
                      General
                      <ol>
                        <li>Code duplication</li>
                        <li>Coding conventions</li>
                        <li>Defensive programming</li>
                        <li>Dead code elimination</li>
                        <li>Code quality checklist</li>
                        <li>Code comments</li>
                        <li>...</li>
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
                <li>
                  Continuous Integration (CI)
                  <ol>
                    <li>Introduction</li>
                    <li>Goals</li>
                    <li>Practical advice</li>
                    <li>Tools</li>
                  </ol>
                </li>
                <li>
                  Code review process
                  <ol>
                    <li>Introduction</li>
                    <li>Goals</li>
                    <li>Practical advice</li>
                    <li>Tools</li>
                  </ol>
                </li>
                <li>
                  Issue/Bug tracking
                  <ol>
                    <li>Introduction</li>
                    <li>Goals</li>
                    <li>Concepts</li>
                    <li>Tools</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              Logging
              <ol>
                <li>Introduction</li>
                <li>Why you should care</li>
                <li>Log levels</li>
                <li>Log formats</li>
                <li>Practical advice</li>
                <li>Tools</li>
              </ol>
            </li>
            <li>
              Performance/resource usage
              <ol>
                <li>Introduction</li>
                <li>Why you should care</li>
                <li>Practical advice</li>
                <li>Tools</li>
              </ol>
            </li>
            <li>
              Internationalization (i18n) and localization (l10n)
              <ol>
                <li>Introduction</li>
                <li>Why you should care</li>
                <li>Practical advice</li>
                <li>Tools</li>
              </ol>
            </li>
            <li>
              Encoding
              <ol>
                <li>Introduction</li>
                <li>Why you should care</li>
                <li>
                  Examples
                  <ol>
                    <li>Base64 encoding</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              Caching
              <ol>
                <li>Introduction</li>
                <li>Goals</li>
                <li>Why you should care</li>
                <li>Concepts</li>
                <li>Types</li>
                <li>Patterns</li>
                <li>Practical advice</li>
              </ol>
            </li>
            <li>Feature flagging</li>
            <li>How to fix bugs</li>
            <li>
              Version management
              <ol>
                <li>Introduction</li>
                <li>Why you should care</li>
                <li>Versions</li>
                <li>
                  Versioning schemes
                  <ol>
                    <li>Semantic Versioning (SemVer)</li>
                    <li>Calendar Versioning (CalVer)</li>
                  </ol>
                </li>
                <li>Tagging</li>
              </ol>
            </li>
            <li>
              Source Control Management (SCM)
              <ol>
                <li>Introduction</li>
                <li>Goals</li>
                <li>Why you should care</li>
                <li>Workflows</li>
                <li>Monorepos</li>
                <li>Practical advice</li>
              </ol>
            </li>
            <li>
              Continuous Delivery/Deployment
              <ol>
                <li>Introduction</li>
                <li>Goals</li>
                <li>Why you should care</li>
                <li>Concepts</li>
              </ol>
            </li>
            <li>
              Operational Maturity (OM)
              <ol>
                <li>Introduction</li>
                <li>Why you should care</li>
                <li>Business Continuity Management (BCM)</li>
                <li>
                  IT Service Management (ITSM)
                  <ol>
                    <li>Introduction</li>
                    <li>Why you should care</li>
                    <li>Concepts</li>
                  </ol>
                </li>
                <li>
                  Backup/restore
                  <ol>
                    <li>Introduction</li>
                    <li>Why you should care</li>
                    <li>Concepts</li>
                  </ol>
                </li>
                <li>
                  Disaster Recovery (DR)
                  <ol>
                    <li>Introduction</li>
                    <li>Why you should care</li>
                    <li>Disaster Recovery Plan (DRP)</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              Security
              <ol>
                <li>Introduction</li>
                <li>Why you should care</li>
                <li>Secure SDLC</li>
                <li>Secure coding</li>
                <li>Security testing</li>
                <li>Incident response</li>
              </ol>
            </li>
          </ol>
        </section>

        {/* -------------------------------------- PART 8 -------------------------------------- */}
        <section id="back-end" className="mt-4">
          <a href="#back-end" className="anchor">
            <h2>
              Part 8: Back-end development
              <span className="anchor-icon">
                <FontAwesomeIcon icon={faLink} />
              </span>
            </h2>
          </a>
          <p>Coming soon...</p>
          {/*  <br />*/}
          {/*<ol>*/}
          {/*  <li>Introduction</li>*/}
          {/*</ol>*/}
        </section>

        {/* -------------------------------------- PART X -------------------------------------- */}
        {/*<section id="whatever" className="mt-4">*/}
        {/*  <a href="#whatever" className="anchor">*/}
        {/*    <h2>*/}
        {/*      Part X: Whatever*/}
        {/*      <span className="anchor-icon">*/}
        {/*        <FontAwesomeIcon icon={faLink} />*/}
        {/*      </span>*/}
        {/*    </h2>*/}
        {/*  </a>*/}
        {/*  <p>Coming soon...</p>*/}
        {/*  <br />*/}
        {/*<ol>*/}
        {/*  <li>Introduction</li>*/}
        {/*</ol>*/}
        {/*</section>*/}

        {/* ------------------ Links ------------ */}
        <hr className="my-6" />
        <div className="w-full flex flex-col sm:flex-row sm:space-between items-center select-none">
          <div className="w-1/2 text-center">
            <h2>
              <Link to="/" className="link">
                <FontAwesomeIcon className="text-4xl mr-3" icon={faBackward} />
                <br />
                Go back
              </Link>
            </h2>
          </div>
          <div className="w-1/2 text-center">
            <h2>
              <OutboundLink
                href={data.site.siteMetadata.salesPageUrl}
                title="Pre-order the book now!"
                aria-label="Pre-order the book now!"
                rel="noopener"
                className="link"
              >
                <FontAwesomeIcon className="text-4xl mr-3" icon={faShoppingCart} />
                <br />
                Pre-order now!
              </OutboundLink>
            </h2>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
