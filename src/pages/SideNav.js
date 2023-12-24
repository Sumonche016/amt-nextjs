import { Poppins } from "next/font/google";
import Image from "next/image";
import logo from "../../src/asset/images/logo.svg";
import Link from "next/link";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { PiStudentLight } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { MdOutlineSchedule } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { TbReport } from "react-icons/tb";
import { useRouter } from "next/router";
const navItem = [
  {
    name: "Dashboards",
    icon: <MdOutlineDashboardCustomize className="text-[1.2rem]" />,
    link: "/",
  },
  {
    name: "Students",
    icon: <PiStudentLight className="text-[1.2rem]" />,
    link: "/students",
  },
  {
    name: "Instructor",
    icon: <LiaChalkboardTeacherSolid className="text-[1.2rem]" />,
    link: "/instructor",
  },
  {
    name: "Schedule",
    icon: <MdOutlineSchedule className="text-[1.2rem]" />,
    link: "/schedule",
  },
  {
    name: "Certificate",
    icon: <GrCertificate className="text-[1.2rem]" />,
    link: "/certificate",
  },
  {
    name: "Reports",
    icon: <TbReport className="text-[1.2rem]" />,
    link: "/reports",
  },
];

const SideNav = () => {
  const router = useRouter();

  return (
    <div className="shadow-medium h-full w-[16.75rem] bg-white">
      <nav className="h-full px-6">
        <div className="flex justify-center items-center p-4">
          <Image src={logo} width={"100%"} height={"100%"} alt="Logo" />
        </div>

        <div id="close-nav" className="">
          <i className="fa-solid fa-xmark"></i>
        </div>

        <div className="">
          <ul>
            {navItem.map((item, index) => (
              <div key={index} className="mt-4">
                <Link href={item.link}>
                  <div
                    className={`flex gap-2 items-center h-[2.75rem] rounded-[5px] ${
                      router.pathname === item.link
                        ? "buttonGradient text-white"
                        : "bg-[#F5F5F5] text-grayLight"
                    }   pl-4`}
                  >
                    {item.icon}
                    <p className="font-medium">{item.name}</p>
                  </div>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideNav;
