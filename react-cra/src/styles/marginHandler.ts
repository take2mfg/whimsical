import { forEach } from 'lodash';

import { DIRECTION_VALUES } from './constants';

export function marginHandler(props: {}) {
  const re = new RegExp('^margin([T|B|L|R]{1})?-([0-9]+)$');

  const propsKeys = Object.keys(props).filter((key) => re.test(key));

  if (!propsKeys.length) {
    return ``;
  }

  let css = '';

  forEach(propsKeys, (key: string) => {
    const res = re.exec(key);

    if (res && res.length && res[2]) {
      const direction = res[1];
      const amount = res[2];

      if (isNaN(parseInt(amount, 10))) {
        return '';
      }

      css += 'margin';
      css += direction ? `-${DIRECTION_VALUES[direction]}: ` : ': ';
      css += `${amount}px;\n`;
    }
  });

  return css;
}
