import { sidedata } from "./Sidebardata";
import { Link } from "react-router-dom";

export function Sidebar() {
  let sidebardata = sidedata;
  return (
    <>
      <section className="sidebar_dashboard w-[100px] h-[100vh] border-[1px] text-[white] border-[black] rounded-e-[35px] bg-[#e02708] overflow-y-scroll">
        <section className=" flex justify-center items-center flex-col">
          {sidebardata.map((items, index) => {
            return (
              <>
                <Link to={items.Path} className="w-[100%]">
                  <div className="sidebar_options w-[100%] flex justify-between items-center mt-[20px] py-[10px] text-[20px]">
                    <div className="side_icons w-[100%] flex justify-center items-center">
                      {items.icon}
                    </div>

                    <div className="side_options ms-3 w-[70%] absolute">
                      {items.Name}
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </section>
      </section>
    </>
  );
}
