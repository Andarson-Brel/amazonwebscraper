"use client";
import { scrapeAndStoreProduct } from "@/lib/actions";
import React, { FormEvent, useState } from "react";
const isValidUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const hostName = parsedUrl.hostname;
    if (
      hostName.includes("amazon.com") ||
      hostName.includes("amazon") ||
      hostName.endsWith("amazon") ||
      hostName.includes("google")
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }
};

export default function SearchBar() {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidLink = isValidUrl(searchPrompt);
    if (!isValidLink) alert("Please provide a valid link");
    try {
      setIsLoading(true);
      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        className="searchbar-input"
        type="text"
        placeholder="Enter product link"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
      />
      <button
        className="searchbar-btn"
        type="submit"
        disabled={searchPrompt === "" || isLoading}
      >
        {isLoading ? "Seaching..." : "Search"}
      </button>
    </form>
  );
}
