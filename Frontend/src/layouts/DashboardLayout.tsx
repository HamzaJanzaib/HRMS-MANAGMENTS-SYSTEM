import { items, Logo } from "@/assets/assest";
import ThemeToggle from "@/components/Home/TogalTheme";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useAuthContext } from "@/context/AuthContext";
import type { LinkItemType } from "@/types/Types";
import { Bell, ChevronsUpDown, DoorClosed, Menu, Search } from "lucide-react";
import { useState, type Dispatch, type SetStateAction } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

// Type for Sidebar props
type SidebarProps = {
  open: boolean;
  setopen: Dispatch<SetStateAction<boolean>>;
}

// Type for Topbar props
type TopbarProps = {
  open: boolean;
  setopen: Dispatch<SetStateAction<boolean>>;
}



const DashboardLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="h-screen relative w-full flex items-center bg-background text-foreground transition-all duration-300">
      {isOpen && (
        <div className="absolute z-99 md:flex md:relative md:z-0 h-full md:max-w-[30vw] md:p-4 transition-all duration-300">
          <Sidebar open={isOpen} setopen={setIsOpen} />
        </div>
      )}
      <div className="w-full px-4 h-screen bg-background transition-all duration-300">
        <div className="h-22 w-full bg-background text-foreground transition-all duration-300">
          <Topbar open={isOpen} setopen={setIsOpen} />
        </div>
        <div className="h-[calc(100% - 56px)] w-full bg-background overflow-y-auto noscrollbar text-foreground transition-all duration-300">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

const Sidebar: React.FC<SidebarProps> = ({ setopen }) => {
  const { role } = useAuthContext()
  const location = useLocation();
  return (
    <div className="flex flex-col relative h-full w-56 bg-sidebar rounded-xl py-6 px-4 justify-between">
      <div onClick={() => setopen(false)} className="absolute right-5 cursor-pointer">
        <DoorClosed />
      </div>
      <div>
        {/* Logo and Title */}
        <Link to="/dashboard" className="flex items-center gap-2 mb-8">
          <img src={Logo} alt="Logo" className="object-contain w-6 h-6" />
          <span className="text-xl font-semibold text-foreground">HRMS</span>
        </Link>

        {/* Menu */}
        <nav className="flex flex-col gap-1 max-h-[65vh] overflow-y-auto no-sidebar">
          {Object.values(items as Record<string, LinkItemType>)
            .filter((item) => item.roles.includes(role))
            .map((item) => {
              const isActive = location.pathname === item.url;
              const Icon = item.icon;
              return (
                <Button
                  asChild
                  variant="ghost"
                  key={item.title}
                  className={`
                    flex items-center gap-3 justify-start px-3 py-2 rounded
                    ${isActive ? "bg-sidebar-accent border-l-4 border-primary font-medium text-primary" : ""}
                  `}
                >
                  <Link to={item.url}>
                    <Icon className="w-5 h-5" />
                    <span className="ml-2">{item.title}</span>
                  </Link>
                </Button>
              );
            })}
        </nav>
      </div>

      {/* Light/Dark Toggle */}
      <ThemeToggle />
    </div>
  );
};

const Topbar: React.FC<TopbarProps> = ({ open, setopen }) => {
  return (
    <div className="flex items-center justify-between h-full w-full ">
      {/* Left: Greeting */}

      <div className=" flex items-center gap-2">
        {
          open === false && (
            <Menu onClick={() => setopen(!open)} className="cursor-pointer" />

          )
        }
        <div className="flex flex-col">
          <span className="font-semibold text-base flex items-center">
            Hello Robert <span className="ml-1">👋🏼</span>
          </span>
          <span className="text-xs text-muted-foreground">Good Morning</span>
        </div>
      </div>

      {/* Right: Notification & Profile */}
      <div className="flex items-center gap-4">
        {/* Center: Search */}
        <div className="flex-1 md:flex justify-center hidden">
          <div className="w-72 ">
            <div className="relative rounded-md overflow-hidden border-1 border-border">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Search />
              </span>
              <Input
                className="pl-10 bg-background pr-3 py-2 border-none focus:ring-0 text-sm"
                placeholder="Search"
                type="text"
              />
            </div>
          </div>
        </div>
        {/* Notification */}
        <button className="rounded-lg p-2  transition-colors bg-background border-1 border-border">
          <Bell className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 bg-background  border-1 border-border  px-2 py-1 rounded-md  transition-colors">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                className="w-8 h-8 rounded-md object-cover"
              />
              <div className="hidden md:flex flex-col items-start text-left cursor-pointer">
                <span className="text-sm font-medium text-foreground">Robert Allen</span>
                <span className="text-xs text-muted-foreground">HR Manager</span>
              </div>
              <ChevronsUpDown className="cursor-pointer" size={20} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
