export const projectsData = [
  {
    id: "Live-News-API-Project",
    title: "Live News API Project",
    subtitle: "A real-time news aggregation API that fetches and displays the latest news from various sources.",
    category: "API Development",
    image: "https://tse1.mm.bing.net/th/id/OIP.wOQ_HwUwjFXdIAejB8Dt6wHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    tags: [ "ReactJS","Bootstrap", "REST API"],
    github: "https://github.com/sangeethascodes/live-news-api-project",
    liveDemo: "https://live-news-api-projectt.vercel.app/",
    pitch: {
      elevatorPitch: "Smart Inventory is an end-to-end web application designed to eliminate inventory stock-outs and supply bottlenecks for retail businesses by providing real-time stock monitoring, automated low-stock notifications, and predictive sales forecasting.",
      problemStatement: "Small to mid-sized retail enterprises frequently struggle with manual stock logs, resulting in unexpected inventory shortages, delayed order fulfillment, and lost revenue during peak demand cycles.",
      solution: "Engineered a centralized real-time dashboard built with React.js and Node.js RESTful APIs. Implemented interactive Chart.js visualization for trend analysis and automated email notifications when item quantities drop below customizable threshold levels.",
      keyFeatures: [
        "Real-time stock count updating with web-socket updates",
        "Interactive analytics dashboard showing inventory turnover & velocity",
        "Automated reorder point calculation & email alerts",
        "Role-based access control (Admin, Manager, Warehouse Staff)",
        "CSV/PDF inventory report exporting for audit compliance"
      ],
      technicalArchitecture: [
        "Frontend: React.js SPA powered by Bootstrap 5 responsive layout and custom CSS glassmorphism components.",
        "Backend: RESTful API built with Express.js and Node.js for high-throughput transaction processing.",
        "Database: MongoDB with Mongoose ODM utilizing optimized indexing for fast search and aggregation pipelines.",
        "Security: JWT authentication with bcrypt password hashing and CORS middleware protection."
      ],
      myRole: "Lead Developer (Academic Capstone Project) - Responsible for architecture design, database schema modeling, API development, and frontend responsive UI implementation."
    }
  },
  {
    id: "cloud-healthcare-portal",
    title: "Movie Search Website",
    subtitle: "A responsive web application that allows users to search for movies, view details, and manage a personal watchlist.",
    category: "Movie Search Website",
    image: "https://wallpapercave.com/wp/wp9181096.jpg",
    tags: ["React.js", "Bootstrap", "REST API", "Django", "SQL Database"],
    github: "https://github.com/sangeethascodes/react-movie-search-website",
    liveDemo: "https://react-movie-search-website-zeta.vercel.app/",
    pitch: {
      elevatorPitch: "CarePulse simplifies the healthcare experience by enabling patients to book virtual doctor consultations, view lab results securely online, and track medical history in a unified, user-friendly digital portal.",
      problemStatement: "Patients often face friction when attempting to schedule appointments and retrieve medical lab test reports, while clinics face operational overhead managing physical paperwork and phone consultations.",
      solution: "Developed a responsive web platform that automates appointment scheduling, provides instant patient history access, and features an intuitive doctor availability calendar with real-time booking confirmation.",
      keyFeatures: [
        "Patient registration & encrypted personal health record portal",
        "Doctor appointment booking engine with slot reservation validation",
        "Lab test result uploader with instant downloadable PDF reports",
        "Prescription history & medicine reminder dashboard",
        "Mobile-first responsive interface tailored for all age demographics"
      ],
      technicalArchitecture: [
        "Frontend: React.js with modular component hierarchy, custom hooks for state management, and Bootstrap grid styling.",
        "Backend / Services: Node.js server managing patient records with strict validation pipelines.",
        "Database: Relational SQL database with normalization up to 3NF ensuring data integrity across patient and appointment tables.",
        "UI Design: Accessible high-contrast typography, violet glow accents, and responsive touch controls."
      ],
      myRole: "Full Stack Developer - Designed relational database schemas, built doctor schedule booking algorithms, and crafted the responsive healthcare portal UI."
    }
  },
  {
    id: "campus-event-manager",
    title: "Electricity Bill Board Project",
    subtitle: "Electricity Bill Board project displays applicant details in a clean, organized format, making it easy to view billing and personal information at a glance. The system allows authorized users to edit applicant records quickly, ensuring accurate and up-to-date details for efficient management.",
    category: "Applicant Record Handling",
    image: "https://static.vecteezy.com/system/resources/previews/032/410/530/original/electricity-energy-plan-source-and-distribution-illustration-vector.jpg",
    tags: ["React.js", "JavaScript ES6+","Django", "Bootstrap",'Postgres'],
    github: "https://github.com/sangeethascodes/eletricity_board_frontend_react_proj",
    liveDemo: "https://electricitybillboardproject.vercel.app/",
    pitch: {
      elevatorPitch: "Campus Hub connects students with campus workshops, hackathons, and cultural events through a single interactive portal featuring instant digital QR pass generation and attendance tracking.",
      problemStatement: "University event organizers rely on scattered registration forms, leading to double-bookings, inefficient attendance checks at venue entrances, and low student engagement.",
      solution: "Built a centralized student event portal where students can discover, register, and receive instant digital QR admission passes, while event hosts manage registrations and verify tickets via web scanners.",
      keyFeatures: [
        "Interactive event feed filtered by category, date, and department",
        "Instant registration with automated digital QR pass creation",
        "Organizer dashboard for registration limits, check-in tracking & analytics",
        "Calendar sync integration (Google Calendar & iCal)",
        "Feedback rating and post-event certificate distribution system"
      ],
      technicalArchitecture: [
        "Frontend: React 18 with React-Router for seamless single-page navigation and smooth tab transitions.",
        "Utilities: Dynamic QR code generation library, LocalStorage state persistence for demo caching, and Lucide icons.",
        "Styling: Bootstrap 5 flex utility framework combined with custom CSS dark-purple theme aesthetics."
      ],
      myRole: "Frontend Software Engineer - Spearheaded UI/UX design, client-side state management, registration routing, and mobile responsiveness."
    }
  },
  {
    id: "ecommerce-website",
    title: "Ecommerce Website",
    subtitle: "A convenient online storefront where customers can browse products, review item details, and manage their shopping cart.",
    category: "E-commerce",
    image: "https://www.weverve.com/wp-content/uploads/2020/10/ecommerce-1.jpg",
    tags: ["E-commerce", "Online Store", "Responsive Design"],
    github: "https://final-ecommerce-frontend-13qd.vercel.app/",
    liveDemo: "https://final-ecommerce-frontend-13qd.vercel.app/signup",
    pitch: {
      elevatorPitch: "Ecommerce Website brings product discovery and shopping together in one straightforward online storefront, helping customers explore available items and keep track of what they want to purchase.",
      problemStatement: "Customers need a simple way to discover products and organize potential purchases without relying on scattered product information or an inconvenient shopping experience.",
      solution: "The website presents products in an organized catalog with clear item details and a shopping cart, giving customers a direct path from browsing to reviewing their selections.",
      keyFeatures: [
        "Browse an organized collection of products",
        "View product information before making a selection",
        "Add products to a shopping cart and review selected items",
        "Navigate a responsive storefront on desktop and mobile",
        "Move through a clear shopping flow from product discovery to checkout"
      ],
      technicalArchitecture: [
        "Storefront: Product listings and item details are presented in a consistent, easy-to-browse interface.",
        "Shopping cart: Selected products are gathered in one place for review before checkout.",
        "Responsive design: The storefront layout adapts to different screen sizes and devices.",
        "User experience: Clear navigation connects product discovery, cart review, and the checkout flow."
      ],
      myRole: "Project Developer - Created an online shopping experience focused on product discovery, cart review, and a clear, responsive storefront."
    }
  }
];
