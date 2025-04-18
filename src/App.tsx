import { HomeIcon } from "lucide-react"
import { Sidebar, SidebarItem } from "./components/Sidebar"

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
      <Sidebar items={sidebarItems}/>
    </>
  )
}

export default App
