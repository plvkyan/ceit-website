import * as React from "react"
import {
  ArrowUpCircleIcon,
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useNavigate } from "react-router-dom"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navClouds: [
    {
      title: "Capture",
      icon: CameraIcon,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: FileTextIcon,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: FileCodeIcon,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: SettingsIcon,
    // },
    // {
    //   title: "Get Help",
    //   url: "#",
    //   icon: HelpCircleIcon,
    // },
    // {
    //   title: "Search",
    //   url: "#",
    //   icon: SearchIcon,
    // },
  ],
  documents: [
    // {
    //   name: "Data Library",
    //   url: "#",
    //   icon: DatabaseIcon,
    // },
    // {
    //   name: "Reports",
    //   url: "#",
    //   icon: ClipboardListIcon,
    // },
    // {
    //   name: "Word Assistant",
    //   url: "#",
    //   icon: FileIcon,
    // },
  ],
}

export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {

  // Import useNavigate from react-router-dom to handle navigation
  const navigate = useNavigate();

  return (
    <Sidebar collapsible="offcanvas" {...props}>

      <SidebarHeader>

        <SidebarMenu>

          <SidebarMenuItem>

            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5 min-h-12 mb-6"
            >
              {/* University logos */}
              <div className="w-full flex gap-4">

                {/* Pamantasan ng Lungsod ng Valenzuela Logo */}
                <a href="#" className="flex items-center gap-2">
                  <img
                    src="https://res.cloudinary.com/dmodbgukj/image/upload/v1739660442/PLV_LOGO_dhgdie.png"
                    alt="Pamantasan ng Lungsod ng Valenzuela Logo"
                    className="max-h-12 cursor-pointer"
                    onClick={() => navigate("/")}
                  />
                </a>

                {/* Pamantasan ng Lungsod ng Valenzuela - College of Engineering and Information Technology Logo */}
                <a href="#" className="flex items-center gap-2">
                  <img
                    src="https://res.cloudinary.com/dmodbgukj/image/upload/v1739103934/CEIT_Logo_Edited_vjsgyu.png"
                    alt="Pamantasan ng Lungsod ng Valenzuela College of Engineering and Information Technology Logo"
                    className="max-h-12 cursor-pointer"
                    onClick={() => navigate("/")}
                  />
                </a>

              </div>

            </SidebarMenuButton>

          </SidebarMenuItem>

        </SidebarMenu>

      </SidebarHeader>

      <SidebarContent>
        <NavMain />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>

    </Sidebar>
  )
}
