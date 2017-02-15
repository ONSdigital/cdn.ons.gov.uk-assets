/**
 * Adds a modal to the page warning user that page is a prototype. Then sets a cookie so that it shouldn't be shown again for that domain and directory
 *
 * version: 1.0.0
 */

var prototypeModal = {
    init: function() {
        if (this.hasCookie()) {
            return;
        }
        this.showModal();
        this.bindModal();
    },
    path: function() {
        var path = location.pathname.split('/');
        path.pop();
        return path.join('/');
    },
    showModal: function() {
        document.getElementsByTagName('body')[0].innerHTML += (
            '<div id="modal">' +
            '<div id="modal__container">' +
            '<h2 class="margin-top--1 margin-bottom">This is a prototype</h2>' +
            '<p class="flush">Warning, this is an experimental prototype used for research and testing.</p>' +
            '<p class="flush">The content may not be complete or accurate.</p>' +
            '<button id="modal__continue" class="btn btn--primary margin-top--2">I understand</button>' +
            '</div>' +
            '</div>'
        );
    },
    bindModal: function() {
        document.getElementById('modal__continue').addEventListener('click', function() {
            document.getElementById('modal').remove();
            prototypeModal.setCookie();
        });
    },
    setCookie: function() {
        document.cookie = 'ons-prototype-' + location.origin + this.path() + '= ; path=' + this.path();
    },
    hasCookie: function() {
        return document.cookie.indexOf('ons-prototype-' + location.origin + this.path()) >= 0;
    }
};

prototypeModal.init();
