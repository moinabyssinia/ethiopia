// using allOrigins to bypass same-origin policy problems
const canvas = document.querySelector('.canvas');

axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent
        ('https://api.serviceu.com/rest/91c1e592-0eec-490f-80bd-b253cdfe8441?nextDays=1&format=json.json')}`)
        .then(data => {
            const dat = JSON.parse(data.data.contents);
            for(let ii of dat) {
                console.log(`${ii.EventId} - ${ii.Name} - ${ii.OccurrenceStartTime}`);
                const newAnchor = document.createElement('h3');
                newAnchor.textContent = `${ii.EventId} - ${ii.Name} - ${ii.OccurrenceStartTime}`;
                canvas.append(newAnchor);
            }
        })  

