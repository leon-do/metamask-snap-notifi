import { NextResponse } from "next/server";

let lastTweet = {
  data: [
    {
      id: "1976475243029102709",
      edit_history_tweet_ids: ["1976475243029102709"],
      created_at: "2025-10-10T02:29:53.000Z",
      text: "@Olumilare GMezo!",
    },
    {
      id: "1976463628623897065",
      edit_history_tweet_ids: ["1976463628623897065"],
      created_at: "2025-10-10T01:43:44.000Z",
      text: "Savings ➡️ Bitcoin\nChecking ➡️ MUSD\nCredit ➡️ Bitcoin-backed loan\nEarn ➡️ Vaults\n\nThe bank you wish existed all along. Built on Bitcoin.",
    },
    {
      id: "1976339008750760051",
      edit_history_tweet_ids: ["1976339008750760051"],
      created_at: "2025-10-09T17:28:32.000Z",
      text: "@Defi_Warhol https://t.co/ub4Ph5p2Fw",
    },
    {
      id: "1976335841019428927",
      edit_history_tweet_ids: ["1976335841019428927"],
      created_at: "2025-10-09T17:15:57.000Z",
      text: "@Defi_Warhol BitcoinFi will welcome the masses.",
    },
  ],
  meta: {
    newest_id: "1976475243029102709",
    oldest_id: "1976335841019428927",
    result_count: 4,
  },
};

export async function GET(request: Request) {
  // fetch if X_BEARER_TOKEN is valid
  const query = new URL(request.url).searchParams.get("X_BEARER_TOKEN");
  if (query === process.env.X_BEARER_TOKEN) await setTweets();
  // return last tweet with tag
  return NextResponse.json(
    lastTweet.data.find((tweet) =>
      tweet.text
        .toLowerCase()
        .includes((process.env.TAG as string || "bitcoin").toLowerCase())
    )
  );
}

const setTweets = async () => {
  const startTime = new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString();
  const url = `https://api.x.com/2/tweets/search/recent?query=from:MezoNetwork&start_time=${startTime}&tweet.fields=created_at,text&max_results=50`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.X_BEARER_TOKEN}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  lastTweet = res;
};
