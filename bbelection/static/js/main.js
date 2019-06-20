document.addEventListener("DOMContentLoaded", function() {

    // In the election.js file, build an AJAX request that makes a GET request to the root path, 
    // and expects a JSON response.
    axios.get("https://bb-election-api.herokuapp.com/")
    .then(response => {
        let data = response.data.candidates;
        console.log(data);
        let ul = document.querySelector('#candidates');
        
        data.forEach(candidate => {
            let li = document.createElement('li');
            let name = candidate.name;
            let votes = candidate.votes;
            li.innerText = `${name}, ${votes}`;
            ul.appendChild(li);
            
            
        });
        
    })
    .catch(error => {
        console.log('error', error);
        
    })
});
