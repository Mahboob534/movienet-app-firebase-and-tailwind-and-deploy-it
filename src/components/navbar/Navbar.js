import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
function Navbar() {
  const { user, logOut } = UserAuth({});
  const navigate = useNavigate();
  //console.log(user.email);
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between z-[100] w-full absolute p-5">
      <Link to="/">
        <h1 className="text-4xl text-red-600 fond-bold cursor-pointer">
          نت مووی{" "}
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-slate-100 pl-4">حساب کاربری</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-4 rounded  cursor-pointer text-slate-100 "
          >
            خروج
          </button>
        </div>
      ) : (
        <div>
          <Link to="./login">
            <button className="text-slate-100 pl-4">ورود</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-4 rounded  cursor-pointer text-slate-100 ">
              ثبت نام
            </button>
          </Link>
        </div>
      )
      }
    </div>
  );
}

export default Navbar;
