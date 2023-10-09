import { CharacterListElement } from "@/types/marvels"
import Image from 'next/image'
import './styles.css'

type Props = {
    data?: CharacterListElement
}

const CharacterItem = (item: Props) => {
    let seriesList: string[] = []
    item.data?.series.items.map(item => seriesList.push(item.name))

    let eventsList: string[] = []
    item.data?.events.items.map(item => eventsList.push(item.name))

    return (
        
        <div className='divItem'>
            <div className='divCharacter CharacterItemColumn'>
                <div className='divCharacterImage'>
                    {item.data?.thumbnail.path && <Image src={item.data?.thumbnail.path +'.'+ item.data?.thumbnail.extension}
                     alt='' width={48} height={48}/> || 'Vazio'} 
                    
                </div>
                <div className='divCharacterName'>
                    {item.data?.name}</div>
            </div>

            <div className='divSerie CharacterItemColumn'>
                {seriesList.map(item => <p className='divSerieTitle'>{item}</p>)}
                
            </div>
            
            <div className='divEvent CharacterItemColumn'>
                {eventsList.map(item => <p className='divEventTitle'>{item}</p>)}
            </div> 
        </div>
    )
}

export default CharacterItem