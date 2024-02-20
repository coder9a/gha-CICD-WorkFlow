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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // You can add functionality here to handle search submission
    console.log("Search submitted:", searchValue);
  };

  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </header>
      <main className="main">
        <section className="hero">
          <h1>Welcome to Our Website</h1>
          <p>Explore and discover amazing content.</p>
        </section>
        <section className="content">
          <div>
            <h2>Latest Updates</h2>
            <p>Stay tuned for exciting news and events.</p>
          </div>
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
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Our Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
