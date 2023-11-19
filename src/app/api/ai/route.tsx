import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// Set the runtime to edge for best performance
export const runtime = 'edge';

export async function POST(req: Request) {
  const {description} = await req.json();

  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: 'user',
        content: `Based on ${description} you need to help create a json object that will be given to spotify api to reccomend songs. The json object should have: seed_artists(this should be empty),  seed_genres(string), min_acousticness(number 0-1), max_acousticness(number 0-1), target_acousticness(number 0-1), min_danceability(number 0-1), max_danceability(number 0-1), target_danceability(number 0-1), min_energy(number 0-1), max_energy(number 0-1), target_energy(number 0-1), min_instrumentalness(number 0-1), max_instrumentalness(number 0-1), target_instrumentalness(0-1), min_liveness(number 0-1), max_liveness(number 0-1), target_liveness(number 0-1) Only the json object should be returned.`,
      },
    ],
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}