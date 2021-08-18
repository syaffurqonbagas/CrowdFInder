import React from 'react';
import Bio from '../../components/Bio';
import InterstTopic from '../../components/InterestTopic';
import ListCardPeople from '../../components/ListCardPeople';
import { Link } from "react-router-dom"

import './index.scss'


function About(props) {
    return (
        <div>
            <Bio />
            <hr />
            <InterstTopic />
            <hr />
            <div className="myCrowd d-flex justify-content-between py-3">
                <h5>Community</h5>
                <h5 >  <Link style={{ color: '#D82671', fontWeight: '400', textDecoration: 'none', fontSize: '16px' }} to="/">See Detail</Link></h5>
            </div>
            <ListCardPeople />
        </div>
    );
}

export default About;

