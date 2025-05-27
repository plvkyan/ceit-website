


// Imports
// shadcn component imports
// shadcn AppSidebar component import
import { AppSidebar } from "@/components/app-sidebar"
// shadcn Button component import
import { Button } from "@/components/ui/button"
// shadcn SiteHeader component import
import { SiteHeader } from "@/components/site-header"
// shadcn SidebarInset and SidebarProvider component imports
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger
} from "@/components/ui/sidebar"

// tiptap component imports
// tiptap Content component import
import { Content } from "@tiptap/react"
// tiptap MinimalTiptapEditor component import
import { MinimalTiptapEditor } from "@/components/minimal-tiptap"

// Utility imports
import { useContext, useState } from "react";
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AppContext } from "@/contexts/AppContext"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"




export default function Dashboard() {

    // State to manage the content of the editor
    const [value, setValue] = useState<Content>("")

    const { user, backendUrl, setUser, setIsLoggedIn } = useContext(AppContext);



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
                <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
                    <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mx-2 data-[orientation=vertical]:h-4"
                        />
                        <h1 className="text-xs sm:text-base font-medium"> Create news page </h1>
                    </div>
                    <Button className="mx-4 text-xs h-fit w-fit p-2 sm:text-sm sm:px-4"> Publish </Button>
                </header>

                {/* Header for the dashboard section */}
                <div className="flex w-full items-center flex-1 flex-col">

                    {/* Container */}
                    <div className="container w-full flex flex-1 flex-col gap-2">

                        <Textarea
                            className="resize-none h-0 overflow-hidden px-0 sm:px-5 mx-auto mt-6 border-none shadow-none w-[90%] max-w-[360px] md:w-[480px] md:max-w-[480px] lg:w-[720px] lg:max-w-[720px] !text-3xl font-bold !focus:ring-0 !focus:outline-0 italic ring-0 ring-offset-0 !outline-none"
                            placeholder="Heading goes here..."
                            onInput={(e) => {
                                const target = e.target as HTMLTextAreaElement;
                                target.style.height = 'h-0';
                                target.style.height = `${target.scrollHeight}px`;
                            }}
                        />

                        <div className="flex flex-row sm:justify-center sm:items-center gap-8 mt-6 mx-auto w-[90%] max-w-[360px] px-2 sm:px-24 md:w-[480px] md:max-w-[480px] lg:w-[720px] lg:max-w-[720px]">
                            <div className="flex items-start sm:items-center gap-2">
                                <Avatar className="h-10 w-10 rounded-full grayscale">
                                    <AvatarImage
                                        src="/avatars/shadcn.jpg"
                                        alt={user?.firstName && user?.lastName
                                            ? `${user?.firstName} ${user?.lastName}`
                                            : "NA"}
                                    />
                                    <AvatarFallback className="rounded-lg">
                                        {user?.firstName && user?.lastName
                                            ? `${user?.firstName[0]}${user?.lastName[0]}`
                                            : "NA"}
                                    </AvatarFallback>
                                </Avatar>

                                <div className="flex flex-col w-full">
                                    <span className="text-sm font-medium inline-block max-w-[180px] whitespace-nowrap overflow-hidden text-ellipsis">{`${user?.firstName} ${user?.lastName}`}</span>
                                    <span className="text-xs text-muted-foreground inline-block max-w-[180px] whitespace-nowrap overflow-hidden text-ellipsis"> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} </span>
                                </div>
                            </div>

                            <Separator className="bg-[#DCDCDC] h-0.5 hidden sm:flex" />
                        </div>

                        {/* Tiptap editor for creating or editing content */}
                        <MinimalTiptapEditor
                            value={value}
                            onChange={setValue}
                            className="w-full border-none shadow-none"
                            editorContentClassName="p-5"
                            output="html"
                            placeholder="Start typing your content here..."
                            autofocus={true}
                            editable={true}
                            editorClassName="focus:outline-hidden"
                        />
                    </div>



                </div>

            </SidebarInset>

        </SidebarProvider>
    )
}
