import {
  Admin,
  Resource,
  //ListGuesser,
  //EditGuesser,
  ShowGuesser,
  defaultTheme,
} from "react-admin";
import { Dashboard } from "./Dashboard";
//import { MyLayout } from "./MyLayout";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";
//import { UserList } from "./users";
//import { PostList, PostEdit, PostCreate } from "./posts";
//import PostIcon from "@mui/icons-material/Book";
//import UserIcon from "@mui/icons-material/Group";

import { GuestLayout } from "./layouts";

let layout: any = GuestLayout;

const Layout = layout

export const App = () => (
  <Admin authProvider={authProvider} 
    dataProvider={dataProvider} 
    dashboard={Dashboard} 
    layout={Layout}
    theme={{
      ...defaultTheme,
      palette: {
          mode: 'dark'
          //background: {
          //    default: '#faffff',
          //},
      },
    }}
  >
{/*     <Resource 
      name="posts" 
      list={PostList} 
      edit={PostEdit} 
      create={PostCreate} 
      icon={PostIcon}
    />
    <Resource 
      name="users" 
      list={UserList} 
      show={ShowGuesser} 
      recordRepresentation="name"
      icon={UserIcon}
    />
 */}  </Admin>
);
