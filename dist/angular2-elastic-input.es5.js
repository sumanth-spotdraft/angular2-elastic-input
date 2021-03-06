import { Directive, ElementRef, HostListener, NgModule } from '@angular/core';
var ElasticInputDirective = /** @class */ (function () {
    /**
     * @param {?} element
     */
    function ElasticInputDirective(element) {
        this.element = element;
    }
    /**
     * @return {?}
     */
    ElasticInputDirective.prototype.onInput = function () {
        this.update();
    };
    /**
     * @return {?}
     */
    ElasticInputDirective.prototype.ngOnInit = function () {
        this.wrapper = document.createElement('div');
        this.wrapper.style.position = 'fixed';
        this.wrapper.style.top = '-999px';
        this.wrapper.style.left = '0';
        document.body.appendChild(this.wrapper);
        this.mirror = document.createElement('span');
        this.mirror.style.whiteSpace = 'pre';
        this.setMirrorStyle(this.mirror, this.element.nativeElement);
        this.wrapper.appendChild(this.mirror);
        this.update();
    };
    /**
     * @return {?}
     */
    ElasticInputDirective.prototype.ngAfterContentChecked = function () {
        this.update();
    };
    /**
     * @return {?}
     */
    ElasticInputDirective.prototype.ngAfterViewChecked = function () {
        this.update();
    };
    /**
     * @return {?}
     */
    ElasticInputDirective.prototype.ngOnDestroy = function () {
        this.mirror.remove();
        this.wrapper.remove();
    };
    /**
     * @param {?} mirror
     * @param {?} element
     * @return {?}
     */
    ElasticInputDirective.prototype.setMirrorStyle = function (mirror, element) {
        var /** @type {?} */ style = window.getComputedStyle(element);
        [
            'fontFamily',
            'fontSize',
            'fontWeight',
            'fontStyle',
            'letterSpacing',
            'textTransform',
            'wordSpacing'
        ].forEach(function (value) {
            mirror.style[value] = style[value];
        });
        mirror.style.paddingLeft = style.textIndent;
        if (style.boxSizing === 'border-box') {
            [
                'paddingLeft',
                'paddingRight',
                'borderLeftStyle',
                'borderLeftWidth',
                'borderRightStyle',
                'borderRightWidth'
            ].forEach(function (value) {
                mirror.style[value] = style[value];
            });
        }
        else if (style.boxSizing === 'padding-box') {
            ['paddingLeft', 'paddingRight'].forEach(function (value) {
                mirror.style[value] = style[value];
            });
        }
    };
    /**
     * @return {?}
     */
    ElasticInputDirective.prototype.update = function () {
        var /** @type {?} */ domEl = this.element.nativeElement;
        var /** @type {?} */ value = domEl.value || domEl.placeholder;
        if (this.content != value) {
            this.content = value;
        }
        else {
            return;
        }
        this.mirror.innerText = value;
        var /** @type {?} */ delta = 1;
        domEl.style.width = this.mirror.offsetWidth + delta + "px";
    };
    return ElasticInputDirective;
}());
ElasticInputDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[elastic-input]'
            },] },
];
/**
 * @nocollapse
 */
ElasticInputDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
ElasticInputDirective.propDecorators = {
    'onInput': [{ type: HostListener, args: ['input', ['$event.target'],] },],
};
var ElasticInputModule = /** @class */ (function () {
    function ElasticInputModule() {
    }
    /**
     * @return {?}
     */
    ElasticInputModule.forRoot = function () {
        return {
            ngModule: ElasticInputModule
        };
    };
    return ElasticInputModule;
}());
ElasticInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElasticInputDirective],
                exports: [ElasticInputDirective]
            },] },
];
/**
 * @nocollapse
 */
ElasticInputModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { ElasticInputModule, ElasticInputDirective as ɵa };
//# sourceMappingURL=angular2-elastic-input.es5.js.map
