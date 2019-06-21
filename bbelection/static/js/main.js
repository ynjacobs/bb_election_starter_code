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
            let form = document.createElement('form');
            let btn = document.createElement('button');
            let hdnInput = document.createElement('input');
            hdnInput.type = 'hidden';
            hdnInput.name = 'name';
            hdnInput.value = candidate.name;
            form.method = 'POST';
            form.action = "https://bb-election-api.herokuapp.com/vote";
            btn.innerText = 'Vote!';


            
            let name = candidate.name;
            let votes = candidate.votes;
            let zText = `${name}, ${votes}`
            // li.innerHTML = form;
            form.appendChild(btn);
            form.appendChild(hdnInput);
            let textNode = document.createTextNode(zText);
            li.appendChild(textNode);
            li.appendChild(form);
            ul.appendChild(li);
            // li.innerText = zText;

            console.log(form);
            // console.log(btn);
            form.addEventListener('submit', e => {
                e.preventDefault();
                console.log('i am submitted');
                axios.post('https://bb-election-api.herokuapp.com/vote', { name})
                .then(response => {

document.querySelectorAll('button').forEach(e => {e.disabled = 'true'});

                })
                .catch(e => {});
                
                
                });

        });




    })
    .catch(error => {
        console.log('error', error);
        
    });


});
