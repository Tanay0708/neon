import { Fragment , React } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import AllOrders from './AllOrders'
import { Link, Navigate, useNavigate, useNavigation } from 'react-router-dom'
import AllRoutes from '../Routes/AllRoutes'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }

 

 

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth)
    navigate('/login')
  }


  return (
    <>
    <div className="min-h-full">
        
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-14 "
                    src="/Image/logo.svg"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                  
                    <Link to={"/allorders"}>
                    <h2 className='text-white'>All Orders</h2>
                    </Link>
                    <Link to={"/shipped--orders"}>
                    <h2 className='text-white'>Shipped</h2>
                    </Link>
                    <Link to={"/completed"}>
                    <h2 className='text-white'>Completed</h2>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full border-2" src="/Image/logo.svg" alt="" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      
                          <Menu.Item >
                           
                               <button onClick={logout}> 
                                sign Out
                               </button>
                              
                           
                          </Menu.Item>
                       
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 flex flex-col pt-2 sm:px-3">
              
              <Link to={"/allorders"}>
                    <Disclosure.Button className={classNames("text-white")}> 
                        All Orders
                        </Disclosure.Button>
                    </Link>

                    <Link to={"/shipped--orders"}>
                    <Disclosure.Button className={classNames("text-white")}> 
                        Shipped
                        </Disclosure.Button>
                    </Link>
                    <Link to={"/completed"}>
                    <Disclosure.Button className={classNames("text-white")}> 
                        Completed
                        </Disclosure.Button>
                    </Link>
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              
              <div className="mt-3 space-y-1 px-2">
               
               <button onClick={logout} className='text-white'>Sign Out</button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
      </div>
    </header>
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                  {/* <AllOrders /> */}
    </div>
    </main>
  </div>
  
  </>
  )
}

export default Dashboard