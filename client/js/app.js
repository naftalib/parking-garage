//api call
  
  fetch('http://localhost:4200/api/event/')
  .then(res => res.json())
  .then(entries => {

// mapping over JSON data in order to manipulate the data and create a formatted array saved to a var called entryData.

     const entryData = entries.map(entry => {
              entry.in = new Date(entry.in);
              entry.out = new Date(entry.out);
              entry.rawDuration = entry.out-entry.in;
              entry.duration = Math.round(
                (entry.rawDuration / 1000 / 60 / 60) * 100) / 100;
              entry.price = entry.duration <= 1 ? "free": 
                Math.ceil(entry.duration * 2.99 * 100) / 100; 
                const priceStyle = ()=>{
                  if(entry.price === "free"){
                    return "blue"
                  }
                }
                      // if(entry.price = "free"){
                      //     "color:blue"
                      // }
                 
              console.log(entries) 
            
//returning the array values within table elements concatted to populate the tbody element in HTML doc.
              return (
                `<tr>
                <td>${entry.license}</td>
                <td ${entry.price = "free" ? {style="color:blue"}:none}>${entry.price}</td>
                <td>${entry.duration}</td>
                <td>${entry.in}</td>
                <td>${entry.out}</td>
            </tr>`
              )   
        }).join('');
        const tabelBody = document.querySelector("#tableBody");
            tableBody.innerHTML = entryData;
})

// NOTES: STILL UNSOLVED:
// 1. Return color-coded entries for ("free" = blue and over 24h = blue) 
// 2. Date format need adjustment to show am/pm and not time zone

                              