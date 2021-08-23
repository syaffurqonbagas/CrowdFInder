import React from 'react';
import Bio from '../../components/Bio';
import InterstTopic from '../../components/InterestTopic';
import ListCardPeople from '../../components/ListCardPeople';



function About(props) {
    return (
        <div>
            <Bio />

            <hr />
            <div className="myCrowd d-flex justify-content-between py-3">
                <h5>Comunity Member (205)</h5>

            </div>
            <ListCardPeople />

        </div>
    );
}

export default About;