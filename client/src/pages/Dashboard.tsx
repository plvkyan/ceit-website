


// Imports
// shadcn component imports
// shadcn AppSidebar component import
import { AppSidebar } from "@/components/app-sidebar"
// shadcn ChartAreaInteractive component import
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
// shadcn DataTable component import
import { DataTable } from "@/components/data-table"
// shadcn SectionCards component import
import { SectionCards } from "@/components/section-cards"
// shadcn SiteHeader component import
import { SiteHeader } from "@/components/site-header"
// shadcn SidebarInset and SidebarProvider component imports
import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar"

// Data import
// Importing data from a JSON file
import data from "@/app/dashboard/data.json"





export default function Dashboard() {



  return (

    // SidebarProvider wraps the main content to provide sidebar functionality
    <SidebarProvider>

      {/* AppSidebar is the main sidebar component */}
      <AppSidebar
        variant="inset"
      />

      {/* SidebarInset is used to create a sidebar inset layout */}
      <SidebarInset>

        {/* SiteHeader is the header component for the site */}
        <SiteHeader title="Dashboard" />

        {/* Header for the dashboard section */}
        <div className="flex flex-1 flex-col">

          {/* Container */}
          <div className="@container/main flex flex-1 flex-col gap-2">

            {/* Tiptap editor for creating or editing content */}
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">

              {/* Analytics cards */}
              <SectionCards />

              {/* Chart analytics */}
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>

              {/* Data table */}
              <DataTable data={data} />

            </div>

          </div>

        </div>

      </SidebarInset>

    </SidebarProvider>
  )
}
