import {
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
  MailWarning,
  MoreVerticalIcon,
  UserCircleIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "@/contexts/AppContext";
import { toast } from "sonner";
import axios from "axios";




export function NavUser() {

  const { isMobile } = useSidebar()

  const navigate = useNavigate();

  const { user, backendUrl, setUser, setIsLoggedIn } = useContext(AppContext);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true; // Ensure cookies are sent with requests

      const { data } = await axios.post(backendUrl + "/api/auth/send-verify-otp");

      if (data.success) {
        navigate("/email-verification");
        // Handle success, e.g., show a toast notification
        toast.success("Verification OTP sent successfully.", {
          description: "Please check your email for the OTP.",
          duration: 10000,
          closeButton: true
        });
      } else {
        // Handle failure, e.g., show a toast notification
        toast.error("Failed to send verification OTP.", {
          description: data.message || "Please try again later.",
          duration: 10000,
          closeButton: true
        });
      }
    } catch (error: any) {
      console.error("Error sending verification OTP:", error);
      // Handle error, e.g., show a toast notification 
      toast.error("Error sending verification OTP.", {
        description: error.message,
        duration: 10000,
        closeButton: true
      });
    }
  }

  const logout = async () => {
    try {

      axios.defaults.withCredentials = true; // Ensure cookies are sent with requests

      const { data } = await axios.post(backendUrl + "/api/auth/logout");

      data.success && setIsLoggedIn(false);
      data.success && setUser(null);
      data.success && navigate("/login");

    } catch (error: any) {
      console.error("Error logging out:", error);
      // Handle error, e.g., show a toast notification 
      toast.error("Error logging out.", {
        description: error.message,
        duration: 10000,
        closeButton: true
      });
    }
  }



  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg grayscale">
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
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{`${user?.firstName} ${user?.lastName}`}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {`${user?.email}`}
                </span>
              </div>
              <MoreVerticalIcon className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
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

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{`${user?.firstName} ${user?.lastName}`}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {`${user?.email}`}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <UserCircleIcon />
                Account
              </DropdownMenuItem>
              {user?.isVerified ? (
                <>
                </>
              ) : (
                <DropdownMenuItem onClick={sendVerificationOtp}>
                  <MailWarning />
                  Verify email
                </DropdownMenuItem>
              )}

              <DropdownMenuItem>
                <BellIcon />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-destructive hover:text-destructive" onClick={logout}>
              <LogOutIcon />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
