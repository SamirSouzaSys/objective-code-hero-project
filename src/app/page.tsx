import CharacterList from '@/components/CharacterList'
import Header from '@/components/Header'
import Main from '@/components/Main'
import MainPageHeader from '@/components/MainPageHeader'
import { getCharacters } from '@/utils/utils'

export default async function Home() {
    const characters = await getCharacters()
  return (
    <Main>
        <Header/>
        <div className="mainContainer">
          <MainPageHeader/>
          <CharacterList
            characterElementsList={characters.results}
            />
        </div>
    </Main> 
  )
}
