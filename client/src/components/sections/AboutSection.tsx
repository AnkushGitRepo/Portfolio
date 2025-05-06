import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <span className="text-blue-800 dark:text-blue-200 text-lg font-medium">About Photo</span>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ML Engineer & Full Stack Developer
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate ML Engineer and Full Stack Developer with expertise in building
              intelligent and user-friendly applications. With a strong foundation in both machine
              learning and web development, I create solutions that are not only technically sound
              but also deliver exceptional user experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My journey in technology began with a deep curiosity about how things work, which led
              me to pursue a degree in Computer Science. Since then, I've worked on various projects
              ranging from predictive analytics systems to responsive web applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge through technical writing and mentoring.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Education
                </h4>
                <ul className="space-y-2">
                  <li className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">MSc in Computer Science</span>
                    <br />
                    <span className="text-sm">Stanford University, 2018-2020</span>
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">BSc in Computer Science</span>
                    <br />
                    <span className="text-sm">MIT, 2014-2018</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Experience
                </h4>
                <ul className="space-y-2">
                  <li className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">ML Engineer</span>
                    <br />
                    <span className="text-sm">Google, 2020-Present</span>
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Software Engineer</span>
                    <br />
                    <span className="text-sm">Microsoft, 2018-2020</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
