function add(){

        var table = document.getElementsByTagName('table')[0];


        var lname = document.getElementById('name').value;
        var auhtorname = document.getElementById('author').value;
        var date = document.getElementById('date').value;
        var language = document.getElementById('language').value;
        var price = document.getElementById('price').value;
        var type = document.getElementsByClassName('type').value;
                    
        var newRow =table.insertRow(1);
        // add cells to the row
        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);
        var cel5 = newRow.insertCell(4);
        var cel6 = newRow.insertCell(5);

        // add values to the cells
        cel1.innerHTML =  lname;
        cel2.innerHTML = auhtorname;
        cel3.innerHTML = type;
        cel4.innerHTML = price;
        cel5.innerHTML = date;
        cel6.innerHTML = language;


}
