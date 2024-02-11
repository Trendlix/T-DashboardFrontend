import MainNavBar from "./MainNavBar"
import MainSideBar from "./MainSideBar"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row w-screen h-screen">
        <MainSideBar />
        <div className="flex-1 flex flex-col overflow-hidden">
            <MainNavBar />
            <main className="bg-gray-100 overflow-y-auto flex-1 flex flex-col">{children}</main>
        </div>
    </div>
  )
}

export default Layout