import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const res = NextResponse;
  const { query } = await req.json();
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

    const searchResponse = await axios.get(
      "https://api.spotify.com/v1/search",
      {
        params: {
          q: query,
          type: "artist",
        },
        headers: {
          Authorization: `Bearer ${response.data.access_token}`,
        },
      },
    );

    return res.json(
      { message: "OK", result: searchResponse.data },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return res.json({ message: error }, { status: 500 });
  }
}
