$(".autosave-form").each(function () {
    var self = $(this),
        id = self.attr("data-autosave"),
        storageName = "autosave";

    var _setItem = function (that) {
        var json = _getFullItem(),
            found = false,
            index = $(that).index(),
            value = that.value;
        $.each(json, function (key, value) {
            if (value.id == id && value.i == index) {
                value.text = value;
                value.reset = false;
                found = true;
            }
        });
        if (!found) {
            json.push({"id": id, "i": index, "text": value, "reset": false});
        }
        window.localStorage.setItem(storageName, JSON.stringify(json));
    };

    var _getFullItem = function () {
        return JSON.parse(window.localStorage.getItem(storageName)) || [];
    };

    var _getText = function (t, reset) {
        var index = $(t).index(),
            text = "";
        $.each(_getFullItem(), function (key, value) {
            if (value.id == id && value.i == index && ((reset && v.reset == false) || !reset)) {
                text = value.text;
                return;
            }
        });
        return text;
    };

    //restore
    self.find('textarea').each(function () {
        if (this.value == "") {
            this.value = _getText(this, true);
        }
    });

    self.find('textarea').on('keydown', function (e) {
        if (e.keyCode == 90 && e.ctrlKey) {
            if (this.value == "") {
                this.value = _getText(this, false);
                _setItem(this);
            }
        } else if (!e.ctrlKey) {
            _setItem(this);
        }
    });

    self.on('reset', function () {
        var json = _getFullItem();
        $.each(json, function (key, value) {
            if (value.id == id) {
                value.reset = true;
            }
        });
        window.localStorage.setItem(storageName, JSON.stringify(json));
    });
});
