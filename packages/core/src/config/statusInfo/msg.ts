import { CodeList } from './pattern'
export const MSG: CodeList = {
  _6E00: 'cls not supported',
  _6D00: 'ins not supported',
  _6982: 'security status not satisfied',
  _6F00: 'unknown error', 
  _6700: 'wrong length',
  _6A86: 'incorrect p1 & p2',
  _6884: 'command chaining not supported',
  _6881: 'logical channel not suppoered',
  _6201: 'incorrect fixed string',
  _6202: 'incorrect fixed string',
  _6203: 'fixed data needs to be zero',
  _6204: 'incorrect fixed string',
  _6205: 'data out of range',
  _6296: 'command no need secire channel',
  _6298: 'command need encryption',
  _6297: 'command need signature',
  _609C: 'the total length of the inspected data is lower than the signature (the signature is not placed?)',
  _609F: 'need effective nonce or unsupported packaging version of the card',
  _609D: 'appid need registered',
  _609E: 'check signature main function is failed',
  _6BAC: '',
  _6ED1: 'the data decrypted an incorrect result (PKCS5 check failed, the key may be wrong)',
  _6D63: 'path length is incorrect',
  _6D68: 'path is not standard',
  _6D6C: 'the path of SLIP10 contains non-harden index',
  _6D65: 'path uses unsupported scheme (limited to BIP32 or SLIP10)',
  _6AC3: 'unsupported signature algorithm',
  _6D6E: 'the required master key does not exist',
  _6091: 'data order is wrong',
  _6092: 'hash error',
  _609A: 'packaging version of the card not supported',
  _6985: 'conditions not satisfiled',
  _6A84: 'file full',
  _6100: 'bytes remaining 00',
  _6A80: 'wrong data',
  _6A82: 'file not found',
  _6984: 'data invalid',
  _6032: 'this version does not support 8032 instructions',
  _6ACC: 'script signature verification failed',
  _6ACA: 'unsupported script version',
  _6A0D: 'the argument as a switch parameter is out of range',
  _6A74: 'argument as a string contains abnormal characters',
  _6A71: 'transaction amount exceeds display limit',
  _6A72: 'transaction amount exceeds display limit',
  _6AE2: 'called the script command to throw out the error',
  _6A01: 'unsupported script command',
  _6A0B: 'path is too short',
  _6A0C: 'coin type of path not meet the script limit',
  _6A03: 'unsupported parameters appear in the script (the script content is incorrect)',
  _6A07: 'unsupported parameters appear in the script (the script content is incorrect)',
  _6A08: 'unsupported parameters appear in the script (the script content is incorrect)',
  _6A0A: 'unsupported parameters appear in the script (the script content is incorrect)',
  _6B03: 'exceed the upper limit when converting digital format',
  _6B04: 'input too long when converting digital format',
  _6B01: 'enter unexpected numbers when converting digital formats',
  _6B85: 'unexpected parameters when converting digital format(wrong script content)',
  _6AC0: 'need execute 80A2',
  _6AC2: 'p1 and script type not match',
  _6AC7: 'p1 not supported',
  _6AC5: 'script type not supported (only support P2PKH=00 P2SH=01)',
}