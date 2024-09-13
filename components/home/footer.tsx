export default function Footer() {
  return (
    <footer className='bg-gray-200/20 flex h-20 py-24 px-12 z-20 relative overflow-hidden flex-col gap-2'>
      <p>All Rights Reserved, {new Date().getFullYear()}</p>
      <a href='https://x.com/@kulkarniankita9' target='_blank'>
        Built by Ankita 🚀
      </a>
    </footer>
  )
}
