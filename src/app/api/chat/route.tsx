import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// Set the runtime to edge for best performance
export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const description = messages[messages.length - 1].content;

  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "user",
        content: `Based on "${description}" you need to create a JSON object that will be given to spotify api to reccomend songs. The json object should have: seed_artists(empty string), seed_genres(comma seperated values of music genres that match the music), min_acousticness(float 0-1), max_acousticness(float 0-1), target_acousticness(float 0-1), min_danceability(float 0-1), max_danceability(float 0-1), target_danceability(float 0-1), min_energy(float 0-1), max_energy(float 0-1), target_energy(float 0-1), min_instrumentalness(float 0-1), max_instrumentalness(float 0-1), target_instrumentalness(float 0-1), min_liveness(float 0-1), max_liveness(float 0-1), target_liveness(float 0-1) Only the json object should be returned. You are being used as an API route, do not say anything else.`,
      },
    ],
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
