import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export function useStations() {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStations() {
      try {
        const { data, error } = await supabase
          .from('existing_stations')
          .select('*');

        if (error) throw error;
        setStations(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchStations();
  }, []);

  return { stations, loading, error };
}