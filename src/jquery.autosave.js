var Autosave = Autosave || {};
Autosave.storageName = 'autosave';
Autosave.onPage = false;

Autosave._setItem = function (that) {
    var items = Autosave._getFullItem(),
        formId = $(that).closest('form').attr('data-autosave'),
        index = $(that).index(),
        found = false,
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
    Autosave.onPage = text != '';

    window.localStorage.setItem(Autosave.storageName, JSON.stringify(items));
};
Autosave._getFullItem = function () {
    return JSON.parse(window.localStorage.getItem(Autosave.storageName)) || [];
};
Autosave._getText = function (that, reset) {
    var formId = $(that).closest('form').attr('data-autosave'),
        index = $(that).index(),
        text = '';

    $.each(Autosave._getFullItem(), function (key, value) {
        if (value.id == formId && value.i == index && ((reset && value.reset == false) || !reset)) {
            text = value.text;
            return;
        }
    });

    return text;
};


Autosave.bind = function (e) {
    if (e.keyCode == 90 && e.ctrlKey) {
        if (this.value == "") {
            this.value = Autosave._getText(this, false);
            Autosave._setItem(this);
        } else {
            return true;
        }
    } else if (!e.ctrlKey) {
        Autosave._setItem(this);
    }
};
Autosave.restore = function () {
    if (this.value == '') {
        var text = Autosave._getText(this, true);
        this.value = text;
        Autosave.onPage = text != '';
    }
};
Autosave.reset = function () {
    var json = Autosave._getFullItem(),
        formId = $(this).closest('form').attr('data-autosave');
    $.each(json, function (key, value) {
        if (value.id == formId) {
            value.reset = true;
            Autosave.onPage = false;
        }
    });
    window.localStorage.setItem(Autosave.storageName, JSON.stringify(json));
};
Autosave.remove = function (that) {
    var json = Autosave._getFullItem(),
        formId = $(that).attr('data-autosave');
    $.each(json, function (key, value) {
        if (value.id == formId) {
            var index = json.indexOf(value);
            if (index > -1) {
                json.splice(index, 1);
            }
            Autosave.onPage = false;
        }
    });
    window.localStorage.setItem(Autosave.storageName, JSON.stringify(json));
};


$(document).on('keyup', '.autosave-form textarea', Autosave.bind);
$(document).on('reset', '.autosave-form', Autosave.reset);
$(function () {
    $('.autosave-form textarea').each(Autosave.restore);
});

$(window).on('beforeunload', function () {
    if (Autosave.onPage)
        return "Возможно, внесенные изменения не сохранятся.";
});

