import {
  Calendar,
  ClipboardMinus,
  HeartHandshake,
  LayoutDashboard
} from "lucide-react"
import React from "react"

import { Navigate, Route, Routes } from "react-router-dom"
import AppNavBar from "../../components/AppNavBar"
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout"
import DashboardStats from "./DashboardStats"

const Dashboard = () => {
  // const { user } = useSelector((state) => state.app.userMngmt)
  // const isAdmin = user?.role === "administrator"
  // const isManager = user?.role === "manager"
  // const canCreate = isAdmin || isManager

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={14} className="text-[#758796]" />,
      path: "/dashboard"
    },
    {
      name: "Patients",
      icon: <HeartHandshake size={14} className="text-[#758796]" />,
      path: "/dashboard/patients",
      subItems: [
        {
          name: "Register Patient",
          path: "/dashboard/patients/new"
        },
        {
          name: "View Patients",
          path: "/dashboard/patients/view"
        }
      ]
    },
    {
      name: "Appointments",
      icon: <Calendar size={14} className="text-[#758796]" />,
      path: "/dashboard/Appointments"
      // subItems: canCreate
      //   ? [
      //       {
      //         name: "New Action",
      //         path: "/dashboard/action/new"
      //       },
      //       {
      //         name: "View Actions",
      //         path: "/dashboard/action/view"
      //       }
      //     ]
      //   : [
      //       {
      //         name: "View Actions",
      //         path: "/dashboard/action/view"
      //       }
      //     ]
    },
    {
      name: "Reports",
      icon: <ClipboardMinus size={14} className="text-[#758796]" />,
      path: "/dashboard/Reports"
      // subItems: canCreate
      //   ? [
      //       {
      //         name: "New Schedule",
      //         path: "/dashboard/schedule/new"
      //       },
      //       {
      //         name: "View Schedules",
      //         path: "/dashboard/schedule/view"
      //       },
      //       {
      //         name: "Attendance",
      //         path: "/dashboard/schedule/attendance"
      //       }
      //     ]
      //   : [
      //       {
      //         name: "View Schedules",
      //         path: "/dashboard/schedule/view"
      //       },
      //       {
      //         name: "Attendance",
      //         path: "/dashboard/schedule/attendance"
      //       }
      //     ]
    }
  ]

  return (
    <>
      <DashboardLayout
        menuItems={menuItems}
        title="Clinic Management"
        variant="admin"
        breakpoint="lg"
        initialSidebarState={true}
      >
        {{
          nav: <AppNavBar />,
          content: (
            <Routes>
              {/* Dashboard home */}
              <Route path="/" element={<DashboardStats />} />

              {/* Catch all route - redirect to dashboard */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          )
        }}
      </DashboardLayout>
    </>
  )
}

export default Dashboard
