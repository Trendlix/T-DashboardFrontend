import MainNavBar from "./MainNavBar"
import MainSideBar from "./MainSideBar"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row w-full">
        <MainSideBar />
        <div className="flex-1 flex flex-col">
            <MainNavBar />
            <main className="bg-gray-100 flex-1 flex flex-col">{children}</main>
        </div>
    </div>
  )
}

export default Layout