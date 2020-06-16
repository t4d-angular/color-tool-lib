import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

let ColorToolLibService = class ColorToolLibService {
    constructor() { }
};
ColorToolLibService.ɵprov = ɵɵdefineInjectable({ factory: function ColorToolLibService_Factory() { return new ColorToolLibService(); }, token: ColorToolLibService, providedIn: "root" });
ColorToolLibService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ColorToolLibService);

let ColorToolLibComponent = class ColorToolLibComponent {
    constructor() { }
    ngOnInit() {
    }
};
ColorToolLibComponent = __decorate([
    Component({
        selector: 'lib-color-tool-lib',
        template: `
    <p>
      color-tool-lib works!
    </p>
  `
    })
], ColorToolLibComponent);

let ColorToolLibModule = class ColorToolLibModule {
};
ColorToolLibModule = __decorate([
    NgModule({
        declarations: [ColorToolLibComponent],
        imports: [],
        exports: [ColorToolLibComponent]
    })
], ColorToolLibModule);

/*
 * Public API Surface of color-tool-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ColorToolLibComponent, ColorToolLibModule, ColorToolLibService };
//# sourceMappingURL=color-tool-lib.js.map
