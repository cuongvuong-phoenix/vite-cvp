export class BaseError extends Error {
  readonly name: string;

  constructor(name: string, description: string) {
    super(description);

    // @ts-ignore
    if (Error.captureStackTree) {
      // @ts-ignore
      Error.captureStackTree(this, BaseError);
    }

    this.name = name;
  }
}
