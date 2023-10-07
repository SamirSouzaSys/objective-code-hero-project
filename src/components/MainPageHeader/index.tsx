import Image from 'next/image'
import './styles.css'

import searchIcon from './assets/search.svg'

const MainPageHeader = () => {
    return(
        <div className='containerMainPageHeader'>
            <h1 className='title'>Busca de personagens</h1>
            <label className='labelSearch'>Nome do personagem</label>
            <div className='divSearch'>
                <input className='inputSearch' placeholder="Search"/>
                <Image className='iconSearch'src={searchIcon} alt="search icon"/>
            </div>
        </div>
    )
}

export default MainPageHeader