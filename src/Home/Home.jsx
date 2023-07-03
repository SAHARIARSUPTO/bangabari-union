import React from 'react';
import FirstContent from './FirstContent';
import Services from './Services';
import FamousServices from './FamousServices';
import SocialContents from './SocialContents';
import Accordion from './Accordion';
import Members from './Members';
import GramPolice from './GramPolice';


const Home = () => {
    return (
        <div>
        <FirstContent></FirstContent>  
        <Services></Services>
        <Members></Members>
        <GramPolice></GramPolice>
        <FamousServices></FamousServices>
        <SocialContents></SocialContents>
        <Accordion></Accordion>
        </div>
    );
};

export default Home;