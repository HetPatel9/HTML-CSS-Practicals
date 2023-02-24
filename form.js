let urlString = document.URL;
let paramString = urlString.split('?')[1];
let queryString = new URLSearchParams(paramString);
let table = ''

for (let pair of queryString.entries()) {
    console.log("Key is: " + pair[0]);
    console.log("Value is: " + pair[1]);
    
    table += `<tr>
    <th>${pair[0]}</th>
    <td>${pair[1]}</td>
    </tr>`;
}

document.getElementById("output").innerHTML = table;
