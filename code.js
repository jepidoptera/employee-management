// jshint esversion: 6
class employee {
    constructor (name, rate, start) {
        this.name = name;
        this.rate = rate;
        this.start = start;
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
    $("#addperson").on("click", () => {
        // Don't refresh the page!
        event.preventDefault();

        // YOUR TASK!!!
        // Code in the logic for storing and retrieving the most recent user.
        // Don't forget to provide initial data to your Firebase database.
        name = $("#nameInput").val().trim();
        rate= $("#rateInput").val().trim();
        startDate = $("#dateInput").val().trim();
        submitButton = $("#addperson").val().trim();

        database.ref().push({
        name: name,
        rate: rate,
        startDate: startDate,
        
        });
        
        $("#people").append(
            $("<tr>")
                .append(
                    $("<td>").text("name"),
                    $("<td>").text("salary"),
                    $("<td>").text("starting date"),
                    $("<td>").text("lifetime earnings")
                )
        );
    });

    database.ref.on()('child_added', (newchild)=> {
        var employee = new employee(newchild.val().name, newchild.val().rate, newchild.val().start);
        employees.push(employee);
        // add to table
    });
});
