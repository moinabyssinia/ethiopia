// using allOrigins to bypass same-origin policy problems
const eventTable = document.querySelector('#table-canvas');

axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent
        ('https://api.serviceu.com/rest/91c1e592-0eec-490f-80bd-b253cdfe8441?nextDays=3&format=json.json')}`)
        .then(data => {
            const dat = JSON.parse(data.data.contents);
            for(let ii of dat) {
                console.log(`${ii.EventId} - ${ii.Name} - ${ii.OccurrenceStartTime}`);

                // create table row
                const newRow = document.createElement('tr');

                // create table columns
                const idCol = document.createElement('td');
                idCol.textContent = ii.EventId;   //${ii.Name} - ${ii.OccurrenceStartTime}`;

                const nameCol = document.createElement('td');
                nameCol.textContent = ii.Name;

                const timeCol = document.createElement('td');
                timeCol.textContent = ii.OccurrenceStartTime;
            
                const locCol = document.createElement('td');
                locCol.textContent = ii.CategoryList;

                const descCol = document.createElement('td');
                descCol.textContent = ii.Description;


                const breaker = document.createElement('br');

                // append to table row
                newRow.append(idCol);
                newRow.append(nameCol);
                newRow.append(timeCol);
                newRow.append(locCol);
                newRow.append(descCol);
                newRow.append(breaker);

                // apend to dom
                eventTable.append(newRow);

            }
        })  

