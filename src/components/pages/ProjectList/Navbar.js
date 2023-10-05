import logo from "../images/Logo.svg";

const Navbar = ({ icon = false, heading, iconImg }) => {
  return (
    <>
      <div
        className="d-flex align-items-center p-4 page-heading"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className="d-flex align-items-center heading-logo">
          {icon && iconImg}
          <h4>{heading}</h4>
        </div>
        <div className="imglogo-heading">
          <img src={logo} alt="logo" />
        </div>
        <div className="logout-heading">
          <img src={""} alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
