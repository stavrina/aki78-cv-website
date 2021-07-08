$(document).ready(function () {
    console.log("ready!");
    $(".menu-container").click(function () {
        $(this).toggleClass("open")
        $(".sidenavbar").toggleClass("hide")
        $("#sidenavlist").toggleClass("hide-link")
        $(".menu-list").toggleClass("hide-link")
    })
});