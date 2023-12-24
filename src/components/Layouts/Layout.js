import SideNav from "@/pages/SideNav";

const Layout = ({ children }) => {
  return (
    <div className="bg-mainBackground flex h-screen">
      <SideNav />

      <main className="flex flex-1 ">{children}</main>
    </div>
  );
};

export default Layout;
