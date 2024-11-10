import React from 'react';
import styled from 'styled-components';
import {Rocket} from '../../assets/Homepage/images';

const stats = [
    { number: "70+", description: "No. of Startups", icon: <Rocket/> },
    { number: "70", description: "Nodal Agencies", icon: "https://placehold.co/50x50?text=Handshake&bg=white" },
    { number: "92", description: "Incubators Supported", icon: "https://placehold.co/50x50?text=Incubator&bg=white" },
    { number: "92", description: "(lakh sqft.) Incubation Space", icon: "https://placehold.co/50x50?text=Space&bg=white" },
    { number: "92", description: "Venture Funded Startups", icon: "https://placehold.co/50x50?text=Funding&bg=white" },
    { number: "70", description: "Purchase Order Awarded", icon: "https://placehold.co/50x50?text=Award&bg=white" },
    { number: "70", description: "Seed Funded Startups", icon: "https://placehold.co/50x50?text=Seed&bg=white" },
   
];

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
`;

const StatContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const StatImage = styled.img`
    width: 3rem;
    height: 3rem;
    margin-bottom: 0.5rem;
`;

const StatNumber = styled.span`
    font-size: 2.5rem;
    font-weight: bold;
    color: #3b82f6; /* Blue color */
`;

const StatDescription = styled.span`
    font-size: 1.125rem;
    color: #e11d48; /* Red color */
`;

const App = () => {
    return (
        <Wrapper>
            {stats.map((stat, index) => (
                <StatContainer key={index}>
                    <StatImage src={stat.icon} alt={stat.description} />
                    <StatNumber>{stat.number}</StatNumber>
                    <StatDescription>{stat.description}</StatDescription>
                </StatContainer>
            ))}
        </Wrapper>
    );
};

export default App;
