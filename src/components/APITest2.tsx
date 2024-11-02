import React, { useEffect, useState } from 'react';
import RequestService from '../services/RequestService';
import DataResponse from '../types/DataResponse';

function APITest2() {
    const [data, setData] = useState<DataResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
          try {
            const result = await RequestService.fetchData();
            setData(result);
          } catch (err) {
            setError('Failed to fetch data');
          }
        };
        getData();
    }, []);

    return (
        <div>
            <div>APITest2</div>
            {error ? <p>{error}</p> : data ? <p>{data.message}</p> : <p>Loading...</p>}
            <a href='./apitest'>here!</a>
        </div>
    );
}

export default APITest2;
