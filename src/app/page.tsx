import CharacterList from '@/components/CharacterList'
import Header from '@/components/Header'
import Main from '@/components/Main'
import MainPageHeader from '@/components/MainPageHeader'

export default function Home() {
  return (
    <Main>
        <Header/>
        <div className="mainContainer">
          <MainPageHeader/>
          <CharacterList
            characterList={
              [{
                character: {
                    id: 1,
                    thumbnail: 'Thumbnail vazio denovo 1',
                    name: 'Sem Nome nenhum 1'
                },
                series: [
                    {
                        id: 1,
                        title: 'série título vazio 1 A'
                    },
                    {
                        id: 2,
                        title: 'série título vazio 2 B'
                    }
                ],
                events:[{
                    id:1,
                    title: 'evento título vazio 1 A'
                },{
                    id:2,
                    title: 'evento título vazio 2 B'
                }]
                },
              {
                character: {
                    id: 2,
                    thumbnail: 'Thumbnail vazio denovo 2',
                    name: 'Sem Nome nenhum 2'
                },
                series: [
                    {
                        id: 1,
                        title: 'série título vazio 1 A'
                    },
                    {
                        id: 2,
                        title: 'série título vazio 2 B'
                    },
                    {
                        id: 1,
                        title: 'série título vazio 1 A'
                    },
                    {
                        id: 2,
                        title: 'série título vazio 2 B'
                    }
                ],
                events:[{
                    id:1,
                    title: 'evento título vazio 1 A'
                },{
                    id:2,
                    title: 'evento título vazio 2 B'
                }]
              }, {
                character: {
                    id: 3,
                    thumbnail: 'Thumbnail vazio denovo 3',
                    name: 'Sem Nome nenhum 3'
                },
                series: [
                    {
                        id: 1,
                        title: 'série título vazio 1 A'
                    },
                    {
                        id: 2,
                        title: 'série título vazio 2 B'
                    }
                ],
                events:[{
                    id:1,
                    title: 'evento título vazio 1 A'
                },{
                    id:2,
                    title: 'evento título vazio 2 B'
                }]
              }]
            }
          />
        </div>
    </Main> 
  )
}
