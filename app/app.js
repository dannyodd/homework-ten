function initListeners() {

    $("a").click(function(e) {
        let btnId = e.currentTarget.id;
        MODEL.changePageContent(btnId);
    })
}

$(document).ready(function () {
    initListeners();
    MODEL.changePageContent("home");
})