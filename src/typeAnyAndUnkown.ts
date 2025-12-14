let vAny: any = 10; // We can assign anything to any
let vUnknown: unknown = 10; // We can assign anything to unknown just like any

let s1: string = vAny; // Any is assignable to anything
if (typeof vUnknown === "string") {
  let s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)
}
