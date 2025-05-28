import fs from 'fs';
import { hardcodedTokens } from './hardcodedTokens.js';

export function transformTokens(tokensObj) {
  const transformedTokens = {};
  Object.entries(tokensObj).forEach(([key, token]) => {
    transformedTokens[key] = {
      chainId: token.chainId,
      tokenAddress: token.tokenAddress,
      faAddress: token.faAddress,
      name: token.name,
      symbol: token.symbol,
      decimals: token.decimals,
      bridge: token.bridge,
      logoUrl: token.logoUrl,
      websiteUrl: token.websiteUrl,
      coinGeckoId: token.coinGeckoId,
      coinMarketCapId: token.coinMarketCapId,
    };
  });
  return transformedTokens;
}

const transformedTokens = transformTokens(hardcodedTokens);
fs.writeFileSync('rectified.json', JSON.stringify(transformedTokens, null, 2));