"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import pic from "../images/Logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeCategory, setActiveCategory] = useState("Featured")

  const navItems = [
    { name: "Partner", hasDropdown: true },
    { name: "Company", hasDropdown: true },
    { name: "Managed Services", hasDropdown: true },
    { name: "Industries", hasDropdown: true },
    { name: "Careers", hasDropdown: true },
  ]

  const bottomNavItems = [
    { name: "IIGS STRATEGY", hasDropdown: true },
    { name: "IIGS IPROCURE", hasDropdown: true },
    { name: "IIGS ISUPPLY", hasDropdown: true },
    { name: "IIGS MANAGED SERVICES", hasDropdown: true },
  ]

  const iprocureCategories = [
    "Featured", "AI & machine learning", "Analytics", "Asset lifecycle management", "Business automation",
    "Containers", "Databases", "DevOps & Engineering", "IT automation", "Middleware", "Network",
    "Operating systems", "Quantum"
  ]

  const iprocureContent = {
    Featured: [
      { title: "Concert", description: "Software to manage applications, mitigate risks and enhance resilience" },
      { title: "Instana", description: "Software for application performance monitoring and automation" },
      { title: "Storage Defender", description: "Data resiliency software for threat detection and data recovery" },
      { title: "FlashSystem", description: "Primary storage for performance and latency sensitive workloads" },
      { title: "MaaS360", description: "Unified endpoint management software for many device types" },
      { title: "Turbonomic", description: "Software to manage and optimize IT resource usage" },
      { title: "HashiCorp", description: "Manage cloud infrastructure and security" },
      { title: "Maximo", description: "Software for asset management and related workflows" },
      { title: "Verify", description: "Identity, authentication, and access control software" },
      { title: "IBM Cloud", description: "On-demand cloud computing platform and APIs" },
      { title: "Planning Analytics", description: "Software to automate financial and operational planning" },
      { title: "watsonx", description: "AI and data platform" },
      { title: "IBM Z", description: "Flagship mainframe with on-chip AI and quantum-safe cryptography" },
      { title: "Robotic Process Automation (RPA)", description: "Software to automate workflows and business processes" },
      { title: "watsonx Assistant", description: "Virtual agents customizable to any domain" },
    ],
    "AI & machine learning": [
      { title: "watsonx.ai", description: "Enterprise studio for AI builders with foundation models" },
      { title: "Watson Assistant", description: "AI-powered customer service virtual agent" },
      { title: "Watson Discovery", description: "AI-powered search and content analytics engine" },
    ],
    Analytics: [
      { title: "Cognos Analytics", description: "AI-infused business intelligence platform" },
      { title: "SPSS Statistics", description: "Statistical analysis and reporting software" },
      { title: "Planning Analytics", description: "Enterprise planning and analysis solution" },
    ],
  }

  const handleDropdownClick = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
    setActiveCategory("Featured")
  }

  const handleCategoryClick = (category) => setActiveCategory(category)
  const handleClickOutside = () => setActiveDropdown(null)
  const getActiveCategoryContent = () => iprocureContent[activeCategory] || []

  return (
    <>
      {activeDropdown && <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={handleClickOutside} />}

      <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black via-black/60 to-transparent text-[11px]">

        <div className="flex justify-between items-center px-3 py-2">
          <div className="flex items-center space-x-1">
            <img src={pic || "/placeholder.svg"} alt="Logo" className="h-6 w-auto" />
            <div className="h-8 w-px bg-white opacity-30" />
            <div className="text-white text-[9px] leading-tight font-semibold">
              <div>RESHAPING</div>
              <div>PROCUREMENT</div>
              <div>THROUGH INNOVATION</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <button key={index} className="flex items-center text-white hover:text-orange-400 font-medium">
                {item.name}
                {item.hasDropdown && <ChevronDown className="ml-1 w-3 h-3" />}
              </button>
            ))}
          </div>

          <button
            className="lg:hidden text-white hover:text-orange-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        <div className="hidden lg:flex justify-start space-x-5 px-4 pb-2 border-t border-slate-700">
          {bottomNavItems.map((item, index) => {
            const [first, ...rest] = item.name.split(" ")
            return (
              <button
                key={index}
                className="flex items-center pt-1 font-medium"
                onClick={() => (item.name === "IIGS IPROCURE" ? handleDropdownClick(item.name) : null)}
              >
                <span className="text-orange-500">{first}</span>
                <span className="text-white ml-1">{rest.join(" ")}</span>
                {item.hasDropdown && (
                  <ChevronDown
                    className={`ml-1 w-3 h-3 transition-transform ${
                      activeDropdown === item.name ? "rotate-180 text-orange-400" : "text-white hover:text-orange-400"
                    }`}
                  />
                )}
              </button>
            )
          })}
        </div>

        {activeDropdown === "IIGS IPROCURE" && (
          <div className="absolute top-full left-0 right-0 z-50 bg-white shadow-lg border-t-2 border-orange-500">
            <div className="flex text-[11px]">
              <div className="w-48 bg-gray-50 border-r border-gray-200 h-[350px] overflow-y-auto">
                <div className="py-1">
                  {iprocureCategories.map((cat, i) => (
                    <div
                      key={i}
                      className={`px-2 py-1 cursor-pointer hover:bg-gray-200 ${
                        activeCategory === cat ? "bg-gray-200 font-medium border-r-2 border-orange-500" : ""
                      }`}
                      onClick={() => handleCategoryClick(cat)}
                    >
                      {cat}
                    </div>
                  ))}
                </div>
                <div className="bg-blue-600 text-white py-1 px-2 m-2 rounded text-[10px]">
                  <a href="#" className="flex items-center">
                    View all products
                    <ChevronDown className="ml-1 w-3 h-3 rotate-[-90deg]" />
                  </a>
                </div>
              </div>

              <div className="flex-1 p-3 h-[350px] overflow-y-auto">
                <h2 className="text-sm font-semibold mb-3">{activeCategory}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {getActiveCategoryContent().map((item, idx) => (
                    <div key={idx}>
                      <h3 className="font-medium text-slate-600 hover:text-blue-600 mb-1">{item.title}</h3>
                      <p className="text-slate-500 text-[10px] leading-tight">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900 bg-opacity-80 border-t border-slate-700 text-xs">
            <div className="p-3">
              {navItems.map((item, i) => (
                <div key={i} className="py-1">
                  <button className="flex items-center text-white hover:text-orange-400 font-medium">
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="ml-1 w-3 h-3" />}
                  </button>
                </div>
              ))}
              <div className="border-t border-slate-700 mt-3 pt-2">
                {bottomNavItems.map((item, i) => (
                  <div key={i} className="py-1">
                    <button
                      className="flex items-center text-cyan-400 hover:text-orange-400 font-medium"
                      onClick={() => (item.name === "IIGS IPROCURE" ? handleDropdownClick(item.name) : null)}
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="ml-1 w-3 h-3" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
