// jshint esversion: 6
$(document).ready(() => {
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


<script src='code.js'></script>