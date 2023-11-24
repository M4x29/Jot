import Nav from "@/components/nav/nav";

function Layout({ children }) {
  return (
    <>
      {" "}
      <Nav />
      <div className="mt-16"> {children}</div>
    </>
  );
}
export default Layout;
