import React from 'react';

import ListingCard from './ListingCard';

function ListingList({ listings }) {
  return (
    <div className='flex flex-wrap justify-center gap-4s'>
        {
          listings?.length < 0 ? (
            <p>No listings found.</p>
          )
        :
         ( listings?.map((listing) => {
            <ListingCard key={listing.id} listing={listing}/>
          })
        )
        }
    </div>
  )
}

export default ListingList;
