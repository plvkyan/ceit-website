

// Imports

// Lucide Icon imports
import {
  BookOpen,
  GraduationCap,
  MoveRight
} from "lucide-react"

// Utility imports
import {
  useEffect,
  useState
} from "react"
import { Link } from "react-router-dom";



const NewsHero = () => {

  // State
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);



  // Effects
  useEffect(() => {
    // Add any side effects or cleanup logic here
    document.title = "News | PLV";

    // Fetch news from the API
    const fetchNews = async () => {
      // Set loading to true before fetching
      setLoading(true);
      
      // Set error to null before fetching
      setError(null);

      // Fetch news from the API
      const response = await fetch('http://localhost:4000/api/news');

      // Store the response in a variable
      const news = await response.json();

      // Check if the response is ok
      if (!response.ok) {
        // If not, set the error state
        setError(news.message);
        return;
      }

      // If the response is ok, set the news state
      setNews(news);
    };

    // Call the fetch function
    fetchNews();

    // Set loading to false after fetching
    setLoading(false);

    return () => {
      // Cleanup logic if needed
    };
  }, []);

  

  return (
    <section className="">
      <div className="">
        <div className="border border-t-0 border-border">
          <Link
            to="/news/12349"
            className="group grid gap-4 overflow-hidden px-6 transition-colors duration-500 ease-out hover:bg-muted/40 lg:grid-cols-2 xl:px-28"
          >
            <div className="flex flex-col justify-between gap-4 pt-8 md:pt-16 lg:pb-16">
              <div className="flex items-center gap-2 text-2xl font-medium">
                {/* <img
                  src="https://shadcnblocks.com/images/block/block-1.svg"
                  alt="logo"
                  className="h-9"
                /> */}
                Headline
              </div>
              <div>
                <span className="text-xs text-muted-foreground sm:text-sm">
                  NON-ACADEMIC / INTRAMURALS
                </span>
                <h2 className="mt-4 mb-5 text-2xl font-semibold text-balance sm:text-3xl sm:leading-10">
                  The IT Department wins the Badminton silver medal.
                  <span className="font-medium text-primary/50 transition-colors duration-500 ease-out group-hover:text-primary/100">
                    {" "}
                    IT dominates this year's Intramurals.
                  </span>
                </h2>
                <div className="flex items-center gap-2 font-medium">
                  Read
                  <MoveRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                </div>
              </div>
            </div>
            <div className="relative isolate sm:py-8 md:py-16">
              <div className="relative isolate h-full border border-border bg-background p-2">
                <div className="h-full overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dmodbgukj/image/upload/v1746598003/IT_Badminton-Silver-Medalist_dmdzlx.jpg"
                    alt="placeholder"
                    className="aspect-[14/9] h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </Link>
          <div className="flex border-t border-border">
            <div className="hidden w-28 shrink-0 bg-[radial-gradient(var(--muted-foreground)_1px,transparent_1px)] [background-size:10px_10px] opacity-15 xl:block"></div>
            <div className="grid lg:grid-cols-2">
              <Link
                to="/news/12349"
                className="group flex flex-col justify-between gap-12 border-border bg-background px-6 py-8 transition-colors duration-500 ease-out hover:bg-muted/40 md:py-16 lg:pb-16 xl:gap-16 xl:border-l xl:pl-8"
              >
                <div className="flex items-center gap-2 text-2xl font-medium">
                  {/* <img
                    src="https://shadcnblocks.com/images/block/block-2.svg"
                    alt="logo"
                    className="h-9"
                  /> */}
                  <GraduationCap className="h-9" />
                  Academic
                </div>
                <div>
                  <span className="text-xs text-muted-foreground sm:text-sm">
                    ACADEMIC / ALUMNI
                  </span>
                  <h2 className="mt-4 mb-5 text-2xl font-semibold text-balance sm:text-3xl sm:leading-10">
                    PLV celebrates engineering excellence yet again.
                    <span className="font-medium text-primary/50 transition-colors duration-500 ease-out group-hover:text-primary/100">
                      {" "}
                      Forty alumni passes their licensure exam.
                    </span>
                  </h2>
                  <div className="flex items-center gap-2 font-medium">
                    Read
                    <MoveRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>

              <Link
                to="/news/12349"
                className="group flex flex-col justify-between gap-12 border-t border-border bg-background px-6 py-8 transition-colors duration-500 ease-out hover:bg-muted/40 md:py-16 lg:border-t-0 lg:border-l lg:pb-16 xl:gap-16 xl:border-r xl:pl-8"
              >
                <div className="flex items-center gap-2 text-2xl font-medium">
                  {/* <img
                    src="https://shadcnblocks.com/images/block/block-3.svg"
                    alt="logo"
                    className="h-9"
                  /> */}
                  <BookOpen className="h-9" />
                  Must read
                </div>
                <div>
                  <span className="text-xs text-muted-foreground sm:text-sm">
                    ACADEMIC / ITLYMPICS
                  </span>
                  <h2 className="mt-4 mb-5 text-2xl font-semibold text-balance sm:text-3xl sm:leading-10">
                    BSIT 4-2 wins ITlympics 2025.
                    <span className="font-medium text-primary/50 transition-colors duration-500 ease-out group-hover:text-primary/100">
                      {" "}
                      Seniors snag victory and leave a legacy.
                    </span>
                  </h2>
                  <div className="flex items-center gap-2 font-medium">
                    Read
                    <MoveRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>

              {news && news.map((singleNews) => (
                <Link
                  to="/news/12349"
                  className="group flex flex-col justify-between gap-12 border-t border-border bg-background px-6 py-8 transition-colors duration-500 ease-out hover:bg-muted/40 md:py-16 lg:border-t-0 lg:border-l lg:pb-16 xl:gap-16 xl:border-r xl:pl-8"
                  key={singleNews._id}
                >
                  <div className="flex items-center gap-2 text-2xl font-medium">
                    {/* <img
                    src="https://shadcnblocks.com/images/block/block-3.svg"
                    alt="logo"
                    className="h-9"
                  /> */}
                    <BookOpen className="h-9" />
                    Must read
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground sm:text-sm">
                      ACADEMIC / ITLYMPICS
                    </span>
                    <h2 className="mt-4 mb-5 text-2xl font-semibold text-balance sm:text-3xl sm:leading-10">
                      {singleNews.title}
                      <span className="font-medium text-primary/50 transition-colors duration-500 ease-out group-hover:text-primary/100">
                        {" "}
                        {singleNews.content}
                      </span>
                    </h2>
                    <div className="flex items-center gap-2 font-medium">
                      Read
                      <MoveRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}

            </div>
            <div className="hidden w-28 shrink-0 bg-[radial-gradient(var(--muted-foreground)_1px,transparent_1px)] [background-size:10px_10px] opacity-15 xl:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;
