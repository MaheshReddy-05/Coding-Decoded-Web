import { useState, useEffect } from "react";

const L = () => {
  const [loading, setLoading] = useState(true);
  const [repoForks, setRepoForks] = useState(0);
  const [repoStars, setRepoStars] = useState(0);
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/Sunchit/Coding-Decoded")
      .then(async (response) => {
        const data = await response.json();
        if (data && data.forks_count) {
          setRepoForks(data.forks_count);
        }
        if (data && data.stargazers_count) {
          setRepoStars(data.stargazers_count);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching repository data:", error);
        setLoading(false);
      });

    fetchContributors();
  }, []);

  const fetchContributors = () => {
    fetch(
      "https://api.github.com/repos/Sunchit/Coding-Decoded/contributors?per_page=100"
    )
      .then(async (response) => {
        const data = await response.json();
        setContributors((prevContributors) => {
          const uniqueContributors = [...prevContributors, ...data].reduce(
            (acc, contributor) => {
              if (!acc.find((c) => c.login === contributor.login)) {
                acc.push(contributor);
              }
              return acc;
            },
            []
          );
          return uniqueContributors;
        });
        if (response.headers.get("link")) {
          const links = response.headers.get("link").split(",");
          const nextLink = links.find((link) => link.includes('rel="next"'));
          if (nextLink) {
            const nextURL = nextLink.match(/<(.+)>/)[1];
            fetchMoreContributors(nextURL);
          } else {
            setLoading(false);
          }
        } else {
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching contributors:", error);
        setLoading(false);
      });
  };

  const fetchMoreContributors = (url) => {
    fetch(url)
      .then(async (response) => {
        const data = await response.json();
        setContributors((prevContributors) => {
          const uniqueContributors = [...prevContributors, ...data].reduce(
            (acc, contributor) => {
              if (!acc.find((c) => c.login === contributor.login)) {
                acc.push(contributor);
              }
              return acc;
            },
            []
          );
          return uniqueContributors;
        });
        if (response.headers.get("link")) {
          const links = response.headers.get("link").split(",");
          const nextLink = links.find((link) => link.includes('rel="next"'));
          if (nextLink) {
            const nextURL = nextLink.match(/<(.+)>/)[1];
            fetchMoreContributors(nextURL);
          } else {
            setLoading(false);
          }
        } else {
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching contributors:", error);
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:py-24 lg:py-16 lg:px-8">
        <div className="contributors">
          <div className="text-center">
            <div className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Contributors
            </div>
            <div className="my-4 mb-10 text-2sm leading-6 tracking-wide text-gray-500">
            </div>
          </div>
          {contributors.length > 0 && (
            <div className="flex justify-center flex-wrap">
              {contributors.map((contributor) => (
                <a
                  key={contributor.id}
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full mx-2 my-2 overflow-hidden relative"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={contributor.avatar_url}
                    alt={contributor.login}
                  />
                  <span className="absolute hidden px-2 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100">
                    {contributor.login}
                  </span>
                </a>
              ))}
            </div>
          )}
          <div className="stats flex flex-col sm:flex-row justify-center mt-4">
            <div className="stats-item mx-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto">
                {contributors.length} Contributors
              </button>
            </div>
            <div className="stats-item mx-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto">
                {repoForks} Forks
              </button>
            </div>
            <div className="stats-item mx-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto">
                {repoStars} Stars
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default L;
