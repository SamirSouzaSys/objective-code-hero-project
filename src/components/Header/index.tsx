import './styles.css'

import logo from './assets/logo.png'
import Image from 'next/image'

type HeaderProps = {
    userName?: string;
    testName?: string;
    userInitials?: string;
}

const Header = ({
    testName='Teste de Front-end',
    userInitials='CB',
    userName='Nome do candidato'
}: HeaderProps) => {
    return (
    <header>
        <Image src={logo} alt="logo da objective" height={20} width={90} className='logoImg'/>
        <div className='textGroup'>
            <div className='namesGroup'>
                <span className="userName">{userName}</span>
                <span>{testName}</span>
            </div>
            <div className="userInitials">
                <span>
                    {userInitials}
                </span>
            </div>
        </div>
    </header>
    )
}

export default Header