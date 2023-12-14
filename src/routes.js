import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdLogout,
  MdOutlineShoppingCart,
  MdEdit,
  MdDelete,
} from "react-icons/md";
import { LinkIcon } from '@chakra-ui/icons'
// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import GroupDetails from "views/admin/GroupsDetail/GroupsDetail";
// Auth Imports
// import SignInCentered from "views/auth/signIn";
import SignIn from "views/auth/signIn/index.jsx";
import SignUp from "views/auth/signUp/index.jsx";
import CreatePost from "views/admin/CreatePost/CreatePost";
import AllGroups from "views/admin/AllGroups/AllGroups";
import AddUserPanel from "views/admin/AddUser/AddUser";
import MessageList from "views/admin/Messages/Messages";
import UserProfile from "views/admin/UserProfile/UserProfile";
import AllUsers from "views/admin/AllUsers/AllUsers";
import CreateGroupPage from "views/admin/CreateGroup/CreateGroup";
import GroupMessage from "views/admin/GroupMessage/GroupMessage";
import AddAdmin from "views/admin/AddAdmin/AddAdmin";
import LinkForm from "views/admin/AddLinks/AddLinks";
import LinkTable from "views/admin/AddLinks/ShowLinks";


const routes = [
  {
    name: "Main Desk",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Message",
    layout: "/admin",
    path: "/message",
    icon: (
      <span class="material-symbols-outlined d-icons">
          mail
      </span>
    ),
    component: MessageList,
    secondary: true,
  },
  {
    name: "Group Message",
    layout: "/admin",
    path: "/group-message",
    icon: (
      <span class="material-symbols-outlined d-icons">
          mail
      </span>
    ),
    component: GroupMessage,
    secondary: true,
  },
  {
    name: "New Message",
    layout: "/admin",
    path: "/create-post",
    icon: (
      <Icon
        as={MdEdit}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: CreatePost,
    secondary: true,
  },
  
  {
    name: "All Groups",
    layout: "/admin",
    path: "/all-groups",
    icon: (
      <span class="material-symbols-outlined d-icons">
        groups
      </span>
    ),
    component: AllGroups,
    secondary: true,
  },
  {
    name: "Create Group",
    layout: "/admin",
    path: "/create-group",
    icon: (
      <span class="material-symbols-outlined d-icons">
        person_add
      </span>
    ),
    component: CreateGroupPage,
    secondary: true,
  },
  // {
  //   name: "Groups Details",
  //   layout: "/admin",
  //   path: "/groups-details",
  //   icon: (
  //     <span class="material-symbols-outlined d-icons">
  //       group
  //     </span>
  //   ),
  //   component: GroupDetails,
  //   secondary: true,
  // },
  
  {
    name: "All Users",
    layout: "/admin",
    path: "/all-users",
    icon: (
      <span class="material-symbols-outlined d-icons">
        badge
      </span>
    ),
    component: AllUsers,
    secondary: true,
  },
  {
    name: "Add User",
    layout: "/admin",
    path: "/add-user",
    icon: (
      <span class="material-symbols-outlined d-icons">
        person_add
      </span>
    ),
    component: AddUserPanel,
    secondary: true,
  },
  {
    name: "Add Admin",
    layout: "/admin",
    path: "/add-admin",
    icon: (
      <span class="material-symbols-outlined d-icons">
        person_add
      </span>
    ),
    component: AddAdmin,
    secondary: true,
  },
  {
    name: "Add Links",
    layout: "/admin",
    path: "/add-links",
    icon: (
      <Icon
        as={LinkIcon}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: LinkForm,
    secondary: true,
  },
  {
    name: "All Links",
    layout: "/admin",
    path: "/all-links",
    icon: (
      <Icon
        as={LinkIcon}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: LinkTable,
    secondary: true,
  },
  
  {
    name: "User Profile",
    layout: "/admin",
    path: "/usr-profile",
    icon: (
      <span class="material-symbols-outlined d-icons">
        account_circle
      </span>
    ),
    component: UserProfile,
    secondary: true,
  },
  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "/nft-marketplace",
  //   icon: (
  //     <Icon
  //       as={MdOutlineShoppingCart}
  //       width='20px'
  //       height='20px'
  //       color='inherit'
  //     />
  //   ),
  //   component: NFTMarketplace,
  //   secondary: true,
  // },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
  //   path: "/data-tables",
  //   component: DataTables,
  // },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "/profile",
  //   icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
  //   component: Profile,
  // },
  {
    name: "Signin",
    layout: "/auth",
    path: "/sign-in",
    icon: (
      <Icon as={MdHome} width='16px' height='16px' color='inherit' />
    ),
    component: SignIn,
    hide: true
  },
  {
    name: "Sign up",
    layout: "/auth",
    path: "/sign-up",
    icon: (
      <Icon as={MdHome} width='16px' height='16px' color='inherit' />
    ),
    component: SignUp,
    hide: true
  },
];

export const Logout = [
  {
    name: "Log Out",
    layout: "/auth",
    path: "/sign-out",
    icon: (
      <Icon as={MdLogout} width='16px' height='16px' color='inherit' />
    ),
    component: SignIn,
  }
];
export default routes;
