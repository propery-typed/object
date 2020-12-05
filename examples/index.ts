/* eslint-disable @typescript-eslint/no-unused-vars */
import { typedGet } from '@/typed-get';

const something = {
  foo: {
    bar: {
      num: 67,
      str: null,
    },
  },
  some: {
    prop: 12,
  },
  topProp: 25,
};

const somethingOther = {
  fooql: {
    barer: {
      num: 67,
      str: null,
    },
  },
  qool: {
    thingy: {
      d: ['lol'] as const,
    },
  },
};

const res = typedGet(somethingOther, 'qool/thingy/d');
