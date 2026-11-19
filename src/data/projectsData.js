export const projectsData = [
  {
    id: "Live-News-API-Project",
    title: "Live News API Project",
    subtitle: "A news feed presenting category-tagged story cards with headlines, summaries, bylines, and publication times.",
    category: "News Feed",
    image: "https://tse1.mm.bing.net/th/id/OIP.wOQ_HwUwjFXdIAejB8Dt6wHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    tags: ["ReactJS", "Bootstrap"],
    github: "https://github.com/sangeethascodes/live-news-api-project",
    liveDemo: "https://live-news-api-projectt.vercel.app/",
    pitch: {
      elevatorPitch: "The Live News page renders six preloaded story cards, each with a category, headline, summary, byline, and publication time.",
      problemStatement: "Readers need a quick way to scan story headlines and summaries without opening each item.",
      solution: "The React page renders a single feed of preloaded stories in Bootstrap cards.",
      keyFeatures: [
        "Browse six preloaded story cards",
        "Scan each story's category, headline, and summary",
        "See the displayed byline and publication time"
      ],
      technicalArchitecture: [
        "Frontend: ReactJS for the user interface.",
        "Styling: Bootstrap for responsive page layout.",
        "Content: The deployed version renders a local sample-article list rather than fetching live news.",
        "Limitations: Read More links are placeholders and the single-page pagination controls are disabled."
      ],
      myRole: "Developed the news-feed interface and its sample story-card presentation."
    }
  },
  {
    id: "movie-search-website",
    title: "Movie Search Website",
    subtitle: "A movie-search portal with a title input and a Search action.",
    category: "Movie Search Website",
    image: "https://wallpapercave.com/wp/wp9181096.jpg",
    tags: ["React.js", "Bootstrap", "REST API", "Django", "SQL Database"],
    github: "https://github.com/sangeethascodes/react-movie-search-website",
    liveDemo: "https://react-movie-search-website-zeta.vercel.app/",
    pitch: {
      elevatorPitch: "Movie Search Website provides a focused portal for entering a movie title and starting a search.",
      problemStatement: "Movie discovery needs a simple way to enter a title and initiate a lookup.",
      solution: "The page centers on a movie-title search field and a Search button.",
      keyFeatures: [
        "Enter a movie title in the search field",
        "Start a lookup with the Search button",
        "Use a React.js and Bootstrap interface"
      ],
      technicalArchitecture: [
        "Frontend: React.js and Bootstrap.",
        "Search interface: A movie-title field and Search action are visible in the deployed preview.",
        "Listed project stack: REST API, Django, and SQL database."
      ],
      myRole: "Developed the movie-search page and its title-entry interface."
    }
  },
  {
    id: "electricity-bill-board-project",
    title: "Electricity Bill Board Project",
    subtitle: "An applicant dashboard with a records table, date and ID filters, pagination, and an edit form. The live preview currently displays demo data because the applicant service is unavailable.",
    category: "Applicant Record Handling",
    image: "https://static.vecteezy.com/system/resources/previews/032/410/530/original/electricity-energy-plan-source-and-distribution-illustration-vector.jpg",
    tags: ["React.js", "JavaScript ES6+","Django", "Bootstrap",'Postgres'],
    github: "https://github.com/sangeethascodes/eletricity_board_frontend_react_proj",
    liveDemo: "https://electricitybillboardproject.vercel.app/",
    pitch: {
      elevatorPitch: "Electricity Bill Board Project displays applicant and connection records in a searchable, paginated dashboard with an edit form for each record.",
      problemStatement: "Reviewing applicant and connection information is harder when records and their statuses are not presented together.",
      solution: "The dashboard presents applicant, connection, and review details in a table, with date and applicant-ID filters and links to edit forms.",
      keyFeatures: [
        "Review applicant, connection, status, and reviewer details",
        "Filter records by application date or applicant ID",
        "Navigate records with pagination",
        "Open an edit form for an applicant record",
        "The deployed preview uses demo records while the applicant service is unavailable"
      ],
      technicalArchitecture: [
        "Frontend: React.js, JavaScript, and Bootstrap.",
        "Backend: Django.",
        "Database: PostgreSQL.",
        "Live preview: Displays demo data when the applicant service is unavailable."
      ],
      myRole: "Developed the applicant dashboard, record filters, pagination, and edit form."
    }
  },
  {
    id: "ecommerce-website",
    title: "Ecommerce Website",
    subtitle: "An online storefront listing products with ratings and prices, with cart and shipping-checkout pages.",
    category: "E-commerce",
    image: "https://www.weverve.com/wp-content/uploads/2020/10/ecommerce-1.jpg",
    tags: ["ReactJS", "Redux", "Django", "MySQL", "Bootstrap", "REST API"],
    github: "https://github.com/sangeethascodes/final_ecommerce_frontend",
    backendGithub: "https://github.com/sangeethascodes/final_ecommerce_backend",
    liveDemo: "https://final-ecommerce-frontend-13qd.vercel.app/",
    pitch: {
      elevatorPitch: "Ecommerce Website lists products with prices and ratings and provides cart and shipping-checkout screens.",
      problemStatement: "Shoppers need a clear way to browse product options and review a cart before entering shipping details.",
      solution: "The storefront displays product cards and links to the cart and shipping form. Product details currently fail to load in the deployed preview because the API request is blocked by CORS.",
      keyFeatures: [
        "Browse product cards with names, ratings, and prices",
        "Open the cart page to view quantity and total, with an empty-cart state when no items are present",
        "Enter address, city, postal code, and country in the shipping form",
        "Navigate between Home, Cart, and Checkout; payment and order actions are disabled in the current preview"
      ],
      technicalArchitecture: [
        "Frontend: ReactJS, Redux, and Bootstrap for the storefront interface and state management.",
        "Backend: Django with REST API integration.",
        "Database: MySQL.",
        "Storefront: Displays product cards with prices and ratings.",
        "Current limitation: Product-detail API requests fail with a CORS/network error in the deployed preview."
      ],
      myRole: "Developed the storefront catalog and the cart and shipping-checkout interfaces."
    }
  }
];
