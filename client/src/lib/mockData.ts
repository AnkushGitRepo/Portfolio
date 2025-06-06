import { Project, Skill, SkillCategory, Book, Certification } from "@/types";
import { getAssetPath } from "./utils";

// Mock Projects
export const projects: Project[] = [
  {
    _id: "1",
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js, React, and TypeScript. Features include dynamic theme cycling, project showcases, book reviews, and contact functionality. Optimized for SEO and performance with server-side rendering.",
    image: `${getAssetPath("/images/projects/Portfolio_1.png")}, ${getAssetPath("/images/projects/Portfolio_2.png")}, ${getAssetPath("/images/projects/Portfolio_3.png")}`,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Node.js"],
    githubUrl: "https://github.com/AnkushGitRepo/Portfolio",
    liveUrl: "https://ankushgitrepo.github.io/Portfolio/",
    featured: true,
    category: "Web Development",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "2",
    title: "Resume Builder",
    description:
      "An intelligent resume builder application that helps users create professional resumes with customizable templates. Features include real-time preview, PDF export, and ATS-friendly formatting to help job seekers create standout resumes.",
    image: `${getAssetPath("/images/projects/Resume_Builder_1.png")}, ${getAssetPath("/images/projects/Resume_Builder_2.png")}, ${getAssetPath("/images/projects/Resume_Builder_3.png")}`,
    technologies: ["React", "JavaScript", "CSS", "HTML", "PDF.js"],
    githubUrl: "https://github.com/AnkushGitRepo/Resume-Builder",
    liveUrl: "https://ankushgitrepo.github.io/Resume-Builder/",
    featured: true,
    category: "Web Development",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "3",
    title: "Password Management System",
    description:
      "A secure password management application built with modern web technologies. Features include encrypted password storage, secure authentication, password generation, and user-friendly interface for managing multiple accounts safely.",
    image: getAssetPath("/images/projects/github-repo.jpg"),
    technologies: ["React", "Node.js", "Express", "MongoDB", "Encryption"],
    githubUrl: "https://github.com/AnkushGitRepo/Password-Management-System",
    liveUrl: "",
    featured: true,
    category: "Web Development",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "4",
    title: "Pharmacy Management System",
    description:
      "A console-based system using Java and PostgreSQL for managing drug inventory and transactions. This application helps pharmacies track inventory, manage prescriptions, and process sales.\n\nThe system includes features for user authentication, inventory management, sales tracking, and reporting.",
    image: getAssetPath("/images/projects/pharmacy-system.jpg"),
    technologies: ["Java", "PostgreSQL", "JDBC", "Console App"],
    githubUrl: "https://github.com/AnkushGitRepo/Pharmacy-Management-System",
    liveUrl: "",
    featured: true,
    category: "Desktop Application",
    createdAt: new Date().toISOString(),
  },
];

// Mock Skills
export const skills: Skill[] = [
  // Languages
  {
    _id: "1",
    name: "Java",
    category: SkillCategory.LANGUAGES,
    icon: "/images/skills/icons8-java.svg",
  },
  {
    _id: "2",
    name: "Python",
    category: SkillCategory.LANGUAGES,
    icon: "/images/skills/icons8-python.svg",
  },
  {
    _id: "3",
    name: "JavaScript",
    category: SkillCategory.LANGUAGES,
    icon: "/images/skills/icons8-javascript.svg",
  },
  {
    _id: "4",
    name: "HTML",
    category: SkillCategory.LANGUAGES,
    icon: "/images/skills/icons8-html5.svg",
  },
  {
    _id: "5",
    name: "CSS",
    category: SkillCategory.LANGUAGES,
    icon: "/images/skills/icons8-css.svg",
  },
  {
    _id: "6",
    name: "TypeScript",
    category: SkillCategory.LANGUAGES,
    icon: "/images/skills/icons8-typescript.svg",
  },

  // Frameworks & Libraries
  {
    _id: "7",
    name: "React",
    category: SkillCategory.FRAMEWORKS,
    icon: "/images/skills/icons8-react.svg",
  },
  {
    _id: "8",
    name: "Node.js",
    category: SkillCategory.FRAMEWORKS,
    icon: "/images/skills/icons8-nodejs.svg",
  },
  {
    _id: "9",
    name: "Express.js",
    category: SkillCategory.FRAMEWORKS,
    icon: "/images/skills/icons8-express-js.svg",
  },
  {
    _id: "10",
    name: "Bootstrap",
    category: SkillCategory.FRAMEWORKS,
    icon: "/images/skills/icons8-bootstrap.svg",
  },
  {
    _id: "11",
    name: "Tailwind CSS",
    category: SkillCategory.FRAMEWORKS,
    icon: "/images/skills/icons8-tailwind-css.svg",
  },

  // Databases
  {
    _id: "12",
    name: "MySQL",
    category: SkillCategory.DATABASES,
    icon: "/images/skills/icons8-mysql.svg",
  },
  {
    _id: "13",
    name: "PostgreSQL",
    category: SkillCategory.DATABASES,
    icon: "/images/skills/icons8-postgres.svg",
  },
  {
    _id: "14",
    name: "MongoDB",
    category: SkillCategory.DATABASES,
    icon: "/images/skills/MongoDB.svg",
  },
  {
    _id: "15",
    name: "Redis",
    category: SkillCategory.DATABASES,
    icon: "/images/skills/icons8-redis.svg",
  },

  // Tools & IDEs
  {
    _id: "16",
    name: "Git",
    category: SkillCategory.TOOLS,
    icon: "/images/skills/icons8-git.svg",
  },
  {
    _id: "17",
    name: "GitHub",
    category: SkillCategory.TOOLS,
    icon: "/images/skills/icons8-github.svg",
  },
  {
    _id: "18",
    name: "VS Code",
    category: SkillCategory.TOOLS,
    icon: "/images/skills/icons8-visual-studio.svg",
  },
  {
    _id: "19",
    name: "IntelliJ IDEA",
    category: SkillCategory.TOOLS,
    icon: "/images/skills/icons8-intellij-idea.svg",
  },
  {
    _id: "20",
    name: "PyCharm",
    category: SkillCategory.TOOLS,
    icon: "/images/skills/icons8-pycharm.svg",
  },
  {
    _id: "21",
    name: "WebStorm",
    category: SkillCategory.TOOLS,
    icon: "/images/skills/icons8-webstorm.svg",
  },
  {
    _id: "22",
    name: "Jupyter",
    category: SkillCategory.TOOLS,
    icon: "/images/skills/icons8-jupyter.svg",
  },
  {
    _id: "23",
    name: "Figma",
    category: SkillCategory.TOOLS,
    icon: "/images/skills/icons8-figma.svg",
  },
];

