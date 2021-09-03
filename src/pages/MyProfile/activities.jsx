import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EventDetailCard from '../../components/EventDetailCard';
import LargeCardMyEvent from '../../components/LargeCardMyEvent/LargeCardMyEvent';
import LargeCrowdFinderCard from '../../components/LargeCrowdFinderCard';
import MyPagination from '../../components/MyPagination/MyPagination';
import { getPostById } from '../../redux/action/postById';



function Activities(props) {
    const user = useSelector((state) => state.userData.user)
    const { postbyid, loading } = useSelector((state) => state.postsId);
    const [show, setShow] = useState(true)
    const [detailcard, setDetailCard] = useState({ title: "", content: "" })
    const [data, setData] = useState({ name: "", id: "" })

    // console.log('ini type', postbyid[0].id)

    return (
        <div>
            {show ?
                [
                    postbyid.filter((item) => item.type[0] === "event").map((item) =>
                    (<LargeCrowdFinderCard username={item.user_id.fullname} title={item.title} content={item.content}
                        action={() => {
                            setShow(false)
                            setDetailCard({
                                title: item.title,
                                content: item.content
                            })
                        }
                        } eventId={item.id} />)),

                    postbyid.map((item) =>
                        (<LargeCardMyEvent contentCard={item.content} image={item.image} interest={item.interest} location={item.location} like={item.like.length} userName={item.user_id.fullname} idPost={item.id} />)),
                    <div className="pagination justify-content-center mt-5">
                        <MyPagination />
                    </div>

                ]
                : <EventDetailCard title={detailcard.title} content={detailcard.content} />}



        </div>


    );
}

export default Activities;