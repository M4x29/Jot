import Nav from "@/components/nav/nav";

function Layout({ children }) {
  return (
    <>
      {" "}
      <Nav />
      {children}
    </>
  );
}
export default Layout;
