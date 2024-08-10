import { assets } from './assets'
import { Container, Main, Wrapper } from './components'

export default function App() {

  return (
    <Main className='relative font-kumbh grid place-items-center min-w-full bg-[#19A1AE] px-[25px] overflow-hidden before:absolute before:w-full before:aspect-square before:bg-pattern-top before:bg-no-repeat before:translate-x-[-50%] before:bg-contain before:translate-y-[-80%] before:sm:translate-y-[-40%] after:absolute after:w-full after:aspect-square after:bg-pattern-bottom after:bg-no-repeat after:translate-x-[35%] after:sm:translate-x-[45%] after:translate-y-[55%] before:opacity-25 after:opacity-25'>
      <Container className='relative max-w-[350px] w-full min-h-[374px] bg-white rounded-[15px] font-kumbh flex flex-col flex-nowrap justify-between items-center gap-[72px] z-10'>
        <Wrapper className='relative grid place-items-center w-full h-auto before:absolute before:bg-victor before:w-[96px] before:aspect-square before:bg-no-repeat before:z-10 before:rounded-[50%] before:bg-contain before:bottom-[-3rem] before:border-[5px] before:border-white'>
          <img className='relative rounded-t-[15px]' src={assets.bgPatternCard} alt="" />
        </Wrapper>
        <Wrapper className='flex-grow-[1] w-full'>
          <Wrapper className='flex flex-col items-center gap-[13px] pb-[28px]'>
            <h1 className='font-bold text-[18px] text-[#2E3349]'>Victor Crest <span className='font-normal text-[#6B7082]'>26</span></h1>
            <h2 className='text-[14px] text-[#6B7082]'>London</h2>
          </Wrapper>
          <Wrapper className='flex-grow-[1] py-[24px] border-t border-t-[#E8E9EC] flex justify-evenly items-center'>
            <Wrapper className='flex flex-col items-center gap-[9px] tracking-[1.5px]'>
              <h3 className='text-[#2E3349] font-bold text-[18px]'>80K</h3>
              <h4 className='text-[#6B7082] text-[10px]'>Followers</h4>
            </Wrapper>
            <Wrapper className='flex flex-col items-center gap-[9px] tracking-[1.5px]'>
              <h3 className='text-[#2E3349] font-bold'>803K</h3>
              <h4 className='text-[#6B7082] text-[10px]'>Likes</h4>
            </Wrapper>
            <Wrapper className='flex flex-col items-center gap-[9px] tracking-[1.5px]'>
              <h3 className='text-[#2E3349] font-bold'>1.4K</h3>
              <h4 className='text-[#6B7082] text-[10px]'>Photos</h4>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Container>
    </Main>
  )
}
