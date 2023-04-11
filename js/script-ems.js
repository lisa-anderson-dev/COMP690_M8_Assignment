// CREATE AN ARRAY OF EMPLOYEES

let employeeList = [
    [11111111, 'Marty Manager', 1111, 'marty@email.com', 'Executive'],
    [22222222, 'Sally Sales', 2222, 'sally@email.com', 'Sales'],
    [33333333, 'Adam Admin', 3333, 'adam@email.com', 'Administrative'],
    [44444444, 'Dave Developer', 4444, 'dave@email.com', 'Engineering'],
    [55555555, 'Quinn QA', 5555, 'quinn@email.com', 'QA'],
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY

window.addEventListener('load', () => {
    employeeList = JSON.parse(localStorage.employees) || employeeList;

// GET DOM ELEMENTS

    let form = document.querySelector('#addForm');
    let empTable = document.querySelector('#empTable');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS

    buildGrid();

// ADD EMPLOYEE
    form.addEventListener('submit', (e) => {
        // PREVENT FORM SUBMISSION

        e.preventDefault();

        // GET THE VALUES FROM THE TEXT BOXES

        let newId = Number(document.querySelector('#id').value);
        let newName = document.querySelector('#name').value;
        let newExtension = Number(document.querySelector('#extension').value);
        let newEmail = document.querySelector('#email').value;
        let newDepartment = document.querySelector('#department').value;

        // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT

        let newEmployee = [newId, newName, newExtension, newEmail, newDepartment];

        // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY

        employeeList.push(newEmployee);

        // BUILD THE GRID

        buildGrid();

        // RESET THE FORM

        form.reset();

        // SET FOCUS BACK TO THE ID TEXT BOX

        document.querySelector('#id').focus();
    });

// DELETE EMPLOYEE
    empTable.addEventListener('click', (e) => {
        // CONFIRM THE DELETE

        if (e.target.classList.contains('delete')) {
            let deleteEmployee = e.target.parentElement.parentElement;
            let deleteEmployeeName = deleteEmployee.children[1].innerText;

            if (confirm(`Are you sure you want to delete ${deleteEmployeeName}?`)) {

            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

                let deleteRowIndex = deleteEmployee.rowIndex;

            // REMOVE EMPLOYEE FROM ARRAY

                employeeList.splice(deleteRowIndex - 1, 1)

            // BUILD THE GRID

                buildGrid();
            }
        }
    });

// BUILD THE EMPLOYEES GRID
    function buildGrid() {
        // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

        empTable.removeChild(empTable.children[1]);

        // REBUILD THE TBODY FROM SCRATCH

        let tableBody = document.createElement('tbody');

        // LOOP THROUGH THE ARRAY OF EMPLOYEES
        // REBUILDING THE ROW STRUCTURE

        for (let employee of employeeList) {
            let row = document.createElement('tr');
            row.innerHTML = '';
            for (let field of employee) {
                row.innerHTML += `<td>${field}</td>`;
            }
            row.innerHTML += `<td><button class='btn btn-danger btn-sm float-right delete'>X</button></td>`;
            tableBody.appendChild(row);
        }

        // BIND THE TBODY TO THE EMPLOYEE TABLE

        empTable.appendChild(tableBody);

        // UPDATE EMPLOYEE COUNT

        document.getElementById('empCount').innerText = employeeList.length;

        // STORE THE ARRAY IN STORAGE

        localStorage.employees = JSON.stringify(employeeList);
    }
});
