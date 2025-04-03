import React, { useEffect, useState } from 'react';
import { testConnection } from '../api/api';

const Home: React.FC = () => {
  const [connectionStatus, setConnectionStatus] = useState<string>('Checking connection...');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkConnection = async () => {
      setIsLoading(true);
      try {
        const response = await testConnection();
        setConnectionStatus(response.message);
        setError(null);
      } catch (err: any) {
        setConnectionStatus('Failed to connect to backend');
        
        // Provide more detailed error information
        if (err.response) {
          setError(`Server error: ${err.response.status} - ${err.response.data?.message || 'Unknown error'}`);
        } else if (err.request) {
          setError('No response from server. Please check if the backend is running on port 3000');
        } else {
          setError(`Error: ${err.message || 'Unknown error'}`);
        }
      } finally {
        setIsLoading(false);
      }
    };

    checkConnection();
  }, []);

  return (
    <div className="text-center p-4">
      <h2 className="text-2xl font-bold mb-4">Welcome to our pizza ordering app!</h2>
      <p className="text-gray-700 mb-4">Order your favorite pizzas online</p>
      <div className="mt-4">
        {isLoading ? (
          <p className="text-blue-600 font-semibold">Loading...</p>
        ) : (
          <>
            <p className={`font-semibold ${error ? 'text-red-600' : 'text-green-600'}`}>
              {connectionStatus}
            </p>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default Home; 