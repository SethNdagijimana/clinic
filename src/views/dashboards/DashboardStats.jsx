import { Activity, Syringe, Timer, UserRound } from "lucide-react"
import React from "react"

const DashboardStats = () => {
  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-2 px-4">
        <div className="bg-[#758796] px-4 rounded-xl w-[160px] h-[150px]">
          <div className="flex items-center gap-2 mt-8">
            <span>
              <UserRound color="white" />
            </span>
            <div>
              <p className="text-base text-white font-semibold">
                Total Patient
              </p>
              <p className="text-white">20</p>
            </div>
          </div>
        </div>

        <div className="bg-[#131a14] px-4 rounded-xl w-[160px] h-[150px">
          <div className="flex items-center gap-2 mt-3">
            <span>
              <Syringe color="white" />
            </span>
            <div>
              <p className="text-base text-white font-semibold">
                Surgery Scheduled
              </p>
              <p className="text-white">8</p>
            </div>
          </div>
        </div>

        <div className="bg-[#121a3b] px-4 rounded-xl w-[160px] h-[150px">
          <div className="flex items-center gap-2 mt-3">
            <span>
              <Timer color="white" />
            </span>
            <div>
              <p className="text-base text-white font-semibold">
                Upcoming Appointments
              </p>
              <p className="text-white">15</p>
            </div>
          </div>
        </div>

        <div className="bg-[#758796] px-4 rounded-xl w-[160px] h-[150px">
          <div className="flex items-center gap-2 mt-3">
            <span>
              <Activity color="white" />
            </span>
            <div>
              <p className="text-base text-white font-semibold">
                Doctors Available
              </p>
              <p className="text-white">5</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 mt-20 px-4">
        <div className="w-[350px] border-2 rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Recent Patients</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-3 font-medium text-gray-700">Name</th>
                <th className="py-2 px-3 font-medium text-gray-700">Age</th>
                <th className="py-2 px-3 font-medium text-gray-700">Gender</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100">
                <td className="py-2 px-3">John Doe</td>
                <td className="py-2 px-3">25</td>
                <td className="py-2 px-3">Male</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="py-2 px-3">Jane Smith</td>
                <td className="py-2 px-3">30</td>
                <td className="py-2 px-3">Female</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="py-2 px-3">Mark Lee</td>
                <td className="py-2 px-3">45</td>
                <td className="py-2 px-3">Male</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-[350px] border-2 rounded-lg shadow-md  p-4">
          <h2 className="text-lg font-semibold mb-4">Upcominng Appointments</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-3 font-medium text-gray-700">
                  Patients
                </th>
                <th className="py-2 px-3 font-medium text-gray-700">Date</th>
                <th className="py-2 px-3 font-medium text-gray-700">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100">
                <td className="py-2 px-3">John Doe</td>
                <td className="py-2 px-3">04/07/2025</td>
                <td className="py-2 px-3">10:00 am</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="py-2 px-3">Jane Smith</td>
                <td className="py-2 px-3">04/07/2025</td>
                <td className="py-2 px-3">10:00 am</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="py-2 px-3">Mark Lee</td>
                <td className="py-2 px-3">04/07/2025</td>
                <td className="py-2 px-3">10:00 am</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default DashboardStats
