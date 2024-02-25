import { NextResponse, NextRequest } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();

export async function POST(req: NextRequest) {
    const res = NextResponse;

    const { params } = await req.json();

    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `Based on the description given to you, you need to create a JSON object that will be given to spotify api to reccomend songs. The json object should have: seed_artists(empty string), seed_genres(comma seperated values of music genres that match the music), min_acousticness(float 0-1), max_acousticness(float 0-1), target_acousticness(float 0-1), min_danceability(float 0-1), max_danceability(float 0-1), target_danceability(float 0-1), min_energy(float 0-1), max_energy(float 0-1), target_energy(float 0-1), min_instrumentalness(float 0-1), max_instrumentalness(float 0-1), target_instrumentalness(float 0-1), min_liveness(float 0-1), max_liveness(float 0-1), target_liveness(float 0-1) Only the json object should be returned. You are being used as an API route.`,
            },
            {
                role: "user",
                content: `${params.description}`
            },
        ],
        model: "gpt-3.5-turbo-0125",
        response_format: { type: "json_object" },
    });

    const recommendation = JSON.parse(completion.choices[0].message.content);

    return res.json({ message: "OK", recomendation: recommendation }, { status: 200 });
}