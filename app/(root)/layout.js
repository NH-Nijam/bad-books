import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from 'next/font/google'
import '../globals.css'
import LeftSideBar from "@app/component/Layout/LeftSideBar"
import MainContainer from "@app/component/Layout/MainContainer"
import RightSidebar from "@app/component/Layout/RightSidebar"
import BottomBar from "@app/component/Layout/BottomBar"

export const metadata = {
  title: 'bad-books',
  description: 'Next 14 social app',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2 text-light-1`}>
          <main className="flex flex-row">
            <LeftSideBar />
            <MainContainer>       
              {children}
            </MainContainer>
            <RightSidebar />
          </main>
          <BottomBar/>
        </body>
      </html>
    </ClerkProvider>
  )
}
