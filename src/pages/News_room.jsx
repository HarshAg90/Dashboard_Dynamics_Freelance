import React,{useState,useEffect} from 'react'

export default function NewsRoom() {

  const [isLoading, setIsLoading] = useState(true);
  const [unavailabe, setUnavailable] = useState(false);
  const [Jobs, setJobs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dash-dynamic-backend.onrender.com/news'); // Replace with your API endpoint
        const jsonData = await response.json();
        setJobs(jsonData);
        setIsLoading(false);
        console.log(jsonData);
      } catch (error) {
        console.log('Error:', error);
        setUnavailable(true);
      }
    };

    fetchData();
  }, []);

  if (unavailabe) {
    return (<div className='Loading_pg'>
      <h1>
        Unable to load content
        </h1>
      </div>); // Display loader while fetching data
  }

  if (isLoading) {
    return (
    <div className='Loading_pg'>
      <h1 className='loading'>
        Loading...
        </h1>
    </div> // Display loader while fetching data
    );
  }

  return (
    <div id='News'>
      <div className="main">
        <h1>The Rise of Electric Vehicles: Navigating the Road to an Electric Future</h1>
        <div className="tiles">
          <h1>Headlines</h1>
          <div className="row-1">
            <div className="b1 b">
              <div className="bg" />
              <img src={Jobs.team[0].urlToImage} alt="" />
              <h1>
              {Jobs.team[0].title}
              </h1>
            </div>
            <div className="b2 b">
              <div className="bg" />
              <img src={Jobs.team[1].urlToImage} alt="" />
              <h1>
              {Jobs.team[1].title}
              </h1>
            </div>
          </div>
          <div className="row-2">
            <div className="b1 b">
              <div className="bg" />
              <img src={Jobs.team[2].urlToImage} alt="" />
              <h1>
              {Jobs.team[2].title}
              </h1>
            </div>
            <div className="b2 b">
              <img src={Jobs.team[3].urlToImage} alt="" />
              <div className="bg" />
              <h1>
              {Jobs.team[3].title}
              </h1>
            </div>
            <div className="b3 b">
              <div className="bg" />
              <img src={Jobs.team[4].urlToImage} alt="" />
              <h1>
              {Jobs.team[4].title}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="other_news">
        <p>
              {Jobs.team[5].title}
        </p>
        <div className="line" />
        <p>
              {Jobs.team[6].title}
        </p>
        <div className="line" />
        <p>
              {Jobs.team[7].title}
        </p>
        <div className="line" />
        <p>
              {Jobs.team[8].title}
        </p>
      </div>

    </div>
  )
}
