'use client';

import React from 'react';
import styled from 'styled-components';

interface DescCardProps {
  title: string;
  description: string;
}

const Card: React.FC<DescCardProps> = ({ title, description }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card2">
          <h2 className='card-title'>{title}</h2>
          <p className='card-description'>{description}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 220px;
    height: 254px;
    background-image: linear-gradient(163deg, #5F27CD 0%, #2563EB 100%);
    border-radius: 20px;
    transition: all .3s;
  }
  
  .card-title {
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    padding: 10px;
  }
  
  .card-description {
    color: #fff;
    font-size: 16px;
    text-align: center;
    margin-top: 20px;
    padding: 10px;
  }

  .card2 {
    width: 190px;
    height: 254px;
    background-color: #1a1a1a;
    border-radius: 20px;
    transition: all .2s;
  }

  .card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }

  .card:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
  }
`;

export default Card;