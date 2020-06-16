import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

var ColorToolLibService = /** @class */ (function () {
    function ColorToolLibService() {
    }
    ColorToolLibService.ɵprov = ɵɵdefineInjectable({ factory: function ColorToolLibService_Factory() { return new ColorToolLibService(); }, token: ColorToolLibService, providedIn: "root" });
    ColorToolLibService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], ColorToolLibService);
    return ColorToolLibService;
}());

var ColorToolLibComponent = /** @class */ (function () {
    function ColorToolLibComponent() {
    }
    ColorToolLibComponent.prototype.ngOnInit = function () {
    };
    ColorToolLibComponent = __decorate([
        Component({
            selector: 'lib-color-tool-lib',
            template: "\n    <p>\n      color-tool-lib works!\n    </p>\n  "
        })
    ], ColorToolLibComponent);
    return ColorToolLibComponent;
}());

var ColorToolLibModule = /** @class */ (function () {
    function ColorToolLibModule() {
    }
    ColorToolLibModule = __decorate([
        NgModule({
            declarations: [ColorToolLibComponent],
            imports: [],
            exports: [ColorToolLibComponent]
        })
    ], ColorToolLibModule);
    return ColorToolLibModule;
}());

/*
 * Public API Surface of color-tool-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ColorToolLibComponent, ColorToolLibModule, ColorToolLibService };
//# sourceMappingURL=color-tool-lib.js.map
