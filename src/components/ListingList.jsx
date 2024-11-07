import React from 'react';

import ListingCard from './ListingCard';

function ListingList({ listings }) {
  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {listings.length > 0 ? (
        listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing}/>
        ))
      ) : (
        <p>No listing found.</p>
      )}
    </div>
  )
}

export default ListingList;
