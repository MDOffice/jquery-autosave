import $ from 'jquery';

class Autosave {
    constructor() {
        this.DEFAULTS = {
            storageName: 'autosave',
            formClass: '.autosave-form',
            formAttr: 'data-autosave',
            msgExit: 'Возможно, внесенные изменения не сохранятся.'
        };
        this.onPage = false;
    }

    static _setItem(that) {
        let items = this._getFullItem(),
            formId = $(that).closest('form').attr(this.DEFAULTS.formAttr),
            index = $(that).index(),
            found = false,
            text = that.value;

        $.each(items, function (key, value) {
            if (value.id === formId && value.i === index) {
                value.text = text;
                value.reset = false;
                found = true;
            }
        });

        if (!found) {
            items.push({"id": formId, "i": index, "text": text, "reset": false});
        }
        this.onPage = text !== '';

        window.localStorage.setItem(this.DEFAULTS.storageName, JSON.stringify(items));
    };

    static _getFullItem() {
        return JSON.parse(window.localStorage.getItem(this.DEFAULTS.storageName)) || [];
    };

    static _getText(that, reset) {
        let formId = $(that).closest('form').attr(this.DEFAULTS.formAttr),
            index = $(that).index(),
            text = '';

        $.each(this._getFullItem(), function (key, value) {
            if (value.id === formId && value.i === index && ((reset && value.reset === false) || !reset)) {
                text = value.text;
                return;
            }
        });

        return text;
    };


    static bind(e) {
        if (e.keyCode === 90 && e.ctrlKey) {
            if (this.value === "") {
                this.value = this._getText(this, false);
                this._setItem(this);
            } else {
                return true;
            }
        } else if (!e.ctrlKey) {
            this._setItem(this);
        }
    };

    static restore() {
        if (this.value === '') {
            let text = this._getText(this, true);
            this.value = text;
            this.onPage = text !== '';
        }
    };

    static reset() {
        let json = this._getFullItem(),
            formId = $(this).closest('form').attr(this.DEFAULTS.formAttr);
        $.each(json, function (key, value) {
            if (value.id === formId) {
                value.reset = true;
                this.onPage = false;
            }
        });
        window.localStorage.setItem(this.DEFAULTS.storageName, JSON.stringify(json));
    };

    static remove(that) {
        let json = this._getFullItem(),
            formId = $(that).attr(this.DEFAULTS.formAttr);
        $.each(json, function (key, value) {
            if (value)
                if (value.id === formId) {
                    let index = json.indexOf(value);
                    if (index > -1) {
                        json.splice(index, 1);
                    }
                    this.onPage = false;
                }
        });
        window.localStorage.setItem(this.DEFAULTS.storageName, JSON.stringify(json));
    };

    static exitAjax() {
        if (this.onPage)
            if (confirm(this.DEFAULTS.msgExit)) {
                this.onPage = false;
                return false;
            } else return true;
        else return false;
    };
}

export default Autosave;


$(document).on('keyup', Autosave.DEFAULTS.formClass + ' textarea', Autosave.bind);
$(document).on('reset', Autosave.DEFAULTS.formClass, Autosave.reset);
$(function () {
    $(Autosave.DEFAULTS.formClass).has(':visible').find('textarea').each(Autosave.restore);
});

$(window).on('beforeunload', function () {
    if (Autosave.onPage) return Autosave.DEFAULTS.msgExit;
});

