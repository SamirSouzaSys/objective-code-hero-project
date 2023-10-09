import { ReactNode } from 'react';
import './styles.css'
import { CharacterListElement } from '@/types/marvels';
import CharacterItem from '../CharacterItem';

type CharacterListProps = {
    characterElementsList: CharacterListElement[];
}

/*{
     characterList = [{
        character: {
            id: 1,
            thumbnail: 'Thumbnail vazio',
            name: 'Sem Nome'
        },
        series: [
            {
                id: 1,
                title: 'série título vazio 1'
            },
            {
                id: 2,
                title: 'série título vazio 2'
            }
        ],
        events:[{
            id:1,
            title: 'evento título vazio 1'
        },{
            id:2,
            title: 'evento título vazio 2'
        }]
    }] 
}*/

const CharacterList = (props: CharacterListProps) => {
    return (
        <div className='containerCharacterList'>
            <div className="titles">
                <span className='titleSpans'>Personagem</span>
                <span className='titleSpans'>Séries</span>
                <span className='titleSpans'>Eventos</span>
            </div>
            <div className="items">
                {props.characterElementsList.map(Item => (
                    <CharacterItem key={Item.id} data={Item}/>
                ))}
            </div>
        </div>
    )
}

export default CharacterList