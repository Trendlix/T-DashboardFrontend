import MainNavBar from "./MainNavBar"
import MainSideBar from "./MainSideBar"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row h-screen w-screen">
        <MainSideBar />
        <div className="flex-1">
            <MainNavBar />
            <main className="bg-gray-100 h-full">{children}</main>
        </div>
    </div>
  )
}

export default Layout