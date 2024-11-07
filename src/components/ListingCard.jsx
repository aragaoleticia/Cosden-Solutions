import { EuroIcon, Pin, Users } from 'lucide-react';
import React from 'react';

import { getImageUrl } from '@/lib/utils/images';

import { Card, CardContent } from './ui';
import ListingCardImages from '@/components/ListingCardImages.jsx';


function ListingCard({ listing }) {
  return (
    <Card className='w-[320px]'>
       <ListingCardImages listing={listing}/>
        <CardContent className='flex flex-col gap-2 p-4'>
            <h2 className='mb-2 text-xl font-semibold'>{listing.name}</h2>
            <div className='flex items-center gap-2'>
              <EuroIcon className='h-4 w-4 text-primary'/>
              <span className='text-muted-foreground'>
                <span className='font-bold text-foreground'>{listing.price}</span>
                night
              </span>
            </div>
          <div className='flex items-center gap-2'>
            <Pin className='h-4 w-4 text-primary' />
            <span className='text-muted-foreground'>{listing.location.name}</span>
          </div>
          <div className='flex items-center gap-2'>
            <Users className='h-4 w-4 text-primary'/>
            <span className='text-muted-foreground'>{listing.maxGuests} Guests</span>
          </div>
        </CardContent>
    </Card>
  )
}

export default ListingCard;
