import { css } from './css';
var PacificaPopup = /** @class */ (function () {
    function PacificaPopup(options) {
        var _this = this;
        this.options = options;
        this.overlayStyle = {
            position: 'absolute',
            top: '0',
            lef: '0',
            bottom: '0',
            right: '0',
            left: '0',
            background: options.overlaycolor || '#2f2f2f6e'
        };
        this.popupStyle = {
            background: 'white',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
            padding: '1em'
        };
        this.build();
        css(this.elements.overlay, this.options.overlayCss.default || {});
        css(this.elements.popup, this.options.popupCss.default || {});
        this.applyMediaQuerys();
        window.addEventListener('resize', function () {
            _this.applyMediaQuerys();
        });
        if (this.options.open) {
            this.open();
        }
        if (this.options.closeOnClickOf) {
            if (this.options.closeOnClickOf == "this") {
                this.bindCloseTo(this.elements.overlay);
            }
            else {
                this.bindCloseTo(this.elements.overlay.querySelector(this.options.closeOnClickOf));
            }
        }
        window.onscroll = function () {
            _this.isOpen ? window.scrollTo(0, 0) : null;
        };
    }
    PacificaPopup.prototype.bindCloseTo = function (element) {
        var _this = this;
        element.addEventListener('click', function () {
            _this.close();
        });
    };
    PacificaPopup.prototype.open = function () {
        this.elements.overlay.append(this.elements.popup);
        document.querySelector('body').append(this.elements.overlay);
        this.isOpen = true;
    };
    PacificaPopup.prototype.close = function () {
        this.elements.overlay.remove();
        this.isOpen = false;
    };
    PacificaPopup.prototype.applyMediaQuerys = function () {
        if (this.options.overlayCss.mobile && this.options.overlayCss.desktop) {
            if (window.innerWidth > 768) {
                css(this.elements.overlay, this.options.overlayCss.desktop || {});
            }
            else if (window.innerWidth < 768) {
                css(this.elements.overlay, this.options.overlayCss.mobile || {});
            }
        }
        if (this.options.popupCss.mobile && this.options.popupCss.desktop) {
            if (window.innerWidth > 768) {
                css(this.elements.popup, this.options.popupCss.desktop || {});
            }
            else if (window.innerWidth < 768) {
                css(this.elements.popup, this.options.popupCss.mobile || {});
            }
        }
    };
    PacificaPopup.prototype.build = function () {
        var overlay = document.createElement('DIV');
        overlay.setAttribute('pacifica-popup', 'true');
        var popup = document.createElement('DIV');
        popup.innerHTML = this.options.html;
        css(overlay, this.overlayStyle);
        css(popup, this.popupStyle);
        this.elements = { overlay: overlay, popup: popup };
    };
    return PacificaPopup;
}());
window.PacificaPopup = PacificaPopup;
//# sourceMappingURL=index.js.map