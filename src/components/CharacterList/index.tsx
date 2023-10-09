import { ReactNode } from 'react';
import './styles.css'
import { CharacterListElement } from '@/types/marvels';
import CharacterItem from '../CharacterItem';

type CharacterListProps = {
    characterElementsList: CharacterListElement[];
}

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