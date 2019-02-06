import $ from 'jquery';
import {t} from './i18n';

class Autosave {

  static _setItem(that) {
    let items = Autosave._getFullItem(),
      formId = $(that).closest('form').attr(Autosave.DEFAULTS.formAttr),
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
    Autosave.onPage = text !== '';

    window.localStorage.setItem(Autosave.DEFAULTS.storageName, JSON.stringify(items));
  };

  static _getFullItem() {
    return JSON.parse(window.localStorage.getItem(Autosave.DEFAULTS.storageName)) || [];
  };

  static _getText(that, reset) {
    let formId = $(that).closest('form').attr(Autosave.DEFAULTS.formAttr),
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
        this.value = Autosave._getText(this, false);
        Autosave._setItem(this);
      } else {
        return true;
      }
    } else if (!e.ctrlKey) {
      Autosave._setItem(this);
    }
  };

  static restore() {
    if (this.value === '') {
      let text = Autosave._getText(this, true);
      this.value = text;
      Autosave.onPage = text !== '';
    }
  };

  static reset() {
    let json = Autosave._getFullItem(),
      formId = $(this).closest('form').attr(Autosave.DEFAULTS.formAttr);
    $.each(json, function (key, value) {
      if (value.id === formId) {
        value.reset = true;
        Autosave.onPage = false;
      }
    });
    window.localStorage.setItem(Autosave.DEFAULTS.storageName, JSON.stringify(json));
  };

  static remove(that) {
    let json = Autosave._getFullItem(),
      formId = $(that).attr(Autosave.DEFAULTS.formAttr);
    $.each(json, function (key, value) {
      if (value)
        if (value.id === formId) {
          let index = json.indexOf(value);
          if (index > -1) {
            json.splice(index, 1);
          }
          Autosave.onPage = false;
        }
    });
    window.localStorage.setItem(Autosave.DEFAULTS.storageName, JSON.stringify(json));
  };

  static exitAjax() {
    if (Autosave.onPage)
      if (confirm(Autosave.DEFAULTS.msgExit)) {
        Autosave.onPage = false;
        return false;
      } else return true;
    else return false;
  };
}

export default Autosave;

Autosave.DEFAULTS = {
  storageName: 'autosave',
  formClass: '.autosave-form',
  formAttr: 'data-autosave'
};
Autosave.onPage = false;


$(document).on('keyup', Autosave.DEFAULTS.formClass + ' textarea', Autosave.bind);
$(document).on('reset', Autosave.DEFAULTS.formClass, Autosave.reset);
$(function () {
  $(Autosave.DEFAULTS.formClass).has(':visible').find('textarea').each(Autosave.restore);
});

$(window).on('beforeunload', function () {
  if (Autosave.onPage) return t('The changes you have made may not be saved.');
});

