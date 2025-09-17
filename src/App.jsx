import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [data, setData] = useState([]);

    const fetchData = async () => {
        const { data, error } = await supabase.from('your-table').select('*');
        if (error) {
        console.error('Error fetching data:', error);
        } else {
        setData(data);
        }
    };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to Abstraction Site</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
