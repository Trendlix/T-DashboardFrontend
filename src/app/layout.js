"use client"
import { ModalProvider } from './ModalProvider'
import './globals.css'
import { Poppins } from 'next/font/google'
import axios from 'axios';
import { usePathname } from 'next/navigation';
import Cookies from "js-cookie"
import { useRouter } from 'next/navigation';

// Set withCredentials to true for all Axios requests
axios.defaults.withCredentials = true;

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const router = useRouter()
  const adminToken = Cookies.get('adminToken') 
  const accessToken = Cookies.get('accessToken') 
  if((!adminToken && !accessToken) && pathname!=='/signin'){
    router.replace('/signin')
  }
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        {(!adminToken && !accessToken) && pathname!=='/signin' ? 
        (
          <div className='h-screen w-screen bg-white'>
          </div>
        ) : (
        <ModalProvider>
            {children}
        </ModalProvider>
        )}
      </body>
    </html> 
  )
}
