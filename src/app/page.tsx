import Header from '@/components/Header'
import Main from '@/components/Main'
import MainPageHeader from '@/components/MainPageHeader'

export default function Home() {
  return (
    <Main>
        <Header/>
        <div className="mainContainer">
          <MainPageHeader/>
        </div>
    </Main> 
  )
}
