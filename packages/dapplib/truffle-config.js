require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remain hour hunt lock bone silly'; 
let testAccounts = [
"0x194a304938a0ec6d4edbdee4211bb6cab0db5be3b50d3cf4be68ac4e33433b0b",
"0xe661a8d5c1e1e27e659724d627c7df8465531e8e2f802142bb7fefe910368eaa",
"0xc70a9c45c924c38b32cfa9283a35775f32222fa2a4471ccc4e8f15fd8dc08bae",
"0x5479fe098d4411cafff892fb45963cd0ee9cd8cb4f22f3a2dd758a2d50d5b28d",
"0x04414a65d86e4ce5ae69fe27d2a684876727a4df61a73587046c0dcb40c262ee",
"0xb0195dd36fc710d1fb631ecfc56ffc8dd3e33915be85d639747230229508cd61",
"0x31c1ecd040c15be407b4a1c17487c8827195646859908e197b5b902f61c612df",
"0x67fb0d2ad6dc93d961cedb09837f7f6f97784fcccfded3ffa400729aadf72de1",
"0x6d542d18c5b9e77f420d19173be246c260ccc1415cc511c23c688e7d83e226c6",
"0xdc486679dfa0d25e4a420d00c79e639059853bd83a9c1c002d8f7809b829c48e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
