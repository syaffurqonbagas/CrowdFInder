import React from 'react';
import { useSelector } from 'react-redux';
import LargeCardMyEvent from '../../components/LargeCardMyEvent/LargeCardMyEvent';
import LargeCrowdFinderCard from '../../components/LargeCrowdFinderCard';
import MyPagination from '../../components/MyPagination/MyPagination';

function Event(props) {
    const { postbyid, loading } = useSelector((state) => state.postsId);
    return (
        <div>
            {postbyid?.filter((item) => item.type[0] === "event").map((item) => (
                <LargeCrowdFinderCard username={item.user_id.fullname} title={item.title} content={item.content}
                    eventId={item.id} />
            ))}

            <div className="pagination justify-content-center mt-5">
                <MyPagination />
            </div>

        </div>
    );
}

export default Event;