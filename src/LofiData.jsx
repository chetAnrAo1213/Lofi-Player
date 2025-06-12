import React, { useEffect, useState } from "react";

function LofiData() {
  const folders = [
    "5%20Minutes%20Of%20Nature",
    "Daniel%20Mp3",
    "Developer%20Choice",
    "Dreamscape",
    "Lennox",
    "Mylesxiety"
  ];
  const username = "chetAnrAo7";
  const repo = "LofiPlayer-Data";

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const allData = {};

      for (const folder of folders) {
        const res = await fetch(
          `https://api.github.com/repos/${username}/${repo}/contents/${folder}`
        );
        const files = await res.json();


        const tracks = files
          .filter(file => file.name.endsWith(".mp3"))
          .map(file => ({
            name: file.name,
            size: file.size,
            download_url: file.download_url,
            category: decodeURIComponent(folder)
          }));

        allData[decodeURIComponent(folder)] = tracks;

        // Log after each folder
        console.log(`Data for folder ${decodeURIComponent(folder)}:`, tracks);
      }

      setData(allData);
      setLoading(false);
      console.log("All data:", allData);
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {Object.entries(data).map(([folderName, tracks]) => (
        <div key={folderName}>
          <pre>{JSON.stringify(tracks, null, 2)}</pre>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default LofiData;
