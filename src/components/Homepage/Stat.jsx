import React from 'react';
import styled from 'styled-components';


const stats = [
    { number: "67", description: "No. of Startups", icon:"https://startupodisha.gov.in/wp-content/uploads/2021/07/Startup-1.gif"},
    { number: "12", description: "Stratup Gradated", icon: "https://placehold.co/50x50?text=Handshake&bg=white" },
    { number: "250+", description: "Employment Generated", icon: "https://placehold.co/50x50?text=Incubator&bg=white" },
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
