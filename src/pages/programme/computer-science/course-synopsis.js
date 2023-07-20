import React from 'react'
import Head from 'next/head'
import Layout from '@/components/homePageLayout/Layout'

const courseSynopsis = () => {
  return (
    <>
      <Layout isContent={true} titleContent={"Course Synopsis"}>
        <Head>
          <title>Computer Science | Course Synopsis</title>
        </Head>
        <section className='min-h-main py-10 h3 font-medium text-justify'>
          <article className='layout space-y-10'>
            <div className='align-middle space-y-10'>
              <p className='h3'>(i) Core Courses (Taught courses): 8 units (Code: T)</p>
              <p className='h3'>(a) CCS591/4 – Research and Empirical Methods in Computer Science</p>
              <p>
                This course aims to introduce techniques in conducting research, academic writing and presentation especially in the field of Computer Science. It will guide
                students to choose a title or a research problem, understand the process and the related technique and also tools that can be used to support research.
                Students will conduct literature review, synthesise reference sources, argue logically and evaluate scientific literature critically. It also covers the explanation
                on common methods used in research such as survey, comparison, case study and experiment and how to produce a research methodology and pre-proposal
                of high-quality research project. This includes methods in data analysis and conducting evaluation towards the obtained results either qualitatively or quantitatively
                to prove a research contribution based on research design and hypothesis. This course will also give guidance in techniques to present research materials, paper
                writing and high-quality thesis. Students should work under the supervision of a lecturer. This course is a pre-requisite for the dissertation.</p>
              <p>At the end of this course, the students will be able to:</p>
            </div>
            <div>
              <p>Design research proposal.</p>
              <ul className='list-disc ml-10'>
                <li>
                  Defend the research proposal and expected contribution of the research in the form of poster presentation.
                </li>
                <li>
                  Critique research and research proposal of their peers.
                </li>
                <li>
                  Practice the research tasks, writing and publications in an ethical manner.
                </li>
                <li>
                  Identify research problem based on reference materials in the chosen field.
                </li>
                <li>
                  Perform research comfortably and responsibly.
                </li>
                <li>
                  Propose a research project with proper planning, judgements and decisions as well as correct planning of empirical data analysis.
                </li>
              </ul>
            </div>

            <div className='space-y-10'>
              <p className='h3'>(b) CCS592/4 – Advanced Algorithms and Complexity</p>
              <p>This course provides a strong foundation in the theory of algorithms by giving the fundamentals of algorithm analysis and complexity. The course covers several
                major strategies in algorithm design such as the greedy method, divide and conquer, dynamic programming, randomized algorithms and approximation algorithms.
                This course also discusses in detail, important algorithms in several areas of computer science such as graph connectivity, shortest paths, minimum spanning trees,
                network flow and matching, string matching, Fast-Fourier transform, and NP-Complete problems.</p>

            </div>
            <div className='space-y-10'>
              <div>
                <p>At the end of this course, the students will be able to:</p>
                <ul className='list-disc ml-10'>
                  <li>
                    Critique various algorithms and designs of algorithms.
                  </li>
                  <li>
                    Adapt suitable algorithmic techniques and algorithmic designs in problem solving.
                  </li>
                  <li>
                    Perform complexity analysis of algorithm.
                  </li>
                </ul>
              </div>
              <p className='h3'>
                (ii) Elective Courses: 12 units (Code: E)
              </p>
              <div>
                <p>Two focus areas are offered:</p>
                <ul className='list-disc ml-10'>
                  <li>Data and Knowledge Engineering</li>
                  <li>Enabling Technologies and Infrastructures</li>
                </ul>
                <p>Choose three (3) elective courses with at least two (2) courses from a chosen focus area. The following list presents the elective course under the two focus areas.</p>
              </div>
            </div>

            <p className='h3'>
              Data and Knowledge Engineering
            </p>

            <p>
              (a) CCS516/4  –   Computational Intelligence
            </p>
            <p>
              The course introduces computational intelligence. It begins with an introduction to evolutionary algorithms, artificial neural networks, and fuzzy system.
              Various variants of evolutionary algorithms, artificial neural networks, and fuzzy system are explored. Several issues within evolutionary algorithms (e.g.
              , parameter tuning and control), artificial neural networks (e.g., learning rules, architecture and deep learning), and fuzzy system (e.g., fuzzy assessment,
              fuzzy reasoning) are pursued.
            </p>
            <p>
              At the end of this course, the students will be able to:
            </p>
            <ul className='list-disc ml-10'>
              <li>
                Analyse basic principles and concepts of evolutionary algorithms, artificial neural networks and fuzzy systems.
              </li>
              <li>
                Integrate evolutionary algorithms, artificial neural networks and fuzzy systems as hybrid intelligent system
              </li>
              <li>
                Apply evolutionary algorithms, artificial neural networks and fuzzy systems in problem solving.
              </li>
              <li>
                Work on a project in a team with full responsibility.
              </li>
            </ul>

            <p>
              (b) CDS503/4  –   Machine Learning +
            </p>
            <p>
              Upon successful completion of the course, students will have a broad understanding of machine learning algorithms. Students will be acquiring skills of applying relevant
              machine learning techniques to address real-world problems. Students will be able to adapt or combine some of the key elements of existing machine learning algorithms.
              Topics which will be covered in this course include supervised and unsupervised learning techniques, parametric and non-parametric methods, Bayesian learning, kernel machines,
              and decision trees. The course will also discuss recent applications of machine learning. Students are expected to obtain hands-on experience during labs, assignments and project
              to address practical challenges.
            </p>
            <p>
              At the end of this course, the students will be able to:
            </p>
            <ul className='list-disc ml-10'>
              <li>
                Describe concepts, theories and implementation of machine learning algorithms
              </li>
              <li>
                Build machine learning models which can be adapted to more complex scenarios.
              </li>
              <li>
                Apply relevant machine learning algorithms for typical real-world problems.
              </li>
              <li>
                Apply mathematical concepts to solve machine learning problems.
              </li>
            </ul>

            <p>
              (c) CDS505/4  –   Data Visualization and Visual Analytics +
            </p>
            <p>
              This course discusses the use of computer-supported, interactive and visual representations of data in order to amplify cognition, help people reason effectively about information,
              find patterns and meaning in the data, and easily explore the datasets from different perspectives in particular in data-intensive environment. The course covers techniques from two
              branches of visual representation of data, namely data visualization and visual analytics. In data visualization, the course covers scientific visualisation techniques (representations
              of empirically-gathered scientific datasets) such as contours, iso-surface, and volume rendering as well as specific techniques in information visualisation (representations of abstract
              datasets) which include tables, networks and trees, and map-colour. In visual analytics, a visualization process features a significant amount of computational analysis and human-computer
              interaction. So, the topics covered in this part of the course include view manipulation, multiple views, reduction in items and attributes, and focus + context as well as analysis case
              studies involving a visualization system or tool.
            </p>
            <p>
              At the end of this course, the students will be able to:
            </p>
            <ul className='list-disc ml-10'>
              <li>
                Select the right visualization techniques for any given problems or applications.
              </li>
              <li>
                Adapt visualization techniques and idioms, and visual analytics techniques in certain domains
              </li>
              <li>
                Relate various visualization techniques with various domains and problems.
              </li>
              <li>
                Customise modern visualization software tools for applications in various domain
              </li>
            </ul>

            <p>
              (d) CDS521/4  –   Multimodal Information Retrieval +
            </p>
            <p>
              This course provides the basic concepts, principles and applications for multimodal (text, image, and video) retrieval. This course covers basic techniques for text, image and video retrieval such as indexing, representation, ranking, querying, GLCM, colour histogram, video shot detection and boundary detection and retrieval performance and evaluation. In addition, this course also covers machine learning retrieval approach techniques such as KNN, SVM and deep learning neural network for large dataset on the latest context such as mobile devices, social media and big data.
            </p>

            <p>
              (e) CDS522/4  –   Text and Speech Analytics +
            </p>
            <p>
              This course focuses on the theory and tools of text and speech processing to retrieve textual features, speech signal and annotation, and linguistic information from text and speech resources. Using these resources, theory and tools are then used to perform analytic tasks to solve real-world problem.
            </p>
            <p>
              At the end of this course, the students will be able to:
            </p>
            <ul className='list-disc ml-10'>
              <li>
                Demonstrate understanding of basic concepts and techniques in natural language text and speech processing, such as tokenization, ngram, tagging, parsing, word sense disambiguation, speech synthesis and speech decoding.
              </li>
              <li>
                Construct different levels of linguistics information such as word, sentence, semantics and spectrum for text and speech analytics using approaches in natural language text and speech processing.
              </li>
            </ul>
            <p>
              Propose custom solutions using natural language processing and speech processing techniques or text and speech analytics problems in organizations.
            </p>


            <p className='h3'>
              Enabling Technologies and Infrastructures
            </p>

            <p>
              (f) CCS525/4  –    Advanced Cloud Computing Platform
            </p>
            <p>
              This course focuses on concepts, principles and issues that arise in the design and implementation of high-performance cloud applications that use advanced cloud computing platforms. Topics covered includes virtualization technologies, cloud system architectures, cloud service models, cloud computing platforms, cloud infrastructure services, and advanced topics.
            </p>
            <p>
              At the end of this course, the students will be able to:
            </p>
            <ul className='list-disc ml-10'>
              <li>
                Evaluate application, selection and construction issues of advanced cloud computing platform.
              </li>
              <li>
                Adapt cloud computing platform basic services for construction of cloud applications.
              </li>
              <li>
                Propose suitable components of cloud computing platform
              </li>
            </ul>

            <p>
              (g) CCS526/4 – Wireless and Mobile Communications
            </p>
            <p>
              This course introduces the fundamental theory and concepts in wireless and mobile communications. This course is designed to focus on wireless and mobile radio technologies, its architectures and MAC protocols, and mobility in the Internet layer. Important topics such as wireless and mobile transmission, radio propagation, mobile radio technologies and mobility are covered. The course relates to emerging standards such as 4G LTE Advanced and 5G, recent advancements in WiFi and long range IoT networks such as LoRA. It attempts to relate to some interesting applications of the future such as connected and autonomous vehicle
            </p>
            <p>
              At the end of this course, the students will be able to:
            </p>
            <ul className='list-disc ml-10'>
              <li>
                Distinguish different Quality of Service (QoS) classes and related use cases, mobility and limitations of wireless and mobile networks.
              </li>
              <li>
                Construct advanced heterogeneous wireless and mobile access and core architecture based on multiple services, radio environments, cell structures and mobility considerations.
              </li>
              <li>
                Evaluate the many wireless and mobile communications radio technologies and the fundamental theories behind them.
              </li>
            </ul>

            <p>
              (h) CCS527/4   –  Internet of Things
            </p>
            <p>
              This course focuses on the existing and potential applications of the Internet of Things (IoT). Standards, protocols, and application stacks for IoT will be introduced. Access to the IoT devices via Internet Gateways and related security issues will be studied. Data Analytics, Data Management and Privacy Issues of IoT will be covered.
            </p>
            <p>
              At the end of this course, the students will be able to:
            </p>
            <ul className='list-disc ml-10'>
              <li>
                Identify theory of principle and application of Internet of Things (IoT) in daily life.
              </li>
              <li>
                Modify IoT data processing algorithms for solving problem based on certain scenario.
              </li>
              <li>
                Customise control and detection systems by using IoT.
              </li>
            </ul>

            <p>
              (i) CCS528/4 – Information Security and Cryptography
            </p>
            <p>
              The course presents an overview of history, concepts, practice and theoretical foundations of modern cryptographic algorithms. The first part of the course covers basic concepts and symmetric cryptography. The second part covers asymmetric. In the third part, the class will analyse the popular implementations of cryptography used on the Internet.
            </p>
            <p>
              At the end of this course, the students will be able to:
            </p>
            <ul className='list-disc ml-10'>
              <li>
                Explain given computer security issues in order to apply cryptographic concepts and computer security in problem solving.
              </li>
              <li>
                Select critically potential publications to generate new ideas.
              </li>
              <li>
                Adapt cryptographic algorithms in the development of computer security protocols.
              </li>
            </ul>

            <p>
              (j) CDS523/4 – Forensic Analytics and Digital Investigations +
            </p>
            <p>
              This course introduces basic knowledge and techniques in computer forensics and digital investigation. Starting with an overview of the career of digital investigators, issues in digital forensics and investigations into public data, and current practices in the processing of criminal backgrounds and incidents will be described.
            </p>
            <p>
              At the end of this course, the students will be able to:
            </p>
            <ul className='list-disc ml-10'>
              <li>
                Apply the principles and techniques in forensics analytics and digital investigations.
              </li>
              <li>
                Conduct digital investigations in computer forensics, mobile forensics, network forensics, image forensics and big data forensics.
              </li>
              <li>
                Demonstrate the digital investigations that adheres to professional standards and investigation processes: identification, preservation, examination, and analysis.
              </li>
              <li>
                Report the potential security breaches of computer data that suggest violations of legal, ethical, moral, policy and/or societal standard.
              </li>
            </ul>
            <p className='text-usm-primary-orange'>+ Courses offered under MSc (Data Science and Analytics).</p>

            <p className='h3'>
              (iii) Dissertation (Core Course): 20 units (Code: T)
            </p>
            <p>
              CCS599/20 – Dissertation
            </p>
            <p>
              The course aims to enhance students’ knowledge and skills in planning and implementation of a research project in the field of computer science. Students can choose research topics in related areas in computer science but they are encouraged to choose research topic in their respective focus area, and then proceed to conduct extensive review of literature pertaining to the topic and eventually carry out the research under the supervision of a lecturer.  At the end of the course, students are required to produce a satisfactory dissertation in order to fulfill their degree requirements.
            </p>
            <p>
              At the end of this course, the students will be able to:
            </p>
            <ul className='list-disc ml-10'>
              <li>
                Perform computer science research project using a suitable methodology.
              </li>
              <li>
                Defend orally the research progress /outcomes convincingly.
              </li>
              <li>
                Perform the research tasks and processes in an ethical manner.
              </li>
              <li>
                Perform literature review relevant to domain of interest independently.
              </li>
              <li>
                Perform the research with proper planning to meet research milestone.
              </li>
              <li>
                Display autonomy and responsibility in delivering research project.
              </li>
              <li>
                Investigate the research problem and able to solve them.
              </li>
            </ul>


          </article>
        </section>
      </Layout>
    </>
  )
}

export default courseSynopsis