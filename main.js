$(document).ready(function() {

    $("#taskForm").submit(function(event) {
        event.preventDefault();

        var taskName = $("#taskInput").val();
        if (taskName.trim() !== "") {
            var listItem = $("<li>").text(taskName);
            $("#taskList").append(listItem);
            $("#taskInput").val("");
        }
    });

    $("#taskList").on("click", "li", function() {
        $(this).toggleClass("completed");
    });
});