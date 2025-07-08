import { ArrowLeft, ArrowRight, Menu } from "lucide-react"
import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
}

const DashboardLayout = ({
  children,
  menuItems,
  title = "Clinic Management",
  breakpoint = "md",
  initialSidebarState = true,
  sidebarWidth = {
    collapsed: "w-20",
    expanded: "w-64",
    mobile: "w-72"
  }
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(initialSidebarState)
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeItem, setActiveItem] = useState(null)
  const [isHeaderSticky, setHeaderSticky] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const location = useLocation()

  useEffect(() => {
    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        const mobile = window.innerWidth < BREAKPOINTS[breakpoint]
        setIsMobile(mobile)
        if (!mobile) {
          setIsSidebarOpen(true)
        }
      }, 100)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(resizeTimer)
    }
  }, [breakpoint])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setHeaderSticky(currentScrollY < lastScrollY || currentScrollY < 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const sidebarWidthClass = isMobile
    ? sidebarWidth.mobile
    : isSidebarCollapsed
    ? sidebarWidth.collapsed
    : sidebarWidth.expanded

  const mainContentClass = isMobile
    ? ""
    : `${isSidebarCollapsed ? "md:pl-20" : "md:pl-64"}`

  return (
    <div className="flex min-h-screen bg-gray-900">
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0
          bg-gray-900
          transform transition-all duration-300 ease-in-out
          ${sidebarWidthClass}
          ${
            isMobile
              ? isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full"
              : "translate-x-0"
          }
          border-r border-gray-800
          z-50
        `}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div
            className={`p-6 border-b flex items-center justify-between bg-black/20`}
          >
            <h1
              className={`text-2xl text-white font-mono bg-clip-text text-transparent bg-gradient-to-r from-green-950/80 to-white transition-all duration-300`}
            >
              {!isMobile && isSidebarCollapsed ? title.charAt(0) : title}
            </h1>
            {!isMobile && (
              <button
                onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
                className="text-white hover:text-gray-500 p-2 rounded-lg transition-all duration-200"
                aria-label={
                  isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"
                }
              >
                {isSidebarCollapsed ? (
                  <ArrowRight size={16} className="text-[#fff]" />
                ) : (
                  <ArrowLeft size={16} className="text-[#fff]" />
                )}
              </button>
            )}
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto scrollbar-none bg-gray-900">
            <ul className="space-y-2">
              {menuItems.map((menu) => (
                <li key={menu.name} className="space-y-2">
                  {menu.subItems ? (
                    <div>
                      <div
                        className={`
                          relative flex items-center gap-4 px-4 py-3 rounded-lg
                          transition-all duration-200 overflow-hidden
                      
                          cursor-pointer
                        `}
                        onClick={() =>
                          setActiveItem(
                            activeItem === menu.name ? null : menu.name
                          )
                        }
                      >
                        <span className="text-lg text-white">{menu.icon}</span>
                        {!isSidebarCollapsed && (
                          <span className="text-sm font-mono tracking-wide block">
                            {menu.name}
                          </span>
                        )}
                        {!isMobile && !isSidebarCollapsed && (
                          <ArrowRight
                            size={12}
                            className={`ml-auto transform transition-transform duration-200 
                              ${activeItem === menu.name ? "rotate-90" : ""}`}
                          />
                        )}
                      </div>

                      {activeItem === menu.name && !isSidebarCollapsed && (
                        <ul className="mt-2 ml-4 space-y-2">
                          {menu.subItems.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                to={subItem.path}
                                onClick={() =>
                                  isMobile && setIsSidebarOpen(false)
                                }
                                className={`
                                  relative flex items-center gap-4 px-4 py-2 rounded-lg
                                  transition-all duration-200 overflow-hidden
                                  ${location.pathname === subItem.path}
                                `}
                              >
                                <div className="w-1 h-1 rounded-full bg-green-900/80" />
                                <span className="text-sm font-mono tracking-wide">
                                  {subItem.name}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={menu.path}
                      onClick={() => isMobile && setIsSidebarOpen(false)}
                      className={`
                        relative flex items-center gap-4 px-4 py-3 rounded-lg
                        transition-all duration-200 overflow-hidden
                        ${location.pathname === menu.path}
                    
                      `}
                    >
                      <span className="text-lg text-white">{menu.icon}</span>
                      {!isSidebarCollapsed && (
                        <span className="text-sm font-mono tracking-wide block">
                          {menu.name}
                        </span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 ${mainContentClass} transition-all duration-300`}>
        {/* Header */}
        <header
          className={`
            fixed top-0 right-0 left-0 
            ${isMobile ? "ml-0" : isSidebarCollapsed ? "md:ml-20" : "md:ml-64"}
            transition-all duration-300
            z-40 border-b border-green-400/10
            backdrop-blur-xl
            bg-gray-900/80
          `}
        >
          <div className="flex items-center h-16 px-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-xl mr-4 md:hidden text-white hover:text-white hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="Toggle sidebar"
            >
              <Menu />
            </button>
            <div className="w-full">{children.nav}</div>
          </div>
        </header>

        {/* Header Spacer */}
        <div className="h-16" />

        {/* Main Content Area */}
        <main className="min-h-[calc(100vh-4rem)] bg-gray-900 px-4 py-6">
          <div className="max-w-[1400px] mx-auto w-full">
            {children.content}
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
