import { PACKAGES, exec } from './util';

PACKAGES.forEach((name) => {
  const pkgPath = `${__dirname}/../dist/@luizfbicalho/${name}`;

  exec(`cd ${pkgPath} && npm publish --access public`);
});
