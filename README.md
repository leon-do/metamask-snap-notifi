# MetaMask Snap Notifi

```
# .env
REDIS_URL="redis://default:r634ICgWt1N"
TAG="bitcoin"
VERCEL_OIDC_TOKEN="eyJhbGciOiJSaw"
X_BEARER_TOKEN="AAAAAAAAAAAA"
API_KEY=AAAAAAAAAAAA
```

```bash
curl http://localhost:3000/mezo?X_BEARER_TOKEN=AAAAAAAAAAAAAAAOio9C5Li
curl https://metamask-snap-notifi.vercel.app/mezo?X_BEARER_TOKEN=AAAAAAAAAAAAAAAOio9C5Li
```

## X API Response

```json
{
  "data": [
    {
      "id": "1976475243029102709",
      "edit_history_tweet_ids": ["1976475243029102709"],
      "created_at": "2025-10-10T02:29:53.000Z",
      "text": "@Olumilare GMezo!"
    },
    {
      "id": "1976463628623897065",
      "edit_history_tweet_ids": ["1976463628623897065"],
      "created_at": "2025-10-10T01:43:44.000Z",
      "text": "Savings ➡️ Bitcoin\nChecking ➡️ MUSD\nCredit ➡️ Bitcoin-backed loan\nEarn ➡️ Vaults\n\nThe bank you wish existed all along. Built on Bitcoin."
    },
    {
      "id": "1976339008750760051",
      "edit_history_tweet_ids": ["1976339008750760051"],
      "created_at": "2025-10-09T17:28:32.000Z",
      "text": "@Defi_Warhol https://t.co/ub4Ph5p2Fw"
    },
    {
      "id": "1976335841019428927",
      "edit_history_tweet_ids": ["1976335841019428927"],
      "created_at": "2025-10-09T17:15:57.000Z",
      "text": "@Defi_Warhol BitcoinFi will welcome the masses."
    }
  ],
  "meta": {
    "newest_id": "1976475243029102709",
    "oldest_id": "1976335841019428927",
    "result_count": 4
  }
}
```
