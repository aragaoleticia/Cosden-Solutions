import React, { useEffect, useState } from 'react';

import api from '@/api';
import ListingFilters from '@/components/ListingFilters';
import { Separator, Spinner } from '@/components/ui';

import ListingList from '../components/ListingList';



function HomePage() {

  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchListings = async () => {
      setIsLoading(true);
      const response = await api.get('/api/listings');
      setListings(response.data);

      setIsLoading(false);
    };

    fetchListings()
  }, []);

  const handleFilters = (filters) => {

  };

  return (
    <div className='container py-4'>
      <div className='mb-4'>
        <ListingFilters onChange={handleFilters} />
        <Separator className='my-4'/>
      </div>
      <ListingList listings={listings}/>
    </div>
  )
}

export default HomePage;
