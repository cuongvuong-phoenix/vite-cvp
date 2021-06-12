import { BaseError } from '../base';

export class ErrorRouterNameNotProvided extends BaseError {
  constructor(path: string) {
    const name = 'RouterNameNotProvided';
    const description = `Must provide "name" for "${path}" route.`;

    super(name, description);
  }
}
