// jshint esversion: 6
class employee {
    constructor (name, rate, role, start) {
        this.name = name;
        this.rate = rate;
        this.role = role;
        this.startDate = start;
    }
}

$(document).ready(() => {
    // set up database
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBtjv79c8tKZJgkr8QO0ResNvOd2oBVmKM",
        authDomain: "employee-management-46a35.firebaseapp.com",
        databaseURL: "https://employee-management-46a35.firebaseio.com",
        projectId: "employee-management-46a35",
        storageBucket: "employee-management-46a35.appspot.com",
        messagingSenderId: "4136533109"
    };
    firebase.initializeApp(config);
    var database = firebase.database();

    var employees = [];

    // adding a new person
    $("#addPerson").on("click", () => {
        // Don't refresh the page!
        event.preventDefault();

        // YOUR TASK!!!
        // Code in the logic for storing and retrieving the most recent user.
        // Don't forget to provide initial data to your Firebase database.
        name = $("#nameInput").val().trim();
        rate= $("#rateInput").val().trim();
        startDate = $("#dateInput").val().trim();
        role = $("#roleInput").val().trim();

        database.ref().push({
            name: name,
            role: role,
            rate: rate,
            startDate: startDate,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
        
    });

    database.ref().on('child_added', (newchild)=> {
        var employee = new employee(newchild.val().name, newchild.val().role, newchild.val().rate, newchild.val().start);
        employees.push(employee);
        // add to table
        $("#employee-table").append(
            $("<tr>")
                .append(
                    $("<td>").text(employee.name),
                    $("<td>").text(employee.role),
                    $("<td>").text(employee.startDate),
                    $("<td>").text(employee.rate)
                )
        );
    });
});
