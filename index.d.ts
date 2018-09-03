declare module 'egg' {
  export interface EggAppConfig {
    sessionRedis: {
      name: string
    }
  }

  export interface Application {
    /**
     * @member Application#sessionStore
     * @property {Function<string>} get - get redis session store
     * @property {Function<string, any, number?>} set - set the redis session store
     * @property {Function<string>} destroy - destroy of redis session store
     * @example
     * ```js
     * this.app.sessionStore.set('SESSION_KEY', { a: 1 }, 6000);
     * this.app.sessionStore.get('SESSION_KEY');
     * this.app.sessionStore.destroy('SESSION_KEY');
     * ```
     */
    sessionStore: {
      get: (key: string) => Promise<any>;
      set: (key: string, value: any, maxAge?: number | string) => Promise<void>;
      destroy: (key: string) => Promise<void>;
    };
  }
}
