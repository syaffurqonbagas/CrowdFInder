import React from 'react';
import Bio from '../../components/Bio';
import InterstTopic from '../../components/InterestTopic';
import ListCardComunity from '../../ListCardComunity';
import { useSelector } from 'react-redux';


function Comunity(props) {
    const user = useSelector((state) => state.userData.user)
    return (
        <div>
            {user.following?.filter((item) => item.role === "community").map((item) => (<ListCardComunity comunityname={item.fullname} />))}
        </div>
    );
}

export default Comunity;