import { HomeIcon } from "lucide-react"
import { Sidebar, SidebarItem } from "./components/Sidebar"
import { Header } from "./components/Header"

// Exemplo de como usar o componente Sidebar 
const sidebarItems: SidebarItem[] = [
  {icon: <HomeIcon />, label: 'Dashboard', path: '/dashboard', active: true},
  {icon: <HomeIcon />, label: 'Dashboard', path: '/dashboard', active: true},
  {icon: <HomeIcon />, label: 'Dashboard', path: '/dashboard', active: true},
  {icon: <HomeIcon />, label: 'Dashboard', path: '/dashboard', active: true},
  {icon: <HomeIcon />, label: 'Dashboard', path: '/dashboard', active: true},
  {icon: <HomeIcon />, label: 'Dashboard', path: '/dashboard', active: true},
  {icon: <HomeIcon />, label: 'Dashboard', path: '/dashboard', active: true},
  {icon: <HomeIcon />, label: 'Dashboard', path: '/dashboard', active: true},
  {icon: <HomeIcon />, label: 'Dashboard', path: '/dashboard', active: true},
]


function App() {
  return (
    <>
    <div className="flex h-screen">
      <Sidebar items={sidebarItems}/>
      <div className="flex-1 flex flex-col">
        <Header />
      </div>
    </div>
    </>
  )
}

export default App
