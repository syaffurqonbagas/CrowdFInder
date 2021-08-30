import React from 'react';
import Bio from '../../components/Bio';
import BioNoEdit from '../../components/Bio/bioNoedit';
import InterstTopic from '../../components/InterestTopic';
import ListCardPeople from '../../components/ListCardPeople';
import MyPagination from '../../components/MyPagination/MyPagination';



function About(props) {
    return (
        <div>
            <BioNoEdit bio='test' />

            <hr />
            <div className="myCrowd d-flex justify-content-between py-3">
                <h5>Comunity Member (205)</h5>

            </div>
            <ListCardPeople />
            <div className="pagination justify-content-center mt-5">
                <MyPagination />
            </div>

        </div>
    );
}

export default About;