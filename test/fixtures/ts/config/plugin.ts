import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  redis: {
    enable: true,
    package: 'egg-redis',
  }
};

export default plugin;
