import Banner from '@/components/home/banner'
import BgGradient from '@/components/home/bg-gradient'
import Divider from '@/components/home/divider'
import Footer from '@/components/home/footer'
import HowItWorks from '@/components/home/howitworks'
import Pricing from '@/components/home/pricing'

export default function Home() {
  return (
    <main className='mx-auto w-full inset-0 h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'>
      <BgGradient />
      <Banner />
      <Divider />
      <HowItWorks />
      <Divider />
      <Pricing />
      <Divider />
      <Footer />
    </main>
  )
}
