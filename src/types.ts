import { App } from 'vue';
import { RouteLocationNormalizedLoaded, Router } from 'vue-router';

export interface SSRContext {
  app: App<Element>;
  router: Router;
  initialRoute: RouteLocationNormalizedLoaded & { href: string };
  initialState: any;
  url: URL;
  isClient: boolean;
}
