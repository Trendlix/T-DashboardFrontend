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

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  // const pathname = usePathname()
  // const router = useRouter()
  // const token = Cookies.get('adminToken') || Cookies.get('accessToken') 
  // if((!token) && pathname!=='/signin'){
  //   router.replace('/signin')
  // }
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        {/* {(!token) && pathname!=='/signin' ? 
        (
          <div className='h-screen w-screen bg-white'>
          </div>
        ) : (
        <ModalProvider>
            {children}
        </ModalProvider>
        )} */}
         {/* <ModalProvider>
            {children}
        </ModalProvider> */}
        <AuthLayout>
          {children}
        </AuthLayout>
      </body>
    </html> 
  )
}