// Mock Books
export const books: Book[] = [
  {
    _id: "1",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    image: getAssetPath("/images/Books/Rich_Dad_Poor_Dad.png"),
    coverImage: getAssetPath("/images/Books/Rich_Dad_Poor_Dad.png"),
    description:
      "What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!",
    review:
      "This book completely changed my perspective on money and investing. Kiyosaki explains complex financial concepts through simple storytelling, making it accessible to everyone. The distinction between assets and liabilities has been a guiding principle in my financial decisions.",
    genre: ["Personal Finance", "Business", "Self-Help"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/69571.Rich_Dad_Poor_Dad",
    order: 1,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "2",
    title: "Elon Musk",
    author: "Ashlee Vance",
    image: getAssetPath("/images/Books/Elon_Musk_By_Ashlee_Vance.webp"),
    coverImage: getAssetPath("/images/Books/Elon_Musk_By_Ashlee_Vance.webp"),
    description: "Tesla, SpaceX, and the Quest for a Fantastic Future",
    review:
      "An inspiring biography that details Musk's relentless drive and vision. The book provides fascinating insights into how Musk built multiple revolutionary companies and overcame seemingly impossible challenges. His work ethic and ability to think at scale is truly remarkable.",
    genre: ["Biography", "Business", "Technology"],
    goodreadsLink: "https://www.goodreads.com/book/show/25541028-elon-musk",
    order: 2,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "3",
    title: "Zero to One",
    author: "Peter Thiel",
    image: getAssetPath("/images/Books/zero_to_one_peter_thiel_.png"),
    coverImage: getAssetPath("/images/Books/zero_to_one_peter_thiel_.png"),
    description: "Notes on Startups, or How to Build the Future",
    review:
      "Thiel presents a contrarian view on innovation and entrepreneurship that challenges conventional thinking. His emphasis on creating something truly new (going from 0 to 1) rather than iterating on existing ideas has influenced how I approach problem-solving and innovation.",
    genre: ["Business", "Entrepreneurship", "Technology"],
    goodreadsLink: "https://www.goodreads.com/book/show/18050143-zero-to-one",
    order: 3,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "4",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image: getAssetPath("/images/Books/The_Psychology_of_Money.jpg"),
    coverImage: getAssetPath("/images/Books/The_Psychology_of_Money.jpg"),
    description: "Timeless lessons on wealth, greed, and happiness",
    review:
      "Housel presents financial concepts through compelling stories that highlight how psychology affects our financial decisions. The book changed how I think about money, success, and happiness. The concept that financial decisions are not just about math but about behavior and personal history was eye-opening.",
    genre: ["Finance", "Psychology", "Economics"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/41881472-the-psychology-of-money",
    order: 4,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "5",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    image: getAssetPath("/images/Books/Thinking_Fast_and_Slow.webp"),
    coverImage: getAssetPath("/images/Books/Thinking_Fast_and_Slow.webp"),
    description:
      "A groundbreaking tour of the mind explaining the two systems that drive the way we think",
    review:
      "Kahneman's exploration of cognitive biases and the two systems of thinking provides profound insights into human decision-making. This book has made me more aware of my own thinking patterns and biases, helping me make more rational decisions in both personal and professional contexts.",
    genre: ["Psychology", "Economics", "Science"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow",
    order: 5,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "6",
    title: "Do Epic Shit",
    author: "Ankur Warikoo",
    image: getAssetPath("/images/Books/Do_Epic_Shit.png"),
    coverImage: getAssetPath("/images/Books/Do_Epic_Shit.png"),
    description:
      "A collection of lessons on life, career, failure, and success",
    review:
      "Warikoo offers practical advice on personal growth, career development, and entrepreneurship in a straightforward, no-nonsense manner. The book's bite-sized chapters make complex life lessons accessible and actionable. I particularly appreciated his insights on embracing failure as a learning opportunity.",
    genre: ["Self-Help", "Career", "Motivation"],
    goodreadsLink: "https://www.goodreads.com/book/show/59795331-do-epic-shit",
    order: 6,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "7",
    title: "Hooked",
    author: "Nir Eyal",
    image: getAssetPath("/images/Books/Hooked-Book.png"),
    coverImage: getAssetPath("/images/Books/Hooked-Book.png"),
    description: "How to Build Habit-Forming Products",
    review:
      "Eyal presents a practical framework for creating products that naturally integrate into users' lives. The Hook Model (trigger, action, variable reward, investment) has been invaluable in my approach to product design and user experience. This book is essential reading for anyone interested in building engaging digital products.",
    genre: ["Business", "Psychology", "Design"],
    goodreadsLink: "https://www.goodreads.com/book/show/22668729-hooked",
    order: 7,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "8",
    title: "One Up On Wall Street",
    author: "Peter Lynch",
    image: getAssetPath("/images/Books/One_Up_On_Wall_Street.webp"),
    coverImage: getAssetPath("/images/Books/One_Up_On_Wall_Street.webp"),
    description: "How To Use What You Already Know To Make Money In The Market",
    review:
      'Lynch demystifies investing and argues that individual investors can outperform professionals by leveraging their personal knowledge and experiences. His practical approach to identifying investment opportunities in everyday life has changed how I evaluate potential investments. The concept of "invest in what you know" has been particularly valuable.',
    genre: ["Finance", "Investing", "Business"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/762462.One_Up_On_Wall_Street",
    order: 8,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "9",
    title: "Bhagavad Gita As It Is",
    author: "A.C. Bhaktivedanta Swami Prabhupada",
    image: getAssetPath("/images/Books/Bhagavad_Gita_As_It_Is-Englsiih.png"),
    coverImage: getAssetPath(
      "/images/Books/Bhagavad_Gita_As_It_Is-Englsiih.png"
    ),
    description:
      "The definitive guide to understanding the essence of Bhagavad Gita",
    review:
      "This translation and commentary provides profound insights into the timeless wisdom of the Bhagavad Gita. The teachings on duty, purpose, and spiritual growth have been transformative in my approach to life's challenges. The concept of performing one's duties without attachment to results has been particularly impactful in my personal and professional life.",
    genre: ["Philosophy", "Spirituality", "Religion"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/24006137-the-bhagavad-gita-as-it-is",
    order: 9,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "10",
    title: "Attitude Is Everything",
    author: "Jeff Keller",
    image: getAssetPath("/images/Books/Attitude_Is_Everthing.webp"),
    coverImage: getAssetPath("/images/Books/Attitude_Is_Everthing.webp"),
    description: "Change Your Attitude... Change Your Life!",
    review:
      "Keller presents a compelling case for how our attitudes shape our experiences and outcomes. The practical strategies for maintaining a positive mindset have been valuable in navigating challenges and setbacks. This book reinforced my belief that perspective is often more important than circumstances in determining success and happiness.",
    genre: ["Self-Help", "Psychology", "Motivation"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/482579.Attitude_Is_Everything",
    order: 10,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "11",
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    image: getAssetPath("/images/Books/48_Laws_of_Power.webp"),
    coverImage: getAssetPath("/images/Books/48_Laws_of_Power.webp"),
    description:
      "A amoral, cunning, ruthless, and instructive manual on gaining and maintaining power",
    review:
      "Greene's analysis of historical power dynamics provides fascinating insights into human behavior and social influence. While some laws may seem Machiavellian, understanding these principles has helped me navigate complex social and professional situations more effectively. The historical examples make abstract concepts concrete and memorable.",
    genre: ["Psychology", "History", "Self-Help"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/1303.The_48_Laws_of_Power",
    order: 11,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "12",
    title: "Influence: The Psychology of Persuasion",
    author: "Robert B. Cialdini",
    image: getAssetPath(
      "/images/Books/Influence_The_Psychology_Of_Persuasion.jpg"
    ),
    coverImage: getAssetPath(
      "/images/Books/Influence_The_Psychology_Of_Persuasion.jpg"
    ),
    description: "The classic book on the psychology of persuasion",
    review:
      'Cialdini\'s exploration of the six principles of influence (reciprocity, commitment, social proof, authority, liking, and scarcity) has been invaluable in understanding how and why people say "yes." This knowledge has improved my communication skills and helped me recognize when these principles are being used on me. The real-world examples make the concepts easy to understand and apply.',
    genre: ["Psychology", "Business", "Marketing"],
    goodreadsLink: "https://www.goodreads.com/book/show/28815.Influence",
    order: 12,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "13",
    title: "The Compound Effect",
    author: "Darren Hardy",
    image: getAssetPath("/images/Books/The_Compound_Effect.jpg"),
    coverImage: getAssetPath("/images/Books/The_Compound_Effect.jpg"),
    description: "Jumpstart your income, your life, your success",
    review:
      "Hardy's exploration of how small, consistent actions compound over time has been transformative in my approach to personal and professional growth. The practical strategies for creating positive habits and eliminating negative ones have helped me make meaningful progress toward my goals. The concept that success is built through daily disciplines rather than dramatic changes resonates deeply.",
    genre: ["Self-Help", "Personal Development", "Business"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/9420697-the-compound-effect",
    order: 13,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "14",
    title: "How to Talk to Anyone",
    author: "Leil Lowndes",
    image: getAssetPath("/images/Books/How_t0_Talk_To_Anyone.webp"),
    coverImage: getAssetPath("/images/Books/How_t0_Talk_To_Anyone.webp"),
    description: "92 Little Tricks for Big Success in Relationships",
    review:
      "Lowndes provides practical, actionable communication techniques that have improved my social and professional interactions. The book's approach to building rapport, active listening, and nonverbal communication has been particularly valuable. I've found that implementing even a few of these techniques has significantly enhanced my ability to connect with others.",
    genre: ["Communication", "Self-Help", "Psychology"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/35210.How_to_Talk_to_Anyone",
    order: 14,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "15",
    title: "Read People Like a Book",
    author: "Patrick King",
    image: getAssetPath("/images/Books/Read_People_Like_A_Book.jpg"),
    coverImage: getAssetPath("/images/Books/Read_People_Like_A_Book.jpg"),
    description:
      "How to Analyze, Understand, and Predict People's Emotions, Thoughts, Intentions, and Behaviors",
    review:
      "King offers practical insights into understanding human behavior through nonverbal cues, speech patterns, and contextual analysis. The techniques for reading micro-expressions and body language have been particularly useful in improving my emotional intelligence and interpersonal awareness. This book has helped me become more attuned to the subtleties of human communication.",
    genre: ["Psychology", "Communication", "Self-Help"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/56199402-read-people-like-a-book",
    order: 15,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "16",
    title: "Blue Ocean Strategy",
    author: "W. Chan Kim & Renée Mauborgne",
    image: getAssetPath("/images/Books/Bluw_Ocean_Strategy.png"),
    coverImage: getAssetPath("/images/Books/Bluw_Ocean_Strategy.png"),
    description:
      "How to Create Uncontested Market Space and Make the Competition Irrelevant",
    review:
      "Kim and Mauborgne present a compelling framework for creating new market spaces rather than competing in existing ones. The concept of value innovation—simultaneously pursuing differentiation and low cost—has influenced my approach to business strategy and product development. The case studies provide practical examples of how companies have successfully implemented blue ocean strategies.",
    genre: ["Business", "Strategy", "Marketing"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/4898.Blue_Ocean_Strategy",
    order: 16,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "17",
    title: "One Thousand Ways to Make $1000",
    author: "F.C. Minaker",
    image: getAssetPath("/images/Books/One_Thousand_Ways_to_Make_$1000.png"),
    coverImage: getAssetPath(
      "/images/Books/One_Thousand_Ways_to_Make_$1000.png"
    ),
    description:
      "Practical suggestions, plans and ideas for the man who needs more money",
    review:
      "Despite being written decades ago, this book offers timeless principles of entrepreneurship and wealth creation. The diverse business ideas and practical approach to starting small have been inspiring. What I found most valuable was the emphasis on resourcefulness, creativity, and taking action—principles that remain relevant in today's economy.",
    genre: ["Business", "Entrepreneurship", "Finance"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/27424325-one-thousand-ways-to-make-1000",
    order: 17,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "18",
    title: "The Warren Buffett Way",
    author: "Robert G. Hagstrom",
    image: getAssetPath("/images/Books/Warren_Buffett_Way.webp"),
    coverImage: getAssetPath("/images/Books/Warren_Buffett_Way.webp"),
    description: "Investment Strategies of the World's Greatest Investor",
    review:
      "Hagstrom provides a comprehensive analysis of Buffett's investment philosophy and methodology. The principles of focusing on business fundamentals, having a margin of safety, and investing for the long term have significantly influenced my approach to investing. The case studies of Buffett's major investments offer practical examples of these principles in action.",
    genre: ["Finance", "Investing", "Business"],
    goodreadsLink:
      "https://goodreads.com/book/show/209956.The_Warren_Buffett_Way",
    order: 18,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "19",
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    image: getAssetPath(
      "/images/Books/Think_and_Grow_Rich_by_Napoleon_hill.jpg"
    ),
    coverImage: getAssetPath(
      "/images/Books/Think_and_Grow_Rich_by_Napoleon_hill.jpg"
    ),
    description:
      "Think and Grow Rich distills key principles of success, stressing the power of desire, belief, persistence, and specific goal-setting. It encourages mindset shifts and actionable steps to achieve financial and personal wealth through focused thought and self-confidence.",
    review:
      'This timeless classic offers powerful insights into the psychology of success. Hill\'s principles of desire, faith, and persistence have been instrumental in shaping my mindset toward achievement. The concept of the "Master Mind" alliance particularly resonated with me, showing the importance of surrounding yourself with the right people.',
    genre: ["Self-Help", "Business", "Personal Development", "Finance"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/30186948-think-and-grow-rich",
    order: 19,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "20",
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    image: getAssetPath(
      "/images/Books/how_to_win_friends_and_influence_people.jpg"
    ),
    coverImage: getAssetPath(
      "/images/Books/how_to_win_friends_and_influence_people.jpg"
    ),
    description:
      "How to Win Friends and Influence People offers practical strategies to improve communication, build genuine relationships, gain trust, and persuade others effectively. It emphasizes empathy, active listening, and positive reinforcement to foster personal and professional success.",
    review:
      "Carnegie's principles on human relations have been invaluable in both my personal and professional life. The simple yet profound advice on how to genuinely connect with others, handle disagreements, and influence people positively has transformed my approach to communication and leadership.",
    genre: ["Self-Help", "Psychology", "Business", "Communication"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/4865.How_to_Win_Friends_Influence_People",
    order: 20,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "21",
    title: "The 5 AM Club",
    author: "Robin Sharma",
    image: getAssetPath("/images/Books/The_5_AM_Club.jpg"),
    coverImage: getAssetPath("/images/Books/The_5_AM_Club.jpg"),
    description:
      "The 5 AM Club presents a revolutionary morning routine that helps you maximize productivity, improve health, and achieve success. Through the 20/20/20 formula, the book teaches how to use the first hour of your day to move (exercise), reflect (meditate/journal), and grow (learn). It emphasizes that world-class performance comes from owning your morning and establishing powerful daily habits.",
    review:
      'This book completely transformed my approach to mornings and productivity. Sharma\'s 20/20/20 formula provided me with a practical framework that boosted my energy, clarity, and focus throughout the day. The concept of using the "Victory Hour" to invest in my physical, mental, and spiritual growth has been game-changing. While the habit was difficult to establish initially, the benefits to my overall wellbeing and productivity have been absolutely worth the effort.',
    genre: ["Self-Help", "Personal Development", "Productivity", "Habits"],
    goodreadsLink: "https://www.goodreads.com/book/show/37502596-the-5-am-club",
    order: 21,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "22",
    title: "Atomic Habits",
    author: "James Clear",
    image: getAssetPath("/images/Books/Atomic_habits.jpg"),
    coverImage: getAssetPath("/images/Books/Atomic_habits.jpg"),
    description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    review:
      "Clear presents a practical and systematic approach to habit formation that has transformed how I approach personal development. The concept of making tiny, incremental improvements that compound over time has been particularly impactful. His four-step model of cue, craving, response, and reward provides a simple framework for understanding and changing habits.",
    genre: ["Self-Help", "Personal Development", "Psychology", "Habits"],
    goodreadsLink: "https://www.goodreads.com/book/show/40121378-atomic-habits",
    order: 22,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "23",
    title: "Flow",
    author: "Mihaly Csikszentmihalyi",
    image: getAssetPath("/images/Books/Flow.jpg"),
    coverImage: getAssetPath("/images/Books/Flow.jpg"),
    description: "The Psychology of Optimal Experience",
    review:
      "Csikszentmihalyi's exploration of the flow state—that feeling of being completely absorbed in a challenging but manageable task—has profoundly influenced how I approach work and leisure. Understanding the conditions that create flow has helped me design my environment and activities to maximize engagement and satisfaction. The book offers valuable insights into achieving greater enjoyment and meaning in everyday life.",
    genre: ["Psychology", "Self-Help", "Philosophy", "Science"],
    goodreadsLink: "https://www.goodreads.com/book/show/66354.Flow",
    order: 23,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "24",
    title: "Ikigai",
    author: "Héctor García & Francesc Miralles",
    image: getAssetPath("/images/Books/Ikigai.jpg"),
    coverImage: getAssetPath("/images/Books/Ikigai.jpg"),
    description: "The Japanese Secret to a Long and Happy Life",
    review:
      "This book introduces the powerful Japanese concept of ikigai—finding the intersection between what you love, what you're good at, what the world needs, and what you can be paid for. The exploration of longevity in Japanese culture, particularly in Okinawa, provides fascinating insights into living a purposeful and balanced life. I've found the principles of maintaining active social connections, staying physically active, and pursuing meaningful work to be particularly valuable.",
    genre: ["Self-Help", "Philosophy", "Psychology", "Cultural"],
    goodreadsLink: "https://www.goodreads.com/book/show/124950497-ikigai",
    order: 24,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "25",
    title: "Mindset",
    author: "Carol S. Dweck",
    image: getAssetPath(
      "/images/Books/Mindset_The_New_Psychology_of_success.webp"
    ),
    coverImage: getAssetPath(
      "/images/Books/Mindset_The_New_Psychology_of_success.webp"
    ),
    description: "The New Psychology of Success",
    review:
      "Dweck's research on fixed versus growth mindsets has fundamentally changed how I approach challenges and learning. Understanding that abilities can be developed through dedication and hard work has helped me embrace failures as opportunities for growth rather than evidence of inadequacy. The practical strategies for developing a growth mindset have been invaluable in both personal and professional contexts.",
    genre: ["Psychology", "Self-Help", "Education", "Personal Development"],
    goodreadsLink: "https://www.goodreads.com/book/show/40745.Mindset",
    order: 25,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "26",
    title: "Never Split the Difference",
    author: "Chris Voss",
    image: getAssetPath("/images/Books/Never_Split_The_Difference.jpg"),
    coverImage: getAssetPath("/images/Books/Never_Split_The_Difference.jpg"),
    description: "Negotiating As If Your Life Depended On It",
    review:
      "Voss, a former FBI hostage negotiator, provides practical negotiation techniques that have improved my communication in both business and personal contexts. The emphasis on emotional intelligence, active listening, and tactical empathy has been particularly valuable. Techniques like mirroring, labeling emotions, and calibrated questions have helped me navigate difficult conversations more effectively.",
    genre: ["Business", "Psychology", "Communication", "Self-Help"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/26156469-never-split-the-difference",
    order: 26,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "27",
    title: "Rework",
    author: "Jason Fried & David Heinemeier Hansson",
    image: getAssetPath("/images/Books/Rework.webp"),
    coverImage: getAssetPath("/images/Books/Rework.webp"),
    description: "Change the Way You Work Forever",
    review:
      "This refreshingly contrarian guide to business challenges conventional wisdom about what it takes to run a successful company. Fried and Hansson's practical, no-nonsense advice on staying small, embracing constraints, and focusing on the essential has influenced my approach to entrepreneurship and project management. Their emphasis on productivity over busyness and action over planning resonates deeply with my own experiences.",
    genre: ["Business", "Entrepreneurship", "Productivity", "Management"],
    goodreadsLink: "https://www.goodreads.com/book/show/6732019-rework",
    order: 27,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "28",
    title: "So Good They Can't Ignore You",
    author: "Cal Newport",
    image: getAssetPath("/images/Books/So_good_they_can't_ingore_you.jpg"),
    coverImage: getAssetPath("/images/Books/So_good_they_can't_ingore_you.jpg"),
    description: "Why Skills Trump Passion in the Quest for Work You Love",
    review:
      'Newport challenges the common advice to "follow your passion" and instead advocates for developing rare and valuable skills—what he calls "career capital." His argument that passion follows from mastery rather than the other way around has fundamentally shifted my approach to career development. The concepts of deliberate practice and the craftsman mindset have been particularly influential in my professional growth strategy.',
    genre: ["Career", "Self-Help", "Personal Development", "Business"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/13525945-so-good-they-can-t-ignore-you",
    order: 28,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "29",
    title: "Start with Why",
    author: "Simon Sinek",
    image: getAssetPath("/images/Books/Start_with_why.webp"),
    coverImage: getAssetPath("/images/Books/Start_with_why.webp"),
    description: "How Great Leaders Inspire Everyone to Take Action",
    review:
      'Sinek\'s exploration of the power of purpose has transformed how I think about leadership and communication. The Golden Circle concept—starting with "why" before addressing "how" and "what"—provides a powerful framework for inspiring action and building loyalty. This book has helped me articulate my own purpose more clearly and create more compelling messages in both personal and professional contexts.',
    genre: ["Business", "Leadership", "Psychology", "Marketing"],
    goodreadsLink: "https://www.goodreads.com/book/show/7108725-start-with-why",
    order: 29,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "30",
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    image: getAssetPath(
      "/images/Books/The_7_Habits_of_Highly_Effective_People.jpg"
    ),
    coverImage: getAssetPath(
      "/images/Books/The_7_Habits_of_Highly_Effective_People.jpg"
    ),
    description: "Powerful Lessons in Personal Change",
    review:
      "Covey's principles-centered approach to personal and interpersonal effectiveness has provided me with a comprehensive framework for growth and leadership. The progression from dependence to independence to interdependence offers a powerful roadmap for personal development. Concepts like beginning with the end in mind, putting first things first, and seeking to understand before being understood have become guiding principles in my life.",
    genre: ["Self-Help", "Personal Development", "Leadership", "Business"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/36072.The_7_Habits_of_Highly_Effective_People",
    order: 30,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "31",
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: getAssetPath("/images/Books/The_Alchemist.jpg"),
    coverImage: getAssetPath("/images/Books/The_Alchemist.jpg"),
    description: "A Fable About Following Your Dream",
    review:
      "This allegorical novel about a shepherd boy's journey to find his personal legend has been a source of inspiration and reflection. Coelho's simple yet profound storytelling conveys timeless wisdom about following one's dreams, recognizing opportunities, and finding meaning in the journey itself. The concept that \"when you want something, all the universe conspires in helping you to achieve it\" has been particularly encouraging during challenging times.",
    genre: ["Fiction", "Philosophy", "Spirituality", "Self-Help"],
    goodreadsLink: "https://www.goodreads.com/book/show/865.The_Alchemist",
    order: 31,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "32",
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    image: getAssetPath("/images/Books/The_Intelligent_Invester.jpg"),
    coverImage: getAssetPath("/images/Books/The_Intelligent_Invester.jpg"),
    description: "The Definitive Book on Value Investing",
    review:
      "Graham's timeless principles of value investing have provided me with a solid foundation for making rational investment decisions. The concepts of margin of safety, Mr. Market, and the distinction between investing and speculating have been particularly valuable in developing my investment philosophy. Despite being written decades ago, the psychological insights and fundamental analysis approach remain remarkably relevant in today's market environment.",
    genre: ["Finance", "Investing", "Business", "Economics"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/106835.The_Intelligent_Investor",
    order: 32,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "33",
    title: "The Magic of Thinking Big",
    author: "David J. Schwartz",
    image: getAssetPath("/images/Books/The_magic_of_thinking_big.jpg"),
    coverImage: getAssetPath("/images/Books/The_magic_of_thinking_big.jpg"),
    description:
      "Acquire the Secrets of Success... Achieve Everything You've Always Wanted",
    review:
      "Schwartz provides practical strategies for overcoming limiting beliefs and developing the confidence to pursue ambitious goals. The book's emphasis on mindset as a determinant of success has been particularly impactful in helping me recognize and overcome self-imposed limitations. The actionable techniques for building confidence, thinking creatively, and managing relationships have been valuable in both personal and professional contexts.",
    genre: ["Self-Help", "Psychology", "Personal Development", "Business"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/759945.The_Magic_of_Thinking_Big",
    order: 33,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "34",
    title: "The Millionaire Fastlane",
    author: "MJ DeMarco",
    image: getAssetPath("/images/Books/The_Millionaire_Fastlane.webp"),
    coverImage: getAssetPath("/images/Books/The_Millionaire_Fastlane.webp"),
    description: "Crack the Code to Wealth and Live Rich for a Lifetime",
    review:
      'DeMarco challenges conventional financial wisdom and presents an alternative path to wealth through entrepreneurship and creating scalable business systems. His critique of the "slow lane" approach of traditional saving and investing resonated with my own observations about wealth creation. The principles of creating businesses that provide value at scale and leverage the power of mathematics have influenced my approach to entrepreneurship and financial planning.',
    genre: ["Finance", "Business", "Entrepreneurship", "Self-Help"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/18872437-the-millionaire-fastlane",
    order: 34,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "35",
    title: "The One Thing",
    author: "Gary Keller & Jay Papasan",
    image: getAssetPath("/images/Books/The_One_Thing.jpg"),
    coverImage: getAssetPath("/images/Books/The_One_Thing.jpg"),
    description: "The Surprisingly Simple Truth Behind Extraordinary Results",
    review:
      'Keller and Papasan make a compelling case for the power of focus in achieving extraordinary results. The concept of the "focusing question" has been a valuable tool for cutting through complexity and identifying the most impactful actions. The book\'s insights on time blocking, habit formation, and purpose-driven productivity have helped me become more effective in both personal and professional pursuits.',
    genre: ["Self-Help", "Business", "Productivity", "Personal Development"],
    goodreadsLink: "https://www.goodreads.com/book/show/16256798-the-one-thing",
    order: 35,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "36",
    title: "The Power of Your Subconscious Mind",
    author: "Joseph Murphy",
    image: getAssetPath(
      "/images/Books/The_Power_of_your_Subconscious_Mind.jpg"
    ),
    coverImage: getAssetPath(
      "/images/Books/The_Power_of_your_Subconscious_Mind.jpg"
    ),
    description: "Unlock the Secrets Within",
    review:
      "Murphy explores how the subconscious mind influences our thoughts, behaviors, and outcomes, offering practical techniques for harnessing its power. The book's blend of psychological principles and spiritual insights provides a unique perspective on personal transformation. The visualization and affirmation techniques have been particularly useful in helping me overcome limiting beliefs and cultivate a more positive mindset.",
    genre: ["Self-Help", "Psychology", "Spirituality", "Personal Development"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/68984.The_Power_of_Your_Subconscious_Mind",
    order: 36,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "37",
    title: "The Richest Man in Babylon",
    author: "George S. Clason",
    image: getAssetPath("/images/Books/The_Richest_Man_In_Babylon.webp"),
    coverImage: getAssetPath("/images/Books/The_Richest_Man_In_Babylon.webp"),
    description: "Classic Advice for a Modern Financial World",
    review:
      "Clason presents timeless financial wisdom through engaging parables set in ancient Babylon. The simple yet profound principles—pay yourself first, live below your means, invest wisely, and continuously learn—have provided me with a solid foundation for personal finance. Despite being written nearly a century ago, these principles remain remarkably relevant in today's financial landscape.",
    genre: ["Finance", "Personal Finance", "Self-Help", "Business"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/1052.The_Richest_Man_in_Babylon",
    order: 37,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "38",
    title: "Leaders Eat Last",
    author: "Simon Sinek",
    image: getAssetPath("/images/Books/Leaders_Eat_Last.jpg"),
    coverImage: getAssetPath("/images/Books/Leaders_Eat_Last.jpg"),
    description: "Why Some Teams Pull Together and Others Don't",
    review:
      'Sinek explores how great leaders create environments where people naturally work together to achieve remarkable things. The book\'s insights into leadership, trust, and organizational culture have been invaluable in understanding how to build and lead effective teams. The concept of the "Circle of Safety" has particularly influenced my approach to leadership and team building.',
    genre: ["Leadership", "Business", "Psychology", "Management"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/16071764-leaders-eat-last",
    order: 38,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "39",
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    image: getAssetPath("/images/Books/Mans_Search_For_Meaning.jpg"),
    coverImage: getAssetPath("/images/Books/Mans_Search_For_Meaning.jpg"),
    description: "The Classic Tribute to Hope from the Holocaust",
    review:
      "Frankl's profound exploration of finding meaning in suffering has been transformative in my understanding of human resilience and purpose. His development of logotherapy and the concept that meaning can be found in any circumstance has provided a powerful framework for navigating life's challenges. This book has helped me develop a deeper appreciation for the power of perspective and purpose.",
    genre: ["Psychology", "Philosophy", "Memoir", "Self-Help"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning",
    order: 39,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "40",
    title: "Can't Hurt Me",
    author: "David Goggins",
    image: getAssetPath("/images/Books/Can't_Hurt_Me.jpg"),
    coverImage: getAssetPath("/images/Books/Can't_Hurt_Me.jpg"),
    description: "Master Your Mind and Defy the Odds",
    review:
      'Goggins\' story of overcoming extreme adversity through mental toughness and relentless determination has been incredibly inspiring. His concept of the "40% rule" and the importance of embracing suffering to grow has fundamentally changed how I approach challenges. This book has taught me the power of pushing beyond perceived limits and the importance of mental resilience.',
    genre: ["Self-Help", "Biography", "Motivation", "Psychology"],
    goodreadsLink: "https://www.goodreads.com/book/show/41721428-can-t-hurt-me",
    order: 40,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "41",
    title: "Tools of Titans",
    author: "Tim Ferriss",
    image: getAssetPath("/images/Books/Tools_of_Titans.jpg"),
    coverImage: getAssetPath("/images/Books/Tools_of_Titans.jpg"),
    description:
      "The Tactics, Routines, and Habits of Billionaires, Icons, and World-Class Performers",
    review:
      "Ferriss compiles insights from hundreds of interviews with successful people across various fields. The book offers practical tools, strategies, and mindsets that have helped me optimize my daily routines and approach to personal development. The diverse perspectives and actionable advice make this a valuable resource for continuous improvement.",
    genre: ["Self-Help", "Business", "Personal Development", "Biography"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/31823677-tools-of-titans",
    order: 41,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "42",
    title: "The Courage to Be Disliked",
    author: "Ichiro Kishimi & Fumitake Koga",
    image: getAssetPath("/images/Books/The_Courage_To_Be_Disliked.jpg"),
    coverImage: getAssetPath("/images/Books/The_Courage_To_Be_Disliked.jpg"),
    description:
      "How to Free Yourself, Change your Life and Achieve Real Happiness",
    review:
      "This book presents Adlerian psychology through a dialogue format, offering profound insights into personal freedom and happiness. The concepts of separation of tasks and the courage to be disliked have helped me develop healthier relationships and a more authentic approach to life. The book's practical philosophy has been transformative in my personal growth journey.",
    genre: ["Psychology", "Philosophy", "Self-Help", "Personal Development"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/43306206-the-courage-to-be-disliked",
    order: 42,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "43",
    title: "Who Moved My Cheese?",
    author: "Spencer Johnson",
    image: getAssetPath("/images/Books/Who_Moved_My_Cheese.jpg"),
    coverImage: getAssetPath("/images/Books/Who_Moved_My_Cheese.jpg"),
    description:
      "An Amazing Way to Deal with Change in Your Work and in Your Life",
    review:
      "Johnson's simple yet powerful parable about dealing with change has provided valuable insights into adapting to life's inevitable changes. The book's message about anticipating, adapting to, and enjoying change has helped me develop a more flexible and positive approach to transitions in both personal and professional life.",
    genre: ["Self-Help", "Business", "Psychology", "Personal Development"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/4894.Who_Moved_My_Cheese_",
    order: 43,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "44",
    title: "How We Learn",
    author: "Benedict Carey",
    image: getAssetPath("/images/Books/How_We_Learn.jpg"),
    coverImage: getAssetPath("/images/Books/How_We_Learn.jpg"),
    description: "The Surprising Truth About When, Where, and Why It Happens",
    review:
      "Carey presents fascinating research about how our brains learn and retain information, challenging many common assumptions about effective learning. The practical strategies for optimizing learning through spacing, testing, and sleep have significantly improved my approach to acquiring new skills and knowledge. This book has been particularly valuable in my continuous learning journey.",
    genre: ["Education", "Psychology", "Science", "Self-Help"],
    goodreadsLink: "https://www.goodreads.com/book/show/18693655-how-we-learn",
    order: 44,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "45",
    title: "Ego Is the Enemy",
    author: "Ryan Holiday",
    image: getAssetPath("/images/Books/Ego_Is_The_Enemy.jpg"),
    coverImage: getAssetPath("/images/Books/Ego_Is_The_Enemy.jpg"),
    description: "The Fight to Master Our Greatest Opponent",
    review:
      "Holiday explores how ego can be our biggest obstacle to success and growth. The book's insights into humility, self-awareness, and continuous learning have helped me develop a more balanced approach to achievement and personal development. The historical examples and practical advice make this a valuable guide for maintaining perspective and staying focused on what truly matters.",
    genre: ["Self-Help", "Psychology", "Philosophy", "Personal Development"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/27036528-ego-is-the-enemy",
    order: 45,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "46",
    title: "The 80/20 Principle",
    author: "Richard Koch",
    image: getAssetPath("/images/Books/The_80_20_Principle.jpg"),
    coverImage: getAssetPath("/images/Books/The_80_20_Principle.jpg"),
    description: "The Secret to Achieving More with Less",
    review:
      "Koch explains how the Pareto Principle can be applied to improve efficiency and effectiveness in all areas of life. The concept that 80% of results come from 20% of efforts has revolutionized how I approach productivity and decision-making. This book has helped me focus on high-impact activities and eliminate unnecessary work.",
    genre: ["Business", "Productivity", "Self-Help", "Economics"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/1782.The_80_20_Principle",
    order: 46,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "47",
    title: "The 4-Hour Work Week",
    author: "Tim Ferriss",
    image: getAssetPath("/images/Books/The_4-Hour_Work_Week.jpg"),
    coverImage: getAssetPath("/images/Books/The_4-Hour_Work_Week.jpg"),
    description: "Escape 9-5, Live Anywhere, and Join the New Rich",
    review:
      "Ferriss challenges conventional wisdom about work and lifestyle design, offering practical strategies for creating more freedom and flexibility. The concepts of automation, outsourcing, and lifestyle design have influenced my approach to work and productivity. While the title is provocative, the book offers valuable insights into working smarter, not harder.",
    genre: ["Business", "Self-Help", "Productivity", "Entrepreneurship"],
    goodreadsLink:
      "https://www.goodreads.com/book/show/368593.The_4_Hour_Workweek",
    order: 47,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "48",
    title: "Principles",
    author: "Ray Dalio",
    image: getAssetPath("/images/Books/Principles_By_Ray_Dalio.jpg"),
    coverImage: getAssetPath("/images/Books/Principles_By_Ray_Dalio.jpg"),
    description: "Life and Work",
    review:
      "Dalio shares the principles that guided his success in life and business, offering a framework for decision-making and personal growth. The emphasis on radical truth, radical transparency, and systematic thinking has influenced my approach to problem-solving and personal development. The book's practical wisdom and real-world applications make it a valuable resource for continuous improvement.",
    genre: ["Business", "Self-Help", "Philosophy", "Personal Development"],
    goodreadsLink: "https://www.goodreads.com/book/show/34536488-principles",
    order: 48,
    createdAt: new Date().toISOString(),
  },
];

// Mock Certifications
export const certifications: Certification[] = [
  {
    _id: "1",
    title: "Python 3 Programming",
    issuer: "Coursera & University of Michigan",
    description:
      "This specialization teaches the fundamentals of Python 3 programming. It covers Python basics, data structures, file handling, and advanced concepts like object-oriented programming. The specialization includes hands-on projects to build practical programming skills.",
    image: "/images/certificates/Python_3_Programming.png",
    issueDate: "2024-11-15",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/DL6IDFS65YVP",
    skills: [
      "Python",
      "Programming",
      "Data Structures",
      "Object-Oriented Programming",
      "File Handling",
    ],
    order: 1,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "2",
    title: "Generative AI for Software Developers",
    issuer: "Coursera & IBM",
    description:
      "This specialization provides a comprehensive introduction to generative AI for software developers. It covers the fundamentals of generative models, prompt engineering, and how to integrate generative AI into software applications. The program includes practical projects to apply these concepts in real-world scenarios.",
    image: "/images/certificates/Generative_AI_for_Software_Developers.png",
    issueDate: "2024-11-25",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/CONL6GU9WBG4",
    skills: [
      "Generative AI",
      "Prompt Engineering",
      "Software Development",
      "AI Integration",
      "Machine Learning",
    ],
    order: 2,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "3",
    title: "Foundations of Cybersecurity",
    issuer: "Coursera & Google",
    description:
      "This course introduces the core concepts of cybersecurity and provides a foundation for understanding security principles, threats, and defense mechanisms. It covers security frameworks, risk management, and basic security controls that organizations implement to protect their digital assets.",
    image: "/images/certificates/Foundations_of_Cybersecurity.png",
    issueDate: "2024-12-08",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/4RPCZ4P05PKB",
    skills: [
      "Cybersecurity",
      "Security Frameworks",
      "Risk Management",
      "Network Security",
      "Security Controls",
    ],
    order: 3,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "4",
    title: "Introduction to HTML, CSS, & JavaScript",
    issuer: "Coursera & IBM",
    description:
      "This course provides a comprehensive introduction to the three core technologies of web development: HTML for structure, CSS for styling, and JavaScript for interactivity. It covers the fundamentals of creating and styling web pages and adding dynamic functionality through JavaScript.",
    image: "/images/certificates/Introduction_to_HTML_CSS_&_JavaScript.png",
    issueDate: "2024-12-05",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/NQN98HM46LB0",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Web Development",
      "Front-end Development",
    ],
    order: 4,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "5",
    title: "Object-Oriented Design",
    issuer: "Coursera & University of Alberta",
    description:
      "This course explores the principles and concepts of object-oriented design and programming. It covers class design, inheritance, polymorphism, and design patterns. The course teaches how to apply these concepts to create flexible, maintainable, and reusable software systems.",
    image: "/images/certificates/Object-Oriented_Design.png",
    issueDate: "2024-12-24",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/K1N2D79JAUV8",
    skills: [
      "Object-Oriented Programming",
      "Software Design",
      "Design Patterns",
      "UML",
      "Software Architecture",
    ],
    order: 5,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "6",
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera & Stanford University",
    description:
      "This course provides a comprehensive introduction to supervised machine learning, focusing on regression and classification algorithms. It covers linear regression, logistic regression, gradient descent, and the fundamentals of model training and evaluation.",
    image: "/images/certificates/Supervised_Machine_Learning.png",
    issueDate: "2025-04-18",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/R48M58N8ANIF",
    skills: [
      "Machine Learning",
      "Regression",
      "Classification",
      "Python",
      "Model Evaluation",
    ],
    order: 6,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "7",
    title: "Programming with JavaScript",
    issuer: "Coursera & Meta",
    description:
      "This course teaches the fundamentals of programming with JavaScript. It covers core concepts like variables, data types, functions, loops, and DOM manipulation. The course includes practical exercises to build interactive web applications using JavaScript.",
    image: "/images/certificates/Programming_with_JavaScript.png",
    issueDate: "2025-04-18",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/IUJC6K6I5RWP",
    skills: [
      "JavaScript",
      "Web Development",
      "DOM Manipulation",
      "Front-end Development",
      "Programming Logic",
    ],
    order: 7,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "8",
    title: "Introduction to Java",
    issuer: "Coursera & Learn Quest",
    description:
      "This course introduces the fundamentals of Java programming. It covers basic syntax, object-oriented concepts, data structures, and file I/O in Java. The course includes hands-on programming assignments to build practical Java development skills.",
    image: "/images/certificates/Introduction_to_Java.png",
    issueDate: "2023-12-23",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/MUSB84MUEDSQ",
    skills: [
      "Java",
      "Object-Oriented Programming",
      "Data Structures",
      "Software Development",
      "Programming",
    ],
    order: 8,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "9",
    title: "Inheritance and Data Structures in Java",
    issuer: "Coursera & University of Pennsylvania",
    description:
      "This course builds on basic Java knowledge to explore advanced concepts like inheritance, interfaces, and data structures. It covers how to implement and use common data structures in Java and how to leverage inheritance for code reuse and extensibility.",
    image: "/images/certificates/Inheritance_and_Data_Structures_in_Java.png",
    issueDate: "2024-05-24",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/UKBCUY4VGUWH",
    skills: [
      "Java",
      "Inheritance",
      "Data Structures",
      "Object-Oriented Programming",
      "Algorithms",
    ],
    order: 9,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "10",
    title: "LinkedIn Workshop",
    issuer: "GrowthSchool",
    description:
      "This workshop provides comprehensive strategies for optimizing LinkedIn profiles and leveraging the platform for professional networking and career growth. It covers profile optimization, content creation, engagement strategies, and techniques for building a professional brand on LinkedIn.",
    image: "/images/certificates/Linkedin_Workshop.png",
    issueDate: "2025-03-19",
    credentialUrl:
      "https://learners.growthschool.io/certificate/00bac5ff-9844-4120-9e57-fabd081a7027",
    skills: [
      "LinkedIn",
      "Personal Branding",
      "Professional Networking",
      "Content Strategy",
      "Career Development",
    ],
    order: 10,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "11",
    title: "2 Day AI Mastery Workshop",
    issuer: "Outskill",
    description:
      "This intensive two-day workshop covers the fundamentals and practical applications of artificial intelligence. Participants learn about machine learning algorithms, neural networks, and how to implement AI solutions for real-world problems. The workshop includes hands-on exercises and project-based learning.",
    image: "/images/certificates/2_Day_AI_Mastery_Workshop.png",
    issueDate: "2025-04-23",
    credentialUrl: "",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Neural Networks",
      "AI Applications",
      "Problem Solving",
    ],
    order: 11,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "12",
    title: "Ingenious Hackathon 6.0",
    issuer: "Ahmedabad University",
    description:
      "This certificate recognizes participation and achievement in the Ingenious Hackathon 6.0, a competitive event where participants develop innovative solutions to real-world problems within a limited timeframe. The hackathon focuses on creativity, technical skills, and teamwork in developing functional prototypes.",
    image: "/images/certificates/AU_Hackathon.png",
    issueDate: "2025-03-19",
    credentialUrl: "",
    skills: [
      "Hackathon",
      "Problem Solving",
      "Software Development",
      "Teamwork",
      "Innovation",
    ],
    order: 12,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "13",
    title: "GitHub Foundations",
    issuer: "GitHub",
    description:
      "This certification validates proficiency in GitHub fundamentals, including repository management, version control, collaboration workflows, and best practices for using GitHub effectively. It demonstrates the ability to use GitHub for project management and code collaboration.",
    image: "/images/certificates/GitHub_Foundations.png",
    issueDate: "2025-02-02",
    credentialUrl:
      "https://www.credly.com/badges/279d09f0-6b04-417e-82df-310670f7043a/print",
    skills: [
      "GitHub",
      "Version Control",
      "Git",
      "Repository Management",
      "Collaboration",
      "Project Management",
    ],
    order: 13,
    createdAt: new Date().toISOString(),
  },
];

// Mock contact form submission
export const submitMockContactForm = async (): Promise<{
  success: boolean;
  message: string;
}> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Always return success for mock data
  return {
    success: true,
    message:
      "Thank you for your message! This is a mock response as the site is currently deployed on GitHub Pages without a backend server.",
  };
};
