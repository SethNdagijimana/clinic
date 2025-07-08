import { LogOut, User, X } from "lucide-react"
import React, { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const AppNavBar = () => {
  // const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  // const { user } = useSelector((state) => state.app.userMngmt || {})

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [dispatch])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".profile-menu")) {
        closeMenu()
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [closeMenu])

  // const handleLogout = async () => {
  //   try {
  //     setIsLoggingOut(true)
  //     await dispatch(logoutAction()).unwrap()
  //     closeMenu()

  //     window.location.href = "/"
  //   } catch (error) {
  //     console.error("Logout failed:", error)
  //   } finally {
  //     setIsLoggingOut(false)
  //   }
  // }

  const handleShowProfile = () => {
    navigate("/dashboard/profile")
    closeMenu()
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="w-full">
      <div className="h-16 px-4">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-sm md:text-base font-bold text-[#000000] whitespace-nowrap">
                Welcome
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* {user?.username && (
              <span className="text-[#fff] hidden sm:inline">
                {user.username}
              </span>
            )} */}

            <div className="relative profile-menu">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-[#000000]" />
                ) : (
                  <User className="h-5 w-5 text-[#000000]" />
                )}
              </button>

              {isMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-[#01281b] ring-1 ring-black ring-opacity-5 z-[60]"
                  role="menu"
                  aria-orientation="vertical"
                >
                  Seth N.
                  {/* {user.username && (
                    <p className="md:hidden flex items-center w-full px-4 py-2 text-sm text-gray-300">
                      {user.username}
                    </p>
                  )} */}
                  <button
                    onClick={handleShowProfile}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                    role="menuitem"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </button>
                  <button
                    // onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                    role="menuitem"
                    disabled={isLoggingOut}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    {isLoggingOut ? "Logging out..." : "Log Out"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default AppNavBar
