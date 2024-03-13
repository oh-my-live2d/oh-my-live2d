import fs from 'fs';
import { createRequire } from 'module';
import path from 'path';

export const getModuleDir = (moduleEntry: string): string | undefined => {
  const packageName = moduleEntry.includes('/')
    ? moduleEntry.startsWith('@')
      ? moduleEntry.split('/').slice(0, 2).join('/')
      : moduleEntry.split('/')[0]
    : moduleEntry;
  const require = createRequire(import.meta.url);
  const lookupPaths = require.resolve.paths(moduleEntry)?.map((p) => path.join(p, packageName));

  return lookupPaths?.find((p) => fs.existsSync(p));
};
