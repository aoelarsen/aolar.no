const Footer = () => {
  const thisYear:number = new Date().getFullYear()

  return (
    <footer class="text-center font-sans p-4">
      <p>&copy; {thisYear} <span className="font-bold pr-[0.15rem]">AOL</span>ar.no | made with: <a href="https://astro.build">Astro</a> &amp; <a href="https://tailwindcss.com/">Tailwindcss</a></p>
    </footer>
  )
}

export default Footer