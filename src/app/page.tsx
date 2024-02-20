import React, { useState, useEffect } from "react";
import Link from "next/link";
import flagsmith from "@/utils/flagsmith";

export const revalidate = 0;

export default function Home() {
  const [searchEnabled, setSearchEnabled] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      const flags = await flagsmith.getEnvironmentFlags();
      setSearchEnabled(flags.isFeatureEnabled("search"));
    }
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    // You can add further functionality here if needed
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // You can add functionality here to handle search submission
  };

  return (
    <main className="main">
      <div>
        <h2>Hello World</h2>
        <p>Test Changeset2</p>
      </div>
      <Link href="/about">About</Link>
      <br />
      {searchEnabled && (
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
      )}
    </main>
  );
}
