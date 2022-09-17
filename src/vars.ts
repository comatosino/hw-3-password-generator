const RANGE = /\b([8-9]|[1-9][0-9]|1[01][0-9]|12[0-8])\b/;
const CHARS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  lowercase: 'abcdefghijklmnopqrstuvwxyz'.split(''),
  numbers: '0123456789'.split(''),
  special: '!@#$%&?'.split(''),
};

export { RANGE, CHARS };
