import { env } from 'src/enviroments/env';

export const jwtConsts = {
  secret: env.jwtKey,
};