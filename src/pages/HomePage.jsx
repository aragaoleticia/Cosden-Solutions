import React from 'react';
import { listings } from '@/api/data/listings';
import ListingList from '../components/ListingList';


function HomePage() {
  return (
    <div className='container py-4'>
      <ListingList listings={listings}/>
    </div>
  )
}

export default HomePage;
