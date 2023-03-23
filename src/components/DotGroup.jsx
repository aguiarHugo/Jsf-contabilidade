import AnchorLink from "react-anchor-link-smooth-scroll"

const DotGroup = ({selectedPage, setSelectedPage}) => {
  const selectedStyles = `relative bg-jsf-blue before:absolute before:w-6 before:h-6 
  before:rounded-full  before:left-[-50%]
  before:top-[-50%]`

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
          className={`${selectedPage === 'Home' ? selectedStyles : "bg-jsf-blue"}
          w-3 h-3 rounded-full`}
          href='#home'
          onClick={() => setSelectedPage('Home')}
        />
       <AnchorLink
          className={`${selectedPage === 'O que é Contabilidade?' ? selectedStyles : "bg-jsf-blue"}
          w-3 h-3 rounded-full`}
          href='#countability'
          onClick={() => setSelectedPage('O que é Contabilidade?')}
        />
        <AnchorLink
          className={`${selectedPage === 'Quem somos' ? selectedStyles : "bg-jsf-blue"}
          w-3 h-3 rounded-full`}
          href='#about'
          onClick={() => setSelectedPage('Quem somos')}
        />
        <AnchorLink
          className={`${selectedPage === 'Contato' ? selectedStyles : "bg-jsf-blue"}
          w-3 h-3 rounded-full`}
          href='#contact'
          onClick={() => setSelectedPage('Contato')}
        />
    </div>
  )
}

export default DotGroup