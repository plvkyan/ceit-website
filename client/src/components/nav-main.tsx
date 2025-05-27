


// Imports
// Lucide imports
import { BarChartIcon, ChevronDown, Layers, LayoutDashboardIcon, MailIcon, PlusCircleIcon, UsersIcon, type LucideIcon } from "lucide-react"



// shadcn component imports
// shadcn Button component import
import { Button } from "@/components/ui/button"
// shadcn Dropdown component imports
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// shadcn Sidebar component imports
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"



// Utility imports
// react-router-dom imports
import { 
  Link, 
  useNavigate 
} from "react-router-dom"





export function NavMain() {

  // Function to handle navigation
  const navigate = useNavigate()



  return (

    <SidebarGroup>

      <SidebarGroupContent className="flex flex-col gap-2">

        <SidebarMenu>

          <SidebarMenuItem className="flex items-center gap-2">

            {/* Dropdown menu for creating new items */}
            <DropdownMenu>

            {/* Dropdown call-to-action button */}
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground">
                  <PlusCircleIcon />
                  <span> Create </span>
                  <ChevronDown className="h-4 w-4 ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              {/* Dropdown menu content */}
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem onClick={() => navigate("/create-event")}>
                  Event
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/create-news")}>
                  News
                </DropdownMenuItem>
              </DropdownMenuContent>
              
            </DropdownMenu>
            
          </SidebarMenuItem>

        </SidebarMenu>

        <SidebarMenu>

          {/* Dashboard */}
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => navigate("/dashboard")} tooltip="Dashboard">
              <LayoutDashboardIcon />
              <span> Dashboard </span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Analytics */}
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => navigate("/analytics")} tooltip="Analytics">
              <BarChartIcon />
              <span> Analytics </span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Pages */}
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => navigate("/pages")} tooltip="Pages">
              <Layers />
              <span> Pages </span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Users */}
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => navigate("/users")} tooltip="Users">
              <UsersIcon />
              <span> Users </span>
            </SidebarMenuButton>
          </SidebarMenuItem>

        </SidebarMenu>

      </SidebarGroupContent>

    </SidebarGroup>
  )
}
