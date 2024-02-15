import Modal from '@/components/ui/Modal'
import { ModalProvider } from './ModalProvider'
import './globals.css'
import { Poppins } from 'next/font/google'
import axios from 'axios';

// Set withCredentials to true for all Axios requests
axios.defaults.withCredentials = true;
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ModalProvider>
          {children}
          {/* <Modal modalText="web" /> */}
        </ModalProvider>
      </body>
    </html> 
  )
}
