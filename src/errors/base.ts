export class BaseError extends Error {
  readonly name: string;

  constructor(name: string, description: string) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    this.name = name;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BaseError);
    }
  }
}
