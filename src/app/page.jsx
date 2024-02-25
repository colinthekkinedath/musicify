"use client";
import Image from "next/image";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { ImSpinner8 } from "react-icons/im";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);

  const generateRecs = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/getRecs", {
        params: { description: prompt },
      });
      setResults(response.data.result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Hero />
      <div className="max-w-xl w-full">
        <div className="text-left mt-10 text-2xl font-bold">step 1.</div>
        <div className="flex items-center space-x-3">
          <p className="text-left font-medium">
            describe what would you like to listen to!
          </p>
        </div>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={4}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 text-stone-900"
          placeholder={"e.g. watching sunset on a beach"}
        />
        {!isLoading && (
          <button
            className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
            onClick={generateRecs}
          >
            get recommendations &rarr;
          </button>
        )}
        {isLoading && (
          <ImSpinner8 className="animate-spin flex w-full justify-center" />
        )}
      </div>
      <div className="grid lg:grid-cols-3 gap-x-7 gap-y-14 sm:grid-cols-1 md:grid-cols-2">
        {results &&
          results.map((track, idx) => (
            <Card
              key={idx}
              image={track.album.images[0].url}
              title={track.name}
              artist={track.artists[0].name}
              album={track.album.name}
              link={track.external_urls.spotify}
            />
          ))}
      </div>
      <Footer />
    </main>
  );
}
