import React, { useState, useCallback } from "react";

function FetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("https://www.anapioficeandfire.com/api/characters");
      /* 
      API Result:
      [{"url":"https://www.anapioficeandfire.com/api/characters/1","name":"","gender":"Female","culture":"Braavosi","born":"","died":"",
        "titles":[],"aliases":["The Daughter of the Dusk"],"father":"","mother":"","spouse":"","allegiances":[],
        "books":["https://www.anapioficeandfire.com/api/books/5"],"povBooks":[],"tvSeries":[],"playedBy":[]},
        {"url":"https://www.anapioficeandfire.com/api/characters/2","name":"Walder","gender":"Male","culture":"","born":"","died":"","titles":[],
            "aliases":["Hodor"],"father":"","mother":"","spouse":"","allegiances":["https://www.anapioficeandfire.com/api/houses/362"],
            "books":["https://www.anapioficeandfire.com/api/books/1","https://www.anapioficeandfire.com/api/books/2",
                "https://www.anapioficeandfire.com/api/books/3","https://www.anapioficeandfire.com/api/books/5",                
      */
      const result = await response.json();

      setData(result.slice(0, 5)); // Limit results for better display (5 records only)

      /*
        const entries = ["API1", "API2", "API3", "API4", "API5", "API6", "API7"];
        const slicedEntries = entries.slice(0, 5); 

        console.log(slicedEntries); 
        Output: ["API1", "API2", "API3", "API4", "API5"]
      */
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  }, []);

  return (
    <div>
      <h1>Public API Fetch Example</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {loading && <p>Loading...</p>}
      {data && (
        <ul>
          {data.map((entry, index) => (
            <li key={index}>{entry.url} - {entry.culture}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchData;
