import React, { useState } from 'react';
import styled from 'styled-components';

import { 
  Picture1, Picture2, Picture3, Picture4, Picture5, Picture6, 
  Picture7, Picture8, Picture9, Picture10, Picture11, Picture12, 
  Picture13, Picture14, Picture15, Picture16, Picture17, Picture18 ,Pic1,Pic2,Pic3,Pic4,Pic5
} from '../../assets/Services/services';

const SinglePage = () => {
  const [filter, setFilter] = useState('All');
  
  const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  const filterOptions = ['All', 'Prototype', 'Software','Student innvation'];

  const services = [
    {
      title: 'PICK AND PLACE MACHINE',
      logo: Picture1, 
      details: `Model Name: SMTMATE 660 No of Feeder: 64 Element for mounting: 0201, 0402, 0603, 0805, 1206,SOT, SOD, SOP, SSOP, QFN, VCQFN, BGA. Max chip size: 40*40mm`,
      type: 'Prototype',
    },
    {
      title: '3D SCANNER',
      logo: Picture2,
      details: `Model name: EinScan Pro HD Scan Accuracy: upto 0.045mm Output Formats: OBJ, STL, ASC, PLY, P3, 3MF Supported OS: win10,(64bit)`,
      type: 'Prototype',
    },
    {
      title: '3D PRINTER',
      logo: Picture3,
      details: `Model Name: Raise3D E2 3D Printer Material Type: PLA Print Head Travel Speed: 15–150 mm/s Machine Code Type: GCODE`,
      type: 'Prototype',
    },
    {
      title: 'RESIN 3D PRINTER',
      logo: Picture4,
      details: `Model name: Phrozen Sonic Mega 8K 3D Printer size: 475x400x680mm Print volume: 330x185x400mm Max printing speed: 70mm/hr`,
      type: 'Prototype',
    },
    {
      title: 'WEGSTR PCB PROTOTYPING MACHINE',
      logo: Picture5,
      details: `Model Name: Wegstr CNC Milling workspace: (140*200*40) (X*Y*Z) mm Working Material: Wood,Aluminium,PCB,copper,Gold,Silver.`,
      type: 'Prototype',
    },
    {
      title: 'LASER CUTTING MACHINE',
      logo: Picture6,
      details: `Model Name: Flux Beam Box Pro Operating Power: 50w Max Cutting Depth: 12mm Versatile: Cutting and Engraving`,
      type: 'Prototype',
    },
    {
      title: 'SKYRC 1080 CHARGER FOR LIPO',
      logo: Picture7,
      details: `Model Name: Tattu 22000mAh (6S) Dimension: 206mm Length x 91mm Width x 61mm Height Material: Lithium Polymer`,
      type: 'Prototype',
    },
    {
      title: 'CELL IMPEDANCE TESTER',
      logo: Picture8,
      details: `Model Name: BT3563A Max voltage measurement: 300v Response time: 10ms Resistance measurement ranges: 3 mΩ/30 mΩ/300 mΩ/3 Ω/ 30 Ω/300 Ω/3 kΩ`,
      type: 'Prototype',
    },
    {
      title: 'INVERTER WELDING MACHINE',
      logo: Picture9,
      details: `MODEL NO: TIG 200 INPUT POWER SUPPLY: I phase, 230v AC RATED CURRENT: 17A EFFICIENCY: 85%`,
      type: 'Prototype',
    },
    {
      title: 'SPOT WELDING MACHINE',
      logo: Picture10,
      details: `Model No: SUNKKO 737G Operating Voltage: 220v Portable Pedal Switch Operated`,
      type: 'Prototype',
    },
    {
      title: 'AGRICULTURE DRONE',
      logo: Picture11,
      details: `Model Name: Agri Drone (10L) Dimension: 1495*1308*500mm Material: Carbon Fiber`,
      type: 'Prototype',
    },
    {
      title: 'GIMBAL',
      logo: Picture12,
      details: `Model name: Tarot FLIR Metal 3 Axis gimbal Milling workspace: (140*200*40) (X*Y*Z) mm Working Material: FLIR thermal imaging cameras Flir VUE 336, VUE640`,
      type: 'Prototype',
    },
    {
      title: 'LIDAR 360 SOFTWARE',
      logo: Picture13,
      details: `Software Name: LiDAR360 Installation: 2 systems`,
      type: 'Software',
    },
    {
      title: 'E survey software',
      logo: Picture14,
      details: `Version Name: E survey software Installation: 2 systems Usage: Earthwork volume calculations`,
      type: 'Software',
    },
    {
      title: 'Agisoft Software',
      logo: Picture15,
      details: `Version Name: Agisoft Cloud Installation: 2 systems Usage: site inspection, annotation and documentation integrated with cloud processing service`,
      type: 'Software',
    },
    {
      title: 'KEIL SOFTWARE',
      logo: Picture16,
      details: `Model Name: ARM DEVELOPMENT TOOL Toolchain: RealView MDK-ARM Version: 4.12 Nature of License: Perpetual No of users: 1`,
      type: 'Software',
    },
    {
      title: 'PROTEUS VSM SOFTWARE',
      logo: Picture17,
      details: `Version Name: PROTEUS PLATINUM EDITION No of users: 1 platinum edition + 10(lab license) Nature of License: perpetual`,
      type: 'Software',
    },
    {
      title: 'ALTAIR',
      logo: Picture18,
      details: `Model Name: ALTAIR MULTIPHYSICS/ MECHATRONICS ENGINEER SUITE No of users: 1(full package) + 30(lab license) Nature of License: Perpetual`,
      type: 'Software',
    },
    {
      title: '3DPRINTER',
      logo: Pic1,
      details: ``,
      type: 'Student innvation',
    },
    {
      title: 'CNC PLOTTER',
      logo: Pic2,
      details: ``,
      type: 'Student innvation',
    },
    {
      title: '3DSCANNER',
      logo: Pic3,
      details: ``,
      type: 'Student innvation',
    },
    {
      title: 'E-CUBE',
      logo: Pic4,
      details: ``,
      type: 'Student innvation',
    },
    {
      title: 'SOLAR DRYER',
      logo: Pic5,
      details: ``,
      type: 'Student innvation',
    },
  ];

  const filteredServices = filter === 'All' ? services : services.filter(service => service.type === filter);

  return (
    <Container>
      <Heading>AIC-PECF Service & Supports</Heading>
      <FilterContainer>
        {filterOptions.map((option) => (
          <FilterButton
            key={option}
            active={filter === option}
            onClick={() => handleFilter(option)}
          >
            {option}
          </FilterButton>
        ))}
      </FilterContainer>
      <CardsContainer>
        {filteredServices.map((service) => (
          <Card key={service.title}>
            <CardImage src={service.logo} alt={service.title} />
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.details}</CardDescription>
          </Card>
        ))}
      </CardsContainer>
    </Container>
  );
};

export default SinglePage;

// Styled Components

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 32px;
  margin-bottom: 30px;
`;

const FilterContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => (props.active ? '#12283c' : '#ccc')};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 cards per row on large screens */
  gap: 50px; /* Equal spacing between cards */
  justify-content: center;
  padding: 20px; /* Space around the entire grid container */

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 cards per row on medium screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 card per row on small screens */
    gap: 20px;
  }
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px; /* Space between each card and its neighbors */
  width: 100%; /* Ensure cards stretch to fit the grid column */
  max-width: 300px; /* Optional: Limit the max width for consistency */
  height: 400px; /* Ensure all cards are of equal height */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distribute content evenly */
  align-items: center;
`;

const CardImage = styled.img`
  width: 100%; /* Full width of the card */
  max-width: 250px; /* Limit the maximum width of the image */
  height: 200px; /* Fixed height for images to ensure uniformity */
  object-fit: contain; /* Ensures the image fits without cropping */
  border-radius: 10px;
  background-color: pure white; /* Optional: Background for images with transparency */
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center; /* Center-align text for better aesthetics */
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #555;
  text-align: center;
`;
