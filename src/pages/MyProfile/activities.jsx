import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EventDetailCard from '../../components/EventDetailCard';
import LargeCardMyEvent from '../../components/LargeCardMyEvent/LargeCardMyEvent';
import LargeCrowdFinderCard from '../../components/LargeCrowdFinderCard';
import MyPagination from '../../components/MyPagination/MyPagination';
import { getPostById } from '../../redux/action/postById';



function Activities(props) {
    const user = useSelector((state) => state.userData.user)
    const { postbyid, loading } = useSelector((state) => state.postsId);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostById(1, user.id))
    }, [dispatch])

    return (
        <div>
            {postbyid.map((item) => (<LargeCardMyEvent contentCard={item.content} image={item.image} interest={item.interest} location={item.location} like={item.like.length} userName={item.user_id.fullname} idPost={item.id} />))}
            <LargeCrowdFinderCard />
            <div className="pagination justify-content-center mt-5">
                <MyPagination />
            </div>


        </div>


    );
}

export default Activities;