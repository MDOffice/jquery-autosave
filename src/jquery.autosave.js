$(function () {
    $(".autosave-form").each(function () {
        var self = $(this),
            formId = self.attr("data-autosave"),
            storageName = "autosave";

        var _setItem = function (that) {
            var items = _getFullItem(),
                found = false,
                index = $(that).index(),
                text = that.value;

            $.each(items, function (key, value) {
                if (value.id == formId && value.i == index) {
                    value.text = text;
                    value.reset = false;
                    found = true;
                }
            });

            if (!found) {
                items.push({"id": formId, "i": index, "text": text, "reset": false});
            }

            window.localStorage.setItem(storageName, JSON.stringify(items));
        };


        var _getFullItem = function () {
            return JSON.parse(window.localStorage.getItem(storageName)) || [];
        };


        var _getText = function (t, reset) {
            var index = $(t).index(),
                text = "";

            $.each(_getFullItem(), function (key, value) {
                if (value.id == formId && value.i == index && ((reset && value.reset == false) || !reset)) {
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
                if (value.id == formId) {
                    value.reset = true;
                }
            });
            window.localStorage.setItem(storageName, JSON.stringify(json));
        });

    });
});
