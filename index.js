document.onreadystatechange = function (event) {
    if (event.target.readyState !== "complete") {
        return;
    }

    var UserWrapper = new UserWrappr(FullScreenMario.prototype.proliferate({
            "GameStartrConstructor": FullScreenMario
        }, FullScreenMario.prototype.settings.ui, true));

};