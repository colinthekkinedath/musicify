"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { useChat } from "ai/react";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [description, setDescription] = useState("");
  const [recommednation, setRecommedation] = useState({});

  const [results, setResults] = useState(null);

  const { input, handleInputChange, handleSubmit, isLoading, messages } =
    useChat({
      body: {
        description,
      },
    });

  const onSubmit = (e: any) => {
    setDescription(input);
    handleSubmit(e);
  };

  const search = async () => {
    try {
      const response = await axios.get("/api/search", {
        params: {
          query: encodeURIComponent("genre:country"),
        },
      });
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const lastMessage = messages[messages.length - 1];
  const generatedRecommendations: string =
    lastMessage?.role === "assistant" ? lastMessage.content : "";

  return (
    <main className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Hero />
      <form className="max-w-xl w-full" onSubmit={handleSubmit}>
        <div className="text-left mt-10 text-2xl font-bold">step 1.</div>
        <div className="flex items-center space-x-3">
          <p className="text-left font-medium">
            describe what would you like to listen to!
          </p>
        </div>
        <textarea
          value={input}
          onChange={handleInputChange}
          rows={4}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 text-stone-900"
          placeholder={"e.g. watching sunset on a beach"}
        />
        {!isLoading && (
          <button
            className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
            type="submit"
          >
            get recommendations &rarr;
          </button>
        )}
        {isLoading && (
          <button
            className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
            disabled
          >
            <span className="loading">
              <span style={{ backgroundColor: "white" }} />
              <span style={{ backgroundColor: "white" }} />
              <span style={{ backgroundColor: "white" }} />
            </span>
          </button>
        )}
      </form>
      <div className="grid lg:grid-cols-3 gap-x-7 gap-y-14 sm:grid-cols-1 md:grid-cols-2">
        <Card
          image={
            "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
          }
          title={"title"}
          artist={"artist"}
          album={"album"}
          genre={"genre"}
        />
        <Card
          image={
            "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
          }
          title={"title"}
          artist={"artist"}
          album={"album"}
          genre={"genre"}
        />
        <Card
          image={
            "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
          }
          title={"title"}
          artist={"artist"}
          album={"album"}
          genre={"genre"}
        />
        <Card
          image={
            "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
          }
          title={"title"}
          artist={"artist"}
          album={"album"}
          genre={"genre"}
        />
        <Card
          image={
            "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
          }
          title={"title"}
          artist={"artist"}
          album={"album"}
          genre={"genre"}
        />
        <Card
          image={
            "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
          }
          title={"title"}
          artist={"artist"}
          album={"album"}
          genre={"genre"}
        />
      </div>
      <button onClick={search}>console log</button>
      <button onClick={() => console.log(results)}>console log</button>
      <Footer />
    </main>
  );
}
