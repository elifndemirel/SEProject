import { IoLogOutOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

export const SidebarData = [
  {
    title: "Profile",
    path: "/profile",
    icon: <CgProfile />,
    cName: "nav-text",
  },
  {
    title: "Sign out",
    path: "/",
    icon: <IoLogOutOutline />,
    cName: "nav-text",
  },
];
