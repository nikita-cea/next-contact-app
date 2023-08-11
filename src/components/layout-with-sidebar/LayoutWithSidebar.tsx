import { PropsWithChildren, useState } from "react";
import { AlternateNavbar, Sidebar } from "@components";

const LayoutWithSidebar = (props: PropsWithChildren) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="grid min-h-screen grid-rows-header bg-zinc-100">
      <div>
        <AlternateNavbar
          onMenuButtonClick={() => setSidebarOpen((prev) => !prev)}
        />
      </div>

      <div className="grid md:grid-cols-sidebar">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        {props.children}
      </div>
    </div>
  );
};

export default LayoutWithSidebar;
