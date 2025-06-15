import React, { useState, useEffect } from 'react';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Download, Filter, Zap, MapPin, TrendingUp, Calendar } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SelectInput from '../components/forms/SelectInput';
import { toast } from 'react-toastify';
import './Demographics.css'; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function Demographics() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCrop, setSelectedCrop] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('year');

  useEffect(() => {
    setIsLoading(true);

    const loadData = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(loadData);
  }, [selectedRegion, selectedCrop, selectedTimeframe]);

  const marketTrendsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Wheat ($/bushel)',
        data: [7.2, 7.4, 7.6, 7.3, 7.8, 8.1, 8.0, 7.9, 8.2, 8.4, 8.5, 8.7],
        borderColor: '#2E7D32',
        backgroundColor: 'rgba(46, 125, 50, 0.1)',
        tension: 0.4,
        fill: true
      },
      {
        label: 'Corn ($/bushel)',
        data: [5.8, 5.9, 6.1, 6.0, 6.2, 6.5, 6.4, 6.3, 6.7, 6.9, 7.0, 7.2],
        borderColor: '#FFC107',
        backgroundColor: 'rgba(255, 193, 7, 0.1)',
        tension: 0.4,
        fill: true
      },
      {
        label: 'Soybeans ($/bushel)',
        data: [13.2, 13.5, 13.8, 13.6, 14.0, 14.3, 14.1, 13.9, 14.5, 14.8, 15.0, 15.2],
        borderColor: '#795548',
        backgroundColor: 'rgba(121, 85, 72, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const cropDistributionData = {
    labels: ['Wheat', 'Corn', 'Soybeans', 'Rice', 'Barley', 'Cotton'],
    datasets: [
      {
        data: [35, 25, 20, 10, 7, 3],
        backgroundColor: [
          '#2E7D32',
          '#FFC107',
          '#795548',
          '#4CAF50',
          '#FF9800',
          '#A1887F'
        ],
        borderWidth: 1
      }
    ]
  };

  const regionTradingData = {
    labels: ['Midwest', 'South', 'West', 'Northeast', 'Southwest', 'Northwest'],
    datasets: [
      {
        label: 'Trading Volume ($ millions)',
        data: [420, 340, 285, 190, 210, 170],
        backgroundColor: '#4CAF50',
      }
    ]
  };

  const farmerMiddlemanRatioData = {
    labels: ['Farmers', 'Middlemen'],
    datasets: [
      {
        data: [65, 35],
        backgroundColor: [
          '#2E7D32',
          '#795548'
        ],
        borderWidth: 1
      }
    ]
  };

  const seasonalityData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Transactions',
        data: [350, 420, 480, 520, 610, 710, 805, 900, 820, 740, 630, 490],
        backgroundColor: '#4CAF50',
      }
    ]
  };

  const handleDownload = () => {
    toast.info('Report downloading... You will receive an email shortly.');
  };

  return (
    <div className="demographics-page">
      <section className="hero-section">
        <div className="container-custom">
          <div className="max-w-3xl"> 
            <h1 className="hero-title">
              Agricultural Market Insights
            </h1>
            <p className="hero-subtitle">
              Access real-time data and analytics to make informed decisions about your agricultural business.
            </p>
          </div>
        </div>
      </section>

      <section className="filters-section">
        <div className="container-custom">
          <div className="filters-content">
            <div className="filter-label-group">
              <Filter size={20} className="filter-icon" />
              <span className="filter-label-text">Filter Data:</span>
            </div>

            <div className="filter-inputs-group">
              <div className="filter-select">
                <SelectInput
                  name="region"
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  options={[
                    { value: 'all', label: 'All Regions' },
                    { value: 'midwest', label: 'Midwest' },
                    { value: 'south', label: 'South' },
                    { value: 'west', label: 'West' },
                    { value: 'northeast', label: 'Northeast' },
                  ]}
                  className="select-input-py-1" 
                  fullWidth={false}
                />
              </div>

              <div className="filter-select">
                <SelectInput
                  name="crop"
                  value={selectedCrop}
                  onChange={(e) => setSelectedCrop(e.target.value)}
                  options={[
                    { value: 'all', label: 'All Crops' },
                    { value: 'wheat', label: 'Wheat' },
                    { value: 'corn', label: 'Corn' },
                    { value: 'soybean', label: 'Soybean' },
                    { value: 'rice', label: 'Rice' },
                  ]}
                  className="select-input-py-1"
                  fullWidth={false}
                />
              </div>

              <div className="filter-select">
                <SelectInput
                  name="timeframe"
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                  options={[
                    { value: 'month', label: 'Last Month' },
                    { value: 'quarter', label: 'Last Quarter' },
                    { value: 'year', label: 'Last Year' },
                    { value: '5year', label: 'Last 5 Years' },
                  ]}
                  className="select-input-py-1"
                  fullWidth={false}
                />
              </div>
            </div>

            
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container-custom">
          <div className="stats-grid">
            <Card className="stat-card" hoverEffect={true}>
              <div className="stat-content">
                <div className="stat-icon-wrapper">
                  <Zap className="stat-icon" size={24} />
                </div>
                <div className="stat-text-content">
                  <p className="stat-label">Average Price Increase</p>
                  <p className="stat-value">27.3%</p>
                  <p className="stat-change">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="stat-change-icon">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    Up 5.2% from last year
                  </p>
                </div>
              </div>
            </Card>

            <Card className="stat-card" hoverEffect={true}>
              <div className="stat-content">
                <div className="stat-icon-wrapper">
                  <TrendingUp className="stat-icon" size={24} />
                </div>
                <div className="stat-text-content">
                  <p className="stat-label">Total Trading Volume</p>
                  <p className="stat-value">$1.84B</p>
                  <p className="stat-change">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="stat-change-icon">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    Up 12.7% from last year
                  </p>
                </div>
              </div>
            </Card>
            <Card className="stat-card" hoverEffect={true}>
              <div className="stat-content">
                <div className="stat-icon-wrapper">
                  <MapPin className="stat-icon" size={24} />
                </div>
                <div className="stat-text-content">
                  <p className="stat-label">Active Regions</p>
                  <p className="stat-value">48 States</p>
                  <p className="stat-change">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="stat-change-icon">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    2 new regions added
                  </p>
                </div>
              </div>
            </Card>
            <Card className="stat-card" hoverEffect={true}>
              <div className="stat-content">
                <div className="stat-icon-wrapper">
                  <Calendar className="stat-icon" size={24} />
                </div>
                <div className="stat-text-content">
                  <p className="stat-label">Avg. Transaction Time</p>
                  <p className="stat-value">3.2 Days</p>
                  <p className="stat-change">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="stat-change-icon">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    Improved by 15%
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="charts-section">
        <div className="container-custom">
          <div className="charts-grid-main">
            <Card title="Market Price Trends" className="chart-card">
              {isLoading ? (
                <div className="chart-loading">
                  <div className="spinner"></div>
                </div>
              ) : (
                <Line
                  data={marketTrendsData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                      tooltip: {
                        mode: 'index',
                        intersect: false,
                      }
                    },
                    scales: {
                      y: {
                        beginAtZero: false,
                        title: {
                          display: true,
                          text: 'Price ($/bushel)'
                        }
                      },
                      x: {
                        title: {
                          display: true,
                          text: selectedTimeframe === 'year' ? 'Month' : 'Period'
                        }
                      }
                    },
                    interaction: {
                      mode: 'nearest',
                      axis: 'x',
                      intersect: false
                    }
                  }}
                />
              )}
            </Card>

            <Card title="Crop Distribution" className="chart-card">
              {isLoading ? (
                <div className="chart-loading">
                  <div className="spinner"></div>
                </div>
              ) : (
                <div className="chart-area-h80">
                  <Pie
                    data={cropDistributionData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'right',
                        },
                        tooltip: {
                          callbacks: {
                            label: function(context) {
                              return `${context.label}: ${context.raw}%`;
                            }
                          }
                        }
                      }
                    }}
                  />
                </div>
              )}
            </Card>
          </div>

          <div className="charts-grid-secondary">
            <Card title="Regional Trading Volume" className="chart-card-large">
              {isLoading ? (
                <div className="chart-loading">
                  <div className="spinner"></div>
                </div>
              ) : (
                <Bar
                  data={regionTradingData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        display: false,
                      },
                      tooltip: {
                        callbacks: {
                          label: function(context) {
                            return `$${context.raw} million`;
                          }
                        }
                      }
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        title: {
                          display: true,
                          text: 'Volume ($ millions)'
                        }
                      }
                    }
                  }}
                />
              )}
            </Card>

            <Card title="Farmer to Middleman Ratio">
              {isLoading ? (
                <div className="chart-loading">
                  <div className="spinner"></div>
                </div>
              ) : (
                <div className="chart-area-h80">
                  <Doughnut
                    data={farmerMiddlemanRatioData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'bottom',
                        },
                        tooltip: {
                          callbacks: {
                            label: function(context) {
                              return `${context.label}: ${context.raw}%`;
                            }
                          }
                        }
                      },
                      cutout: '70%'
                    }}
                  />
                </div>
              )}
            </Card>
          </div>

          <div className="chart-full-width">
            <Card title="Transaction Seasonality">
              {isLoading ? (
                <div className="chart-loading">
                  <div className="spinner"></div>
                </div>
              ) : (
                <Bar
                  data={seasonalityData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        display: false,
                      }
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        title: {
                          display: true,
                          text: 'Number of Transactions'
                        }
                      },
                      x: {
                        title: {
                          display: true,
                          text: 'Month'
                        }
                      }
                    }
                  }}
                />
              )}
            </Card>
          </div>
        </div>
      </section>

      <section className="insights-section">
        <div className="container-custom">
          <h2 className="insights-title">Key Market Insights</h2>

          <div className="insights-grid">
            <Card className="card-hover-effect"> 
              <h3 className="insight-card-title">Price Trends</h3>
              <p className="insight-card-text">
                Commodity prices show steady growth across all major crops, with wheat leading at 27.3% annual increase.
                Continued growth is expected through Q4 due to increased global demand.
              </p>
              <ul className="insight-list">
                <li className="insight-list-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="insight-list-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  Wheat: +27.3% (YoY)
                </li>
                <li className="insight-list-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="insight-list-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  Corn: +24.1% (YoY)
                </li>
                <li className="insight-list-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="insight-list-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  Soybeans: +15.7% (YoY)
                </li>
              </ul>
            </Card>

            <Card className="card-hover-effect">
              <h3 className="insight-card-title">Regional Analysis</h3>
              <p className="insight-card-text">
                The Midwest continues to dominate trading volume with 30% market share, but the South is showing the fastest growth
                rate at 18.2% year-over-year.
              </p>
              <ul className="insight-list">
                <li className="insight-list-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="insight-list-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Midwest: $420M (+12.4% YoY)
                </li>
                <li className="insight-list-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="insight-list-icon text-success" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  South: $340M (+18.2% YoY)
                </li>
                <li className="insight-list-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="insight-list-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  West: $285M (+10.5% YoY)
                </li>
              </ul>
            </Card>

            <Card className="card-hover-effect">
              <h3 className="insight-card-title">Market Predictions</h3>
              <p className="insight-card-text">
                Based on current trends and historical data, our analysts predict continued growth in agricultural
                commodity prices through the next 6 months.
              </p>
              <ul className="insight-list">
                <li className="insight-list-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="insight-list-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  Wheat predicted to reach $9.50/bushel by Q1 2025
                </li>
                <li className="insight-list-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="insight-list-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  South region expected to surpass Midwest by 2026
                </li>
                <li className="insight-list-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="insight-list-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  Transaction volume projected to increase 35% in next year
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Demographics;