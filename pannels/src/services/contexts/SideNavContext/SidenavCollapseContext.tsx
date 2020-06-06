import { createContext, useContext } from "react";

export const SidenavCollapseContext = createContext<
  [boolean, (t: boolean) => void]
>([false, (t) => {}]);

export const useSidebarCollapse = () => useContext(SidenavCollapseContext);
