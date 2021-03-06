import { EDDSACoin } from '@coolwallets/coin';
import { SDKError } from '@coolwallets/errors';
import { pubKeyToAddress } from './utils';
import signTx from './sign';

type Transport = import('@coolwallets/transport').default;
type protocol = import('./types').protocol

export default class XLM extends EDDSACoin {
  constructor(transport: Transport, appPrivateKey: string, appId:string) {
    super(transport, appPrivateKey, appId, '94');
  }

  async getAccount(accountIndex: number, protocol: protocol = 'SLIP0010'): Promise<string> {
    if (accountIndex !== 0) throw new SDKError('Not Supported', 'Only support account index = 0 for now.');
    const pubKey = await this.getPublicKey(accountIndex, protocol);
    return pubKeyToAddress(pubKey);
  }

  /**
   * sign XLM signatureBase with account 0, return signature.
   */
  async signTransaction(
    signatureBase: Buffer,
    accountIndex: number,
    protocol: protocol | undefined,
    confirmCB: Function | undefined,
    authorizedCB: Function | undefined,
  ) : Promise<Buffer> {
    if (accountIndex !== 0) throw new SDKError('Not Supported', 'Only support account index = 0 for now.');
    const protocolToUse = protocol || 'SLIP0010';
    const signature = signTx(
      this.transport,
      this.appPrivateKey,
      this.appId,
      this.coinType,
      signatureBase,
      accountIndex,
      protocolToUse,
      confirmCB,
      authorizedCB,
    );

    return signature;
  }
}
