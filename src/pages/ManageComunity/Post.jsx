import React from 'react';
import LargeCrowdFinderCard from '../../components/LargeCrowdFinderCard';
import MyPagination from '../../components/MyPagination/MyPagination';

function Post(props) {
    return (
        <div>
            <LargeCrowdFinderCard />
            <LargeCrowdFinderCard />
            <div className="pagination justify-content-center mt-5">
                <MyPagination />
            </div>

        </div>
    );
}

export default Post;