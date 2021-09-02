import React from 'react';
import { useSelector } from 'react-redux';
import LargeCrowdFinderCard from '../../components/LargeCrowdFinderCard';
import MyPagination from '../../components/MyPagination/MyPagination';
import LargeCardMyEvent from '../../components/LargeCardMyEvent/LargeCardMyEvent';
function Post(props) {

    const { postbyid, loading } = useSelector((state) => state.postsId)

    return (
        <div>
            {postbyid?.filter((item) => item.type[0] === "announcement").map((item) =>
            (
                <LargeCardMyEvent contentCard={item.content} image={item.image} interest={item.interest} location={item.location} like={item.like.length} userName={item.user_id.fullname} idPost={item.id} />
            ))}

            <div className="pagination justify-content-center mt-5">
                <MyPagination />
            </div>

        </div>
    );
}

export default Post;