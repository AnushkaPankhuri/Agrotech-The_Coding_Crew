import React, { useEffect, useState } from "react";

export default function MarketDataPage() {
  const [marketData, setMarketData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMarket, setSelectedMarket] = useState("all");

  useEffect(() => {
    const mockData = [
      { id: "1", product: "Rice (Basmati)", category: "Grains", currentPrice: 45.5, previousPrice: 44.2, change: 1.3, changePercent: 2.94, unit: "per kg", market: "Delhi", lastUpdated: "2 hours ago" },
      { id: "2", product: "Wheat", category: "Grains", currentPrice: 28.75, previousPrice: 29.1, change: -0.35, changePercent: -1.2, unit: "per kg", market: "Mumbai", lastUpdated: "1 hour ago" },
      { id: "3", product: "Tomatoes", category: "Vegetables", currentPrice: 35.0, previousPrice: 32.5, change: 2.5, changePercent: 7.69, unit: "per kg", market: "Bangalore", lastUpdated: "30 minutes ago" },
      { id: "4", product: "Onions", category: "Vegetables", currentPrice: 22.8, previousPrice: 25.2, change: -2.4, changePercent: -9.52, unit: "per kg", market: "Chennai", lastUpdated: "45 minutes ago" },
      { id: "5", product: "Apples", category: "Fruits", currentPrice: 120.0, previousPrice: 115.0, change: 5.0, changePercent: 4.35, unit: "per kg", market: "Delhi", lastUpdated: "1 hour ago" },
      { id: "6", product: "Bananas", category: "Fruits", currentPrice: 45.6, previousPrice: 48.2, change: -2.6, changePercent: -5.39, unit: "per dozen", market: "Kolkata", lastUpdated: "2 hours ago" },
      { id: "7", product: "Cotton", category: "Cash Crops", currentPrice: 5850.0, previousPrice: 5720.0, change: 130.0, changePercent: 2.27, unit: "per quintal", market: "Ahmedabad", lastUpdated: "3 hours ago" },
      { id: "8", product: "Sugarcane", category: "Cash Crops", currentPrice: 285.0, previousPrice: 290.0, change: -5.0, changePercent: -1.72, unit: "per quintal", market: "Pune", lastUpdated: "1.5 hours ago" },
    ];

    setMarketData(mockData);
    setFilteredData(mockData);
  }, []);

  useEffect(() => {
    let filtered = marketData;

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.product.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    if (selectedMarket !== "all") {
      filtered = filtered.filter((item) => item.market === selectedMarket);
    }

    setFilteredData(filtered);
  }, [searchTerm, selectedCategory, selectedMarket, marketData]);

  const categories = ["all", ...Array.from(new Set(marketData.map((item) => item.category)))];
  const markets = ["all", ...Array.from(new Set(marketData.map((item) => item.market)))];

  const refreshData = () => {
    alert("Market data refreshed (mock)");
  };

  return (
    <div className="page">
      <style>{`
        .page { font-family: sans-serif; padding: 20px; background: #f7f7f7; }
        .header, .filters, .summary { margin-bottom: 20px; background: white; padding: 20px; border-radius: 8px; }
        .header h1 { margin: 0; }
        .filters input, .filters select, .filters button {
          margin-right: 10px;
          padding: 8px;
          font-size: 14px;
        }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 16px; }
        .card { background: white; padding: 16px; border-radius: 8px; border: 1px solid #ddd; }
        .card h3 { margin: 0 0 4px; }
        .card p { margin: 4px 0; font-size: 14px; }
        .badge { padding: 2px 6px; border-radius: 4px; font-size: 12px; display: inline-block; }
        .up { color: green; }
        .down { color: red; }
        .summary .box { text-align: center; padding: 10px; background: #eee; border-radius: 6px; }
      `}</style>

      <div className="header">
        <h1>Market Data</h1>
        <p>Real-time agricultural commodity prices across major markets</p>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "all" ? "All Categories" : cat}
            </option>
          ))}
        </select>

        <select value={selectedMarket} onChange={(e) => setSelectedMarket(e.target.value)}>
          {markets.map((mkt) => (
            <option key={mkt} value={mkt}>
              {mkt === "all" ? "All Markets" : mkt}
            </option>
          ))}
        </select>
      </div>

      <div className="grid">
        {filteredData.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.product}</h3>
            <p>{item.category}</p>
            <span className="badge">{item.market}</span>
            <p>
              <strong>₹{item.currentPrice.toFixed(2)}</strong> ({item.unit})
            </p>
            <p className={item.change >= 0 ? "up" : "down"}>
              {item.change >= 0 ? "+" : ""}
              ₹{item.change.toFixed(2)} ({item.changePercent.toFixed(2)}%)
            </p>
            <p style={{ fontSize: "12px", color: "#777" }}>Updated {item.lastUpdated}</p>
          </div>
        ))}
      </div>

      {filteredData.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "20px", color: "#666" }}>
          No products found matching your criteria.
        </p>
      )}

      <div className="summary">
        <h2>Market Summary</h2>
        <div className="grid">
          <div className="box">
            <div className="up">{marketData.filter((item) => item.change > 0).length}</div>
            <p>Products Up</p>
          </div>
          <div className="box">
            <div className="down">{marketData.filter((item) => item.change < 0).length}</div>
            <p>Products Down</p>
          </div>
          <div className="box">
            <div>{marketData.filter((item) => item.change === 0).length}</div>
            <p>Unchanged</p>
          </div>
          <div className="box">
            <div>{markets.length - 1}</div>
            <p>Active Markets</p>
          </div>
        </div>
      </div>
    </div>
  );
}
