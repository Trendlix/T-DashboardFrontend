import './globals.css'
import { Poppins } from 'next/font/google'
import axios from 'axios';
import AuthLayout from '@/components/Layout/authLayout';

// Set withCredentials to true for all Axios requests
axios.defaults.withCredentials = true;

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Trendlix Dashboard',
  description: 'Trendlix Dashboard - trendlix digital marketing agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <AuthLayout>
          {children}
        </AuthLayout>
      </body>
    </html> 
  )
}
