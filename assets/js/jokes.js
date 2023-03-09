// List of joke APIs to fetch jokes from
const jokeAPIs = [
    'https://icanhazdadjoke.com/',
    'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist&type=single',
    'https://geek-jokes.sameerkumar.website/api',
  ];
  
  // Function to fetch jokes from a single API
  function fetchJokes(apiURL) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', apiURL);
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            try {
              const jokeData = JSON.parse(xhr.responseText);
              const joke = jokeData.joke || jokeData.setup + ' ' + jokeData.delivery || jokeData.value || jokeData.jokeText;
              resolve(joke);
            } catch (error) {
              console.error(`Failed to parse joke from ${apiURL}: ${error.message}`);
              resolve(null);
            }
          } else {
            console.error(`Request failed with status code ${xhr.status} for ${apiURL}`);
            resolve(null);
          }
        }
      };
      xhr.send();
    });
  }
  
  // Function to fetch jokes from multiple APIs and store them in a JSON file
  async function fetchAndSaveJokes() {
    const jokes = [];
  
    for (const apiURL of jokeAPIs) {
      const joke = await fetchJokes(apiURL);
      if (joke) {
        jokes.push(joke);
      }
    }
  
    try {
      const fileData = JSON.stringify(jokes);
      const blob = new Blob([fileData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'https://www.radicaltherapy.dev/jokes.json';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      console.log(`Successfully saved ${jokes.length} jokes to jokes.json`);
    } catch (error) {
      console.error('Failed to save jokes to jokes.json:', error);
    }
  }
  
  // Call the fetchAndSaveJokes function to fetch jokes from all APIs and store them in a JSON file
  fetchAndSaveJokes();
  