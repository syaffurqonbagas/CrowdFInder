import React from 'react';
import LargeCardMyEvent from '../../components/LargeCardMyEvent/LargeCardMyEvent';
import LargeCrowdFinderCard from '../../components/LargeCrowdFinderCard';

function Event(props) {
    return (
        <div>
            <LargeCrowdFinderCard />
            <LargeCardMyEvent/>
        </div>
    );
}

export default Event;