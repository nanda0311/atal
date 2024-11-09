import React from 'react';
import styled from 'styled-components';
import { dummy1, dummy2, dummy3 } from '../../assets/Homepage/images';  // Import images from images.js

const CarouselSection = () => {
    return (
        <CarouselContainer>
            <CarouselImage src={dummy1} alt="Carousel Background 1" />
            <CarouselImage src={dummy2} alt="Carousel Background 1" />
            <CarouselImage src={dummy3} alt="Carousel Background 1" />
            <Overlay />

            <TextContent>
                <Title>
                    Making <Highlight>தமிழ்நாடு</Highlight>
                </Title>
                <Subtitle>A Global Startup Destination!</Subtitle>
            </TextContent>

            <FormSection>
                <FormContainer>
                    <div style={{ flex: 1 }}>
                        <Label>Who Am I?</Label>
                        <Select>
                            <option>Startup</option>
                            <option>Investor</option>
                            <option>Enabler</option>
                        </Select>
                    </div>
                    <div style={{ flex: 1 }}>
                        <Label>I'm looking for</Label>
                        <Select>
                            <option>Funding</option>
                            <option>Mentorship</option>
                            <option>Networking</option>
                        </Select>
                    </div>
                    <ExploreButton>Explore</ExploreButton>
                </FormContainer>
            </FormSection>
        </CarouselContainer>
    );
};

// Styled Components for the carousel and form
const CarouselContainer = styled.div`
    position: relative;
    height: 100vh;
    overflow: hidden;
`;

const CarouselImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(30, 58, 138, 0.5); /* Transparent blue */
`;

const TextContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    padding: 0 1rem;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;

    @media (min-width: 768px) {
        font-size: 4rem;
    }
`;

const Highlight = styled.span`
    color: #fbbf24; /* Yellow color */
`;

const Subtitle = styled.h2`
    font-size: 1.5rem;
    margin-top: 0.5rem;

    @media (min-width: 768px) {
        font-size: 2rem;
    }
`;

const FormSection = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
`;

const FormContainer = styled.div`
    background-color: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Label = styled.label`
    display: block;
    color: #4b5563; /* Gray color */
    font-size: 0.875rem;
`;

const Select = styled.select`
    width: 100%;
    margin-top: 0.25rem;
    padding: 0.5rem;
    border: 1px solid #d1d5db; /* Light gray */
    border-radius: 0.375rem;
`;

const ExploreButton = styled.button`
    background-color: #fbbf24; /* Yellow */
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #f59e0b; /* Darker yellow on hover */
    }
`;

export default CarouselSection;
