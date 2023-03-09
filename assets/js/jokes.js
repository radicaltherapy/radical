// List of joke APIs to fetch jokes from
const jokeAPIs = [
    'https://icanhazdadjoke.com/',
    'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist&type=single',
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
    x=1
    var jokeId = 1
    for (const apiURL of jokeAPIs) {
      const joke = await fetchJokes(apiURL);
      if (typeof joke !== "undefined" && joke !== "undefined") {
        console.log(joke);
        jokeId = "joke" + x
        const jokeElement = document.getElementById(jokeId);
        jokeElement.textContent = joke;
        x++
        jokes.push(joke);
      }
    }

  }
  
  // Call the fetchAndSaveJokes function to fetch jokes from all APIs and store them in a JSON file
  fetchAndSaveJokes();
  