const tableBody = document.getElementById("table").getElementsByTagName('tbody')[0];

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => {
            justify(data);
        })

    function justify(data) {
        data.slice(0, 20).forEach(({id, title, completed}) => {
            const row = `
            <tr>
                <td>${id}</td>
                <td>${title}</td>
                <td>${completed ? 'True' : 'False'}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    }