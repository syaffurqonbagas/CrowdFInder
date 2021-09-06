import React from 'react';
import ListCardPeople from '../../components/ListCardPeople';
import { useSelector } from 'react-redux';

function People(props) {
    const user = useSelector((state) => state.userData.user)


    return (
        <div>
            {user.following?.filter((item) => item.role === "user").map((item) => (<ListCardPeople fullname={item.fullname} role={item.role} />))}

        </div>
    );
}

export default People;