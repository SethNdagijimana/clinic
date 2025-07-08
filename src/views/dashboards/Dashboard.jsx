import { Activity, CalendarCheck, LayoutDashboard } from "lucide-react"
import React from "react"

import { Navigate, Route, Routes } from "react-router-dom"
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout"

const Dashboard = () => {
  // const { user } = useSelector((state) => state.app.userMngmt)
  // const isAdmin = user?.role === "administrator"
  // const isManager = user?.role === "manager"
  // const canCreate = isAdmin || isManager

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={14} className="text-[#fff]" />,
      path: "/dashboard"
    },
    {
      name: "Observation",
      icon: <Activity size={14} className="text-[#fff]" />,
      path: "/dashboard/observation",
      subItems: [
        {
          name: "New Observation",
          path: "/dashboard/observation/new"
        },
        {
          name: "View Observations",
          path: "/dashboard/observation/view"
        }
      ]
    },
    {
      name: "Action",
      icon: <Activity size={14} className="text-[#fff]" />,
      path: "/dashboard/action"
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
      name: "Schedule",
      icon: <CalendarCheck size={14} className="text-[#fff]" />,
      path: "/dashboard/schedule"
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
          // nav: <AppNavBar />,
          content: (
            <Routes>
              {/* Dashboard home */}
              <Route path="/" element={<div> hi</div>} />

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
