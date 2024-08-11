import React, { useState, useEffect } from 'react';
import HeaderAuth from '../../Components/Auth/HeaderAuth';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const DashboardScreen = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Get user info from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  // Example data for charts
  const movieStatistics = [
    { name: 'Action', value: 400 },
    { name: 'Comedy', value: 300 },
    { name: 'Drama', value: 300 },
    { name: 'Horror', value: 200 },
  ];

  const monthlySales = [
    { month: 'Jan', sales: 2400 },
    { month: 'Feb', sales: 2210 },
    { month: 'Mar', sales: 2290 },
    { month: 'Apr', sales: 2000 },
    { month: 'May', sales: 2181 },
    { month: 'Jun', sales: 2500 },
    { month: 'Jul', sales: 2100 },
    { month: 'Aug', sales: 2100 },
    { month: 'Sep', sales: 2300 },
    { month: 'Oct', sales: 2400 },
    { month: 'Nov', sales: 2210 },
    { month: 'Dec', sales: 2290 },
  ];

  return (
    <>
      <HeaderAuth user={userInfo} />
      <div className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8">Dashboard</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            
            {/* User Greeting Card */}
            <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Hello {userInfo?.name}</h2>
                <p className="text-gray-600 mt-1 md:mt-2">Welcome back to your dashboard!</p>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
                <span className="text-lg md:text-xl font-bold">{userInfo?.name[0]}</span>
              </div>
            </div>

            {/* Movie Statistics Pie Chart */}
            <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 flex flex-col items-center">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Movie Genres Distribution</h2>
              <div className="w-full max-w-xs md:max-w-md lg:max-w-lg">
                <PieChart width={300} height={300}>
                  <Pie
                    data={movieStatistics}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill="#8884d8"
                    label
                  >
                    {movieStatistics.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8884d8' : '#82ca9d'} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </div>
            </div>

            {/* Monthly Sales Bar Chart */}
            <div className="bg-white shadow-lg rounded-lg p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Monthly Sales</h2>
              <div className="w-full">
                <BarChart
                  width={300}
                  height={200}
                  data={monthlySales}
                  margin={{ top: 20, right: 20, left: 10, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" fill="#8884d8" barSize={20} />
                </BarChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardScreen;
