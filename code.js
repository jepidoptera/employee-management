// jshint esversion: 6
$(document).ready(() => {
    // set up database
    
    // set up colum names
    $("#people").append(
        $("<tr>")
            .append(
                $("<td>").text("name"),
                $("<td>").text("salary"),
                $("<td>").text("starting date"),
                $("<td>").text("lifetime earnings")
            )
    );

    // adding a new person
    $("#addperson").on("click", () => {
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
});
