/*
Create a Typescript Mixin
https://blog.logrocket.com/typescript-mixins-examples-and-use-cases/
improve multiclass inheritance
the function is to join two or more class declarations
*/
export function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}