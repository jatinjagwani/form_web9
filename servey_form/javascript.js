 function fetchData() {
      // Define the API URL you want to request data from
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

      // Make a GET request to the API using the fetch function
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse the response as JSON
        })
        .then(data => {
          // Handle the JSON data
          const outputElement = document.getElementById('output');
          outputElement.innerHTML = `
            <p>User ID: ${data.userId}</p>
            <p>Post ID: ${data.id}</p>
            <p>Title: ${data.title}</p>
            <p>Body: ${data.body}</p>
          `;
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
 
