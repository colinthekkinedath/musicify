import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const res = NextResponse;
  const genre = req.nextUrl.searchParams.get("genre");
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
          q: genre,
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
