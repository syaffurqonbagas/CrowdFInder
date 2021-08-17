import React from 'react';
import Bio from '../../components/Bio';
import InterstTopic from '../../components/InterestTopic';
import ListCard from '../../components/ListCard';


function About(props) {
    return (
        <div>
            <Bio />
            <hr />
            <InterstTopic />
            <hr />
            <div className="myCrowd d-flex justify-content-between py-3">
                <h5>My Crowd</h5>
                <h5>See detail</h5>
            </div>
            <ListCard />
            <ListCard />
            <ListCard />
        </div>
    );
}

export default About;