# Movement Network Token List

## Description

This guide provides instructions on how to list Movement Tokens within the Movement Ecosystem. It includes the required structure, fields, and formatting to ensure seamless integration with the ecosystem.

## How to Contribute

### Opening a Pull Request

To add a new token listing:

1. Fork the repository and create a new branch.
2. Modify the token list JSON file, ensuring that new entries are added at the end.
3. Ensure that images are stored in the appropriate directories and named after the project's slug.
4. Open a pull request (PR) from an account with a verifiable history of interactions with the Movement Ecosystem.
5. The maintainers will review your PR and merge it if it meets all criteria.

Refrain from altering unrelated files, as this will only make the review process longer. Additionally, avoid adding any sensitive or speculative information to the repository.

An example of a good pull request would be:

- **Token JSON Modification**: Ensure the new token entry follows the defined JSON structure and contains specific attributes.
- **Logo**?: Logo size should be **200x200px**.

## Token Listing Structure

Each token should follow the defined JSON structure and contain specific attributes that describe its details. Below is the expected structure for listing Movement Tokens:

```json
{
    "0xa": {
        "chainId": 126,
        "tokenAddress": null,
        "faAddress": "0xa",
        "name": "MoveCoin",
        "symbol": "MOVE",
        "decimals": 8,
        "bridge": null,
        "logoUrl": "https://ipfs.io/ipfs/QmUv8RVdgo6cVQzh7kxerWLatDUt4rCEFoCTkCVLuMAa27",
        "websiteUrl": "https://movementnetwork.xyz",
        "coinGeckoId": "movement",
        "coinMarketCapId": 32452
    },
    "0x357b0b74bc833e95a115ad22604854d6b0fca151cecd94111770e5d6ffc9dc2b": {
        "chainId": 126,
        "tokenAddress": null,
        "faAddress": "0x357b0b74bc833e95a115ad22604854d6b0fca151cecd94111770e5d6ffc9dc2b",
        "name": "Ethereum Tether USD",
        "symbol": "USDT.e",
        "decimals": 6,
        "bridge": null,
        "logoUrl": "https://raw.githubusercontent.com/PanoraExchange/Aptos-Tokens/main/logos/USDT.svg",
        "websiteUrl": "https://tether.to",
        "coinGeckoId": "tether",
        "coinMarketCapId": 825
    }
}
```

## Required Fields

Each token entry must include the following fields (? indicates optional):

- Object key is the **Fungible Asset Address**. Not case sensitive.
- **chainId**: The identifier for the blockchain where the token exists. Movement chain id is 126.
- **tokenAddress**: The smart contract address of the Coin standard token. If not applicable, this field can be `null`.
- **faAddress**: The Fungible Asset Address of an Fungible Asset token. If not applicable, this field can be `null`.
- **name**: The official name of the token.
- **symbol**: The ticker symbol of the token.
- **decimals**: The number of decimal places the token supports.
- **bridge**?: Information about the bridge if the token is cross-chain; can be `null` if not applicable.
- **logoUrl**: A direct link to the token's logo.
  - Can be a raw GitHub link, an IPFS link, etc.
  - For IPFS storage, we recommend pinning the logo using [Thirdweb's guide](https://portal.thirdweb.com/infrastructure/storage/how-to-use-storage/upload-files-to-ipfs).
- **websiteUrl**: The official website for the token project.
- **coinGeckoId**?: The identifier used by CoinGecko to fetch the token's price.
- **coinMarketCapId**?: The identifier used by CoinMarketCap to fetch the token's price. Can also be found as UCID.

### Price Fetching

If either coinGeckoId or coinMarketCapId are present, it enables price fetching to be displayed across the infrastructure, dapps and explorers. Else, price will not be displayed.