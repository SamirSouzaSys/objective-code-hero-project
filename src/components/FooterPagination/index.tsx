import './styles.css'

import leftStart from './assets/left-start.svg'
import left from './assets/left.svg'
import rightEnd from './assets/right-end.svg'
import right from './assets/right.svg'
import Image from 'next/image'

type PageNumberProps = {
    active?: true | false
    number: number | '-'
    onClick?: () => void
}

const PageNumber = ({active, number, onClick}: PageNumberProps) => {
    return (
        <div className={`divPageNumber ${active ? "divPageNumberActive" : ""}`}>
            {number}
        </div>
    )
}

type FooterPaginatioProps = {
    total: number,
    current?: number,
    mobileScreen? : true | false
}

const FooterPagination = ({
    total,
    current = 1,
    mobileScreen
}:FooterPaginatioProps) => {

    return (
        <footer className='footer'>
            <div className='footerItems'>
                <div className='leftArrows'>
                    <div className='leftArrowsStart'>
                        <Image src={leftStart} alt="left start"  className='arrowSvg'/>
                    </div>
                    <div className='leftArrowsPrevious'>
                        <Image src={left} alt="left"  className='arrowSvg'/>
                    </div>
                </div>
                <div className='numbers'>
                    <PageNumber active={true} number={1}/>
                    <PageNumber number={2}/>
                    <PageNumber number={3}/>
                </div>
                <div className='rightArrows'>
                    <div className='rightArrowsEnd'>    
                        <Image src={right} alt="right" className='arrowSvg'/>
                    </div>
                    <div className='rightArrowsPrevious'>
                        <Image src={rightEnd} alt="right End" className='arrowSvg'/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterPagination