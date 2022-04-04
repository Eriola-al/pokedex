import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
    background-color: #eee;
    border-radius: 20px;
    box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
    margin: 10px;
    padding: 20px;
    text-align: center;
    width: 11%;
`;

const ImageContainer = styled.div`
    margin-top: 20px;
	max-width: 90%;
`;

const Id = styled.span`
    margin-top: 20px;
    background-color: rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	font-size: 0.8em;
	padding: 5px 10px;
`;

const Name = styled.h3`
	margin: 15px 0 7px;
	letter-spacing: 1px;
    ::first-letter{
        text-transform: capitalize;
    }
`;

const Tag = styled.span`
      margin-top: 20px;
`;

function PokemonCard({ pokemon, loading }) {

    return (
        <>
            {loading ? <h1>Getting your data...</h1> :
                pokemon.map((item) => {
                    return (
                        <Card key={item.id}>
                            <ImageContainer><img src={item.sprites.front_default} alt="" /></ImageContainer>
                            <Id>#{item.id.toString().padStart(3,'0')}</Id>
                            <Name>{item.name}</Name>
                            <Tag>Type: {item.types[0].type.name}</Tag>
                        </Card>
                    )
                })
            }
        </>
    )
}

export default PokemonCard;