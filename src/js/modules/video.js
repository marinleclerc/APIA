var jQuery = require('jquery');
var $ = require('jquery');



var mrUtil = function ($) {
    var Util = {
        activateIframeSrc: function activateIframeSrc(iframe) {
            var $iframe = $(iframe);

            if ($iframe.attr('data-src')) {
                $iframe.attr('src', $iframe.attr('data-src'));
            }
        },
        idleIframeSrc: function idleIframeSrc(iframe) {
            var $iframe = $(iframe);
            $iframe.attr('data-src', $iframe.attr('src')).attr('src', '');
        }
    };
    return Util;
}(jQuery);

$(function () {
    $('.modal').on('shown.bs.modal', function modalShown() {
        var $modal = $(this);

        if ($modal.find('iframe[data-src]').length) {
            var $iframe = $modal.find('iframe[data-src]');
            mrUtil.activateIframeSrc($iframe);
        }
    });
    $('.modal').on('hidden.bs.modal', function modalHidden() {
        var $modal = $(this);

        if ($modal.find('iframe[src]').length) {
            var $iframe = $modal.find('iframe[data-src]');
            mrUtil.idleIframeSrc($iframe);
        }
    });
});