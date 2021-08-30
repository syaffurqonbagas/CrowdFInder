import React from 'react';
import Bio from '../../components/Bio';
import InterstTopic from '../../components/InterestTopic';
import ListCardPeople from '../../components/ListCardPeople';
import { Link } from "react-router-dom"
import './index.scss'
import { useSelector } from 'react-redux';
import { Badge } from 'react-bootstrap';

function About(props) {
    const user = useSelector((state) => state.userData.user)

    return (
        <div>
            <Bio bio={user.bio} />
            <hr />
            <InterstTopic list={user.interest} />
            <hr />
            <div className="myCrowd d-flex justify-content-between py-3">
                <h5>My Crowd</h5>
                <h5 >  <Link style={{ color: '#D82671', fontWeight: '400', textDecoration: 'none', fontSize: '16px' }} to="/mycrowd">See All</Link></h5>
            </div>
            <ListCardPeople />
        </div>
    );
}

export default About;

