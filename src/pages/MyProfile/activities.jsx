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
    const { postById, loading } = useSelector((state) => state.data);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostById(1, user.id))
    }, [dispatch])

    console.log("post id", postById)
    console.log("ini id", user.id)

    return (
        <div>
            {/* {listPost?.filter((item) => item.user_id === user.id).map((item) => (<LargeCardMyEvent content={item.content} image={item.image} interest={item.interest} location={item.location} like={item.like.length} userName={item.user_id.fullname} idComment={item.id} />))} */}
            <LargeCrowdFinderCard />
            <LargeCardMyEvent />
            <div className="pagination justify-content-center mt-5">
                <MyPagination />
            </div>


        </div>


    );
}

export default Activities;