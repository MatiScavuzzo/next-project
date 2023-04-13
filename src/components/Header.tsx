import SearchBar from "./SearchBar"

const Header = () => {
  return (
    <nav>
      <SearchBar className='flex p-2 text-black bg-white rounded-2xl' />
    </nav>
  )
}

export default Header