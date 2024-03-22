import './Profile.css';

const Profile = (): JSX.Element => {
    return (
        <main className="container" style={{ textAlign: "justify" }}>
            <article>
                <p>
                    <img src='/self.jpg' alt='Profile' style={{width: "130px", float: "left", borderRadius: "10px", marginRight: "1rem"}}></img>I am an experienced software engineer with more than a decade in the field, with extensive skills in software engineering, problem-solving, and solution implementation. Known for excellent interpersonal communication, team collaboration, and mentorship abilities. Self-motivated, organized, and resilient under pressure, I am committed to hard work, reliability, and continuous learning, always ready to tackle new challenges and technologies.
                </p>

                <h2>Skills overview</h2>
                <p>
                    <strong>Core Technologies:</strong> Specialize in a diverse array of programming languages, including Python, Java, Go, Kotlin, C#, JavaScript, and TypeScript, focusing on building robust, scalable software solutions across various domains.
                </p>
                <p>
                    <strong>Database Management:</strong> Experienced in designing, managing and optimizing relational (MySQL, PostgreSQL) and NoSQL databases (DynamoDB).
                </p>
                <p>
                    <strong>Framework Expertise:</strong> Extensive experience with key development frameworks and libraries (Django, Flask, Spring, React) for efficient web and API development and application design. Familiarity with a wide range of additional frameworks and tools, reflecting a flexible approach to software engineering.
                </p>
                <p>
                    <strong>Software Development Practices:</strong> Deep understanding of Agile methodologies, adept at adapting Scrum, Kanban, and TDD  to enhance team productivity and project delivery.
                </p>
                <p>
                    <strong>Cloud and DevOps:</strong> Experienced in cloud-based infrastructure, particularly AWS. Proficient in implementing CI/CD pipelines, containerization, and orchestration to streamline deployment and operations.
                </p>
                <p>
                    <strong>Versatile Toolset:</strong> Comfortable with a comprehensive suite of development tools, including IntelliJ IDEA, Visual Studio, Git, and Postman, for coding, version control, and API testing.
                </p>
                <h2>Education and certification</h2>
                <p>2023: <a href='https://www.credly.com/badges/dca34939-b29f-4cf7-8477-fb0b123d6200' target='_blank' rel='noreferrer'>AWS Certified Solutions Architect - Associate</a></p>
                <p>2012 - 2015: University of Novi Sad, Faculty of technical sciences - Master in Electrical and Computer Engineering</p>
                <p>2005 - 2012: University of Novi Sad, Faculty of technical sciences - Bachelor with Honours in Electrical and Computer Engineering</p>

                <h2>Experience</h2>
                <h3>2021 - : Valcon, Novi Sad</h3>
                <h4>2023 - : Halfords</h4>
                <p>
                    Halfords, the UK's premier retailer specializing in automotive, cycling, and leisure products and services, has been my primary focus. My role centered on enhancing the point of sales application that manages the entire workflow from order placement to the installation of automotive parts. This application, developed in Java, streamlines operations and ensures a seamless transition through each phase of the customer service process.
                </p>
                <h4>2023: Partou.nl</h4>
                <p>
                    Partou is the largest childcare organisation in the Netherlands. I focused on a project to make group planning for children more efficient using data. I led the development of the app's user interface using React in Typescript and the data planning API in Python. I also helped the data science team improve their Python coding standards and quality.
                </p>
                <h4>2023: Bauwatch</h4>
                <p>
                    Bauwatch provides first-class CCTV protection for all types of locations from construction sites, energy farms to long-term vacant properties without power. I developed an app from scratch in Go that bridges Bauwatch’s internal protocol with the SIA DC-09 standard. This lets customers connect their compliant security systems directly to Bauwatch’s setup.
                </p>
                <h4>2021 - 2022: Coolblue Energy</h4>
                <p>
                    Coolblue Energy, formerly Servicehouse, is a company that offers sustainable energy and mobility services. My work included implementing the OCPI protocol, enabling Coolblue Energy to operate as a charge point operator. I also developed an internal tool to oversee the entire fulfillment process, from buying energy products to their installation at customer sites. Additionally, I led the creation of a centralized service to monitor sellable energy products. I managed a team of five.
                </p>
                <h3>2020 - 2021: M-Pioneers Gmbh, Remote position</h3>
                <p>
                    M-Pioneers is a software engineering company specialised in healthcare, logistics and human resource solutions. I developed and maintained a backend system in C# for managing and tracking items given to employees.
                </p>
                <h3>2017 - 2020: codecentric, Novi Sad</h3>
                <h4>2018 - 2020: METRONOM</h4>
                <p>
                    At METRONOM, the digital branch of METRO AG, a leading global retailer, I joined the Data Science team, focusing on software development support. My role involved contributing to a machine learning application that predicts customer transaction trends. Additionally, I worked on another machine learning project that suggests product substitutes and alternatives. I was in charge of implementing an automation pipeline which enabled scheduled runs for the machine learning applications.
                </p>
                <h4>2017: OBI Next</h4>
                <p>
                    At OBI Next, which focuses on digital enhancements for OBI hardware store customers, I contributed to designing and implementing an app which analyzes weather forecasts to notify select customers through rule-based criteria, enhancing their shopping experience, and product care.
                </p>
                <h3>2017: Playerhunter, Remote position</h3>
                <p>
                    At Playerhunter, a sport recruitment platform and social network, I contributed to a major overhaul of the backend system with Java and Spring. I also managed the infrastructure setup on Digital Ocean, enhancing the platform's functionality and user interaction capabilities.
                </p>
                <h3>2016 - 2017: Gazindo, Remote position</h3>
                <p>
                    At Gazindo, a purchasing and inventory management system, I focused on developing and maintaining the Java-based backend system using Spring framework. Additionally, I handled the full infrastructure setup and ongoing maintenance on Digital Ocean, supporting all aspects of supply, ordering, accounting, and inventory management.
                </p>
                <h3>2010 - 2016: Levi9, Novi Sad</h3>
                <h4>2015 - 2016: Improve Digital</h4>
                <p>
                    At Improve Digital, a technology platform for publisher monetization, I contributed to the development and upkeep of internal applications. These applications were crucial for data ingestion, integrating third-party services, and delivering reports, all part of the 360 Platform to automate and enhance advertising monetization across various formats and sales channels.
                </p>
                <h4>2011 - 2015: TomTom</h4>
                <p>
                    At TomTom, a leader in navigation and mapping products, I worked on developing and maintaining backend applications for device and user management, as well as subscription services, using Java and Scala. Additionally, I contributed to creating a new middleware application, serving as a single point of contact between TomTom's mobile application and its broader ecosystem.
                </p>
                <h4>2010 - 2011: Relatieplanet.nl</h4>
                <p>
                    At Relatieplanet, the most prominent and frequented paid dating site at the time  in the Netherlands and Dutch-speaking Belgium, I contributed to a comprehensive revamp. My involvement included rebuilding the front-end application with JSP/JSTL, replacing ASP/VB, and overhauling the backend, along with migrating approximately 3.5 million user accounts.
                </p>
                <h3>2013 - 2014: GIA Hungaria Kft, Freelance project</h3>
                <p>
                    Developed an application in Java that facilitates communication between fuel dispensers and cashier systems, installed on PCs linked to the dispensers. It uses the RXTX library for serial port communication and server sockets for cashier system interaction. The app records the dispenser controller's state in an H2 database and offers maintenance features via HTTP with Restlet. Additionally, I created a fuel dispenser emulator for testing real scenarios without needing physical dispenser units, connecting through a virtual serial port to the main application.
                </p>
                <h2>Languages</h2>
                <p><strong>English</strong> (Fluent), <strong>Hungarian</strong> (Native), <strong>Serbian</strong> (Fluent), <strong>German</strong> (Intermediate)</p>
                <h2>Communication</h2>
                <p>Proficient in business English and B1 level German, honed through formal courses. Advanced communication and presentation skills developed from active participation in agile meetings, presenting demos to stakeholders, and leading company internal presentations. Experienced in mentoring team members, fostering knowledge sharing sessions, and organizing technical workshops and contests, such as Code9 and “5 days on Java” by Levi9. My role has consistently involved facilitating growth and learning within teams, emphasizing the importance of clear, effective communication and continuous professional development.</p>
            </article>
        </main>
    );
}

export default Profile;