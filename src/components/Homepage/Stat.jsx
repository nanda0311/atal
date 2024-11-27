import React from 'react';
import styled from 'styled-components';
import Rocket from '../../assets/Homepage/rocket.gif'; 
import Rockets from '../../assets/Homepage/rocketg.gif'; 
const stats = [
    { number: "67", description: "No. of Startups", icon: Rocket},
    { number: "12", description: "Stratup Gradated", icon: Rockets },
    { number: "250+", description: "Employment Generated", icon: "https://p lacehold.co/50x50?text=Incubator&bg=white" },
    { number: "92", description: "Corps Fund", icon: "https://placehold.co/50x50?text=Space&bg=white" },
    { number: "92", description: "CSR Secured", icon: "https://placehold.co/50x50?text=Funding&bg=white" },
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
