import React from 'react';
import LargeCardMyEvent from '../../components/LargeCardMyEvent/LargeCardMyEvent';
import LargeCrowdFinderCard from '../../components/LargeCrowdFinderCard';
import MyPagination from '../../components/MyPagination/MyPagination';

function Event(props) {
    return (
        <div>
            <LargeCrowdFinderCard />
            <LargeCardMyEvent />
            <div className="pagination justify-content-center mt-5">
                <MyPagination />
            </div>

        </div>
    );
}

export default Event;