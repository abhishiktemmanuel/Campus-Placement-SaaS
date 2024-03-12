import React, { useRef } from 'react';
import Card from './ApplicationCard';

const CardList = ({ cards }) => {
  const scrollerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollerRef.current) {
      const cardWidth = scrollerRef.current.firstChild.offsetWidth;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollerRef.current.scrollBy({ left: scrollAmount });
    }
  };
  return (
    <div className="relative ml-5">
      <button
        onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
        onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
        className="absolute left-0 z-10 opacity-0 hover:opacity-100 flex items-center justify-center h-full"
        onClick={() => scroll('left')}
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
        &#9664; {/* Left arrow symbol */}
      </button>
      <div
        ref={scrollerRef}
        className="flex overflow-x-scroll  pb-4 pt-4 no-scrollbar"
        style={{ scrollBehavior: 'smooth' }}
      >
        {cards.map((ListedJob) => (
            <Card ListedJob = {ListedJob}
            key={ListedJob.id}/>
        ))}
      </div>
      <button
        onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
        onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
        className="absolute right-0 z-10 opacity-0 hover:opacity-100 flex items-center justify-center h-full"
        onClick={() => scroll('right ')}
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
        &#9654; {/* Right arrow symbol */}
      </button>
    </div>
  );
};

export default CardList;
