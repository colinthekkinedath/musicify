import { NextResponse } from "next/server";
import OpenAI from "openai";
import axios from "axios";

const openai = new OpenAI();

export async function POST(req) {
  const res = NextResponse;

  const { params } = await req.json();

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Based on the description given to you, you need to create a JSON object that will be given to spotify api to reccomend songs. The json object should have: limit(6), market(US), seed_genres(comma seperated values of music genres that match the music) this one is required, target_acousticness(float 0-1), target_danceability(float 0-1), target_energy(float 0-1), target_instrumentalness(float 0-1), target_liveness(float 0-1) Only the json object should be returned. You are being used as an API route.`,
      },
      {
        role: "user",
        content: `${params.description}`,
      },
    ],
    model: "gpt-3.5-turbo-0125",
    response_format: { type: "json_object" },
  });

  const recommendation = JSON.parse(completion.choices[0].message.content);

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "client_credentials",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(
            `${process.env.SPOTIFY_PUBLIC_API}:${process.env.SPOTIFY_SECRET_API}`,
          ).toString("base64")}`,
        },
      },
    );

    const recommendations = await axios.get(
      "https://api.spotify.com/v1/recommendations",
      {
        params: recommendation,
        headers: {
          Authorization: `Bearer ${response.data.access_token}`,
        },
      },
    );

    console.log(recommendations.data.tracks);

    return res.json(
      { message: "OK", result: recommendations.data.tracks },
      { status: 200 },
    );
  } catch (error) {
    console.log(error.message);
    console.log(error);
    return res.json({ message: error }, { status: 500 });
  }
}
