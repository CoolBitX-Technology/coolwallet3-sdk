
export const COIN_TYPE = '800000C3';

/* eslint-disable max-len */
export const TRANSFER = {
  script:
    '03010201C70700000000C3CC07C0020a02CAA0C70002CC07C0022208CAACC7000208BFACD7C00AFFF608CC07105aA00700CC07C0020801CC071012A00700CC07C0020a2dCC07C02D747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e7472616374CC071012A00700BFA2C71C1502BFACC7CC29150202BFACD7C03EFFF603BE0700BE0700BE0700BFACD7C048FFF60EDC07C003545258CAACCF0029155AF09FC00DBAF0CE6C190804DDE09700DAACD7C03EFFF606D207CC05065052455353425554546f4e',
  signature:
    'FA0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
};

export const FREEZE = {
  script:
    '03010201C70700000000C3CC07C0020a02CAA0C70002CC07C0022208CAACC7000208BFACD7C00AFFF608CC07105aA00700CC07C002080bCC071012A00700CC07C0020a32CC07C032747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e467265657a6542616c616e6365436f6e7472616374CC071012A00700BFA2C71C1502BFACD7C029FFF602BFACD7C033FFF6031AAC17C03D0601CC07C0025001BFACC7CC3E150F02BE0700BE0700BE0700BFACD7C053FFF60ED207CC0306545258467265657a65CAACCF003E155AF09FC00DBAF0CE6C190804DDE09700DAACD7C029FFF606D207CC05065052455353425554546f4e',
  signature:
    'FA0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
};

export const FREEZE_NO_RECEIVER = {
  script:
    '03010201C70700000000C3CC07C0020a02CAA0C70002CC07C0022208CAACC7000208BFACD7C00AFFF608CC07105aA00700CC07C002080bCC071012A00700CC07C0020a32CC07C032747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e467265657a6542616c616e6365436f6e7472616374CC071012A00700BFA2C71C1502BFACD7C029FFF602BFACD7C033FFF6031AAC17C03D0601CC07C0025001BE0700BE0700BE0700BFACD7C03EFFF60EDC07C003545258DC07C006467265657a65CAA2CF00155AF09FC00DBAF0CE6C190804DDE09700DAACD7C029FFF606D207CC05065052455353425554546f4e',
  signature:
    'FA0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
};

export const UNFREEZE = {
  script:
    '03010201C70700000000C3CC07C0020a02CAA0C70002CC07C0022208CAACC7000208BFACD7C00AFFF608CC07105aA00700CC07C002080cCC071012A00700CC07C0020a34CC07C034747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e556e667265657a6542616c616e6365436f6e7472616374CC071012A00700BFA2C71C15021AAC17C0290601CC07C0025001BFACC7CC2A150F02BE0700BE0700BE0700BFACD7C03FFFF60ED207CC0305545258556e66727aCAACCF002A155AF09FC00DBAF0CE6C190804DDE09700D207CC05065052455353425554546f4e',
  signature:
    'FA0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
};

export const UNFREEZE_NO_RECEIVER = {
  script:
    '03010201C70700000000C3CC07C0020a02CAA0C70002CC07C0022208CAACC7000208BFACD7C00AFFF608CC07105aA00700CC07C002080cCC071012A00700CC07C0020a34CC07C034747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e556e667265657a6542616c616e6365436f6e7472616374CC071012A00700BFA2C71C15021AAC17C0290601CC07C0025001BE0700BE0700BE0700BFACD7C02AFFF60EDC07C003545258DC07C005556e66727aCAA2CF00155AF09FC00DBAF0CE6C190804DDE09700D207CC05065052455353425554546f4e',
  signature:
    'FA0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
};

export const WITHDRAW = {
  script:
    '03010201C70700000000C3CC07C0020a02CAA0C70002CC07C0022208CAACC7000208BFACD7C00AFFF608CC07105aA00700CC07C002080dCC071012A00700CC07C0020a34CC07C034747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e576974686472617742616c616e6365436f6e7472616374CC071012A00700BFA2C71C1502BE0700BE0700BE0700BFACD7C029FFF60ED207CC0306545258526577617264CAA2CF00155AF09FC00DBAF0CE6C190804DDE09700D207CC05065052455353425554546f4e',
  signature:
    'FA0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
};

export const VOTE = {
  script:
    '03010201C70700000000C3CC07C0020a02CAA0C70002CC07C0022208CAACC7000208BFACD7C00AFFF608CC07105aA00700CC07C0020804CC071012A00700CC07C0020a30CC07C030747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e566f74655769746e657373436f6e7472616374CC071012A00700BFA2C71C1502CC071012A00700BFACC71C291502BFACD7C03EFFF602BE0700BE0700BE0700BE0700BFACD7C048FFF60ED207CC0304545258566f7465CAACCF0029155AF09FC00DBAF0CE6C190804DDE09700DAACD7C03EFFF606D207CC05065052455353425554546f4e',
  signature:
    'FA0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
};