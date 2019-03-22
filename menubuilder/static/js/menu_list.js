'use strict'
var refreshMenuList = function (containerId) {
    let con = document.getElementById(containerId);
    con.innerHTML = '';


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let menus = [{
                name: 'Root',
                parent: null
            }];
            let table = document.createElement('table');
            con.appendChild(table);

            let headerRow = document.createElement('tr');
            table.appendChild(headerRow);

            let headers = ['Name', 'Parent'];
            headers.forEach(name => {
                var col = document.createElement('th');
                col.innerHTML = name;
                headerRow.appendChild(col);
            });

            menus.forEach(menu => {
                let dataRow = document.createElement('tr');
                var cols = [menu.name, menu.parent];
                cols.forEach(colVal => {
                    var col = document.createElement('th');
                    col.innerHTML = name;
                    headerRow.appendChild(col);
                });
            });

        }
    };
    xhttp.open("GET", "/menus", true);
    xhttp.send();
}