import React from 'react';
import FilterBoxSidebar from './FilterBoxSidebar';
import PriceRange from './PriceRange';
// import RatingStar from './RatingStar';

const items = [
    { name: 'filter', 
      label: 'Filter',
    },

    { name: 'price', 
      label: 'Price',
      items: [
              {name:'rangeHarga', label:<PriceRange/>},
          ] 
    },

    { name: 'location', 
      label: `Location on`,
    //   label: `Location on ${desti}`,
    //   items: [
    //           {name:'apaAjaBoleh', label:<Location locstate={locstate} onCheckLoc={onCheckLoc}/>},
    //     ] 
    },

    { name: 'rating', 
      label: 'Rating',
    //   items: [
    //     {name:'starRating', label:<RatingStar/>},
    //   ] 
    },

  ]

const insideFilterBox = () => {

    return(
        <div>
            {/* <p>tetetetetetetetet</p> */}
            <FilterBoxSidebar items={items} />
        </div>
    )
}

export default insideFilterBox