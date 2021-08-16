import React from 'react';
import LargeCardMyEvent from '../../components/LargeCardMyEvent';
import LargeCrowdFinderCard from '../../components/LargeCrowdFinderCard';

function Activities(props) {
    return (
        <div>
            <LargeCrowdFinderCard />
            <LargeCardMyEvent />
        </div>
    );
}

export default Activities;