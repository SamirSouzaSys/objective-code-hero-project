import { CharacterListElement } from "@/types/types"
import Image from 'next/image'
import './styles.css'

type Props = {
    data?: CharacterListElement
}

const CharacterItem = (item: Props) => {
    return (
        <div className='divItem'>
            <div className='divCharacter CharacterItemColumn'>
                <div className='divCharacterImage'>
                    <Image src={item.data?.character?.thumbnail} alt='' width={48} height={48}/>
                    
                </div>
                <div className='divCharacterName'>
                    {item.data?.character?.name}</div>
            </div>
            <div className='divSerie CharacterItemColumn'>
                {item.data?.series?.map((item) => (
                    <p className='divSerieTitle'>
                        {item.title}</p>
                ))}
            </div>
            <div className='divEvent CharacterItemColumn'>
                {item.data?.events?.map((item) => (
                    <p className='divEventTitle'>
                        {item.title}</p>
                ))}
            </div>
        </div>
    )
}

export default CharacterItem