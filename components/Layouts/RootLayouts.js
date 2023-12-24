import { Poppins } from "next/font/google";
import Image from "next/image";
import logo from "../../src/asset/images/logo.svg";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
import { MdOutlineDashboardCustomize } from "react-icons/md";
const RootLayouts = () => {
  return (
    <div className={`${poppins.variable}`}>
      <div>
        <nav class="side-nav  bg-white" id="side-nav">
          <div class="side-nav__logo p-3 d-flex justify-content-center align-items-center">
            <Image src={logo} width={"100%"} height={"100%"} alt="Logo" />
          </div>

          <div
            id="close-nav"
            class="side-nav__close-icon d-felx justify-content-end align-content-center m-3"
          >
            <i class="fa-solid fa-xmark"></i>
          </div>

          <div class="side-nav__item mt-2">
            <ul class="m-0 p-0">
              <li
                id="dashboardBtn"
                class=" nav-btn mx-auto d-flex justify-content-start align-items-center ps-3"
              >
                <div>
                  <MdOutlineDashboardCustomize />
                  <a class=" side-nav__link" href="#">
                    Dashboards
                  </a>
                </div>
              </li>
              <li class=" mx-auto d-flex nav-btn justify-content-start align-items-center ps-3">
                <div>
                  <MdOutlineDashboardCustomize />

                  <a class=" side-nav__link" href="#">
                    Students
                  </a>
                </div>
              </li>
              <li class=" mx-auto d-flex nav-btn justify-content-start align-items-center ps-3">
                <div>
                  <MdOutlineDashboardCustomize />

                  <a class=" side-nav__link" href="#">
                    Instructor
                  </a>
                </div>
              </li>
              <li class=" mx-auto d-flex nav-btn justify-content-start align-items-center ps-3">
                <div>
                  <MdOutlineDashboardCustomize />

                  <a class=" side-nav__link" href="#">
                    Schedule
                  </a>
                </div>
              </li>
              <li class=" mx-auto d-flex nav-btn justify-content-start align-items-center ps-3">
                <div>
                  <MdOutlineDashboardCustomize />

                  <a class=" side-nav__link" href="#">
                    Certificate
                  </a>
                </div>
              </li>
              <li class=" mx-auto d-flex nav-btn justify-content-start align-items-center ps-3">
                <div>
                  <MdOutlineDashboardCustomize />

                  <a class=" side-nav__link" href="#">
                    Reports
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default RootLayouts;
