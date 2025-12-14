"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let vAny = 10; // We can assign anything to any
let vUnknown = 10; // We can assign anything to unknown just like any
let s1 = vAny; // Any is assignable to anything
if (typeof vUnknown === "string") {
    let s2 = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)
}
//# sourceMappingURL=typeAnyAndUnkown.js.map