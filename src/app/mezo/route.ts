import { NextResponse } from "next/server";
import { createClient } from "redis";

export async function GET(request: Request) {
  // fetch if API_KEY is valid
  const query = new URL(request.url).searchParams.get("API_KEY");
  if (query === process.env.API_KEY) await getTweets();

  // get from redis
  const redis = await createClient({ url: process.env.REDIS_URL }).connect();
  const lastTweet = JSON.parse((await redis.get("mezo")) as string);
  console.log(JSON.stringify(lastTweet, null, 2));

  // return last tweet with tag
  const response = lastTweet.data.find((tweet: { text: string }) =>
    tweet.text
      .toLowerCase()
      .includes(((process.env.TAG as string) || " ").toLowerCase())
  );
  return NextResponse.json(response || {});
}

async function getTweets() {
  // fetch last tweets
  const startTime = new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString();
  const url = `https://api.x.com/2/tweets/search/recent?query=from:MezoNetwork&start_time=${startTime}&tweet.fields=created_at,text&max_results=50`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.X_BEARER_TOKEN}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  console.log({ res });

  // if 200 save to redis
  if (res.data) {
    const redis = await createClient({ url: process.env.REDIS_URL }).connect();
    await redis.set("mezo", JSON.stringify(res));
  }
}
