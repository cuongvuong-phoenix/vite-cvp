import { BaseError } from '../base';

export class ErrorRouterNameNotProvided extends BaseError {
  readonly name: string;
  readonly description: string;

  constructor(routeFullPath: string) {
    const name = 'RouterNameNotProvided';
    const description = `Must provide "name" for "${routeFullPath}" route.`;

    super(name, description);

    this.name = name;
    this.description = description;
  }
}
