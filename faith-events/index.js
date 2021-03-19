// using allOrigins to bypass same-origin policy problems
axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent
        ('https://api.serviceu.com/rest/91c1e592-0eec-490f-80bd-b253cdfe8441?nextDays=1&format=json.json')}`)
        .then(data => {
            const dat = JSON.parse(data.data.contents);
            for(let ii of dat) {
                console.log(ii.Name);
            }
        })