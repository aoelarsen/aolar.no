const Footer = () => {
  const thisYear:number = new Date().getFullYear()

  return (
    <footer className="font-sans p-4 flex flex-col md:flex-row gap-1 justify-center border-t border-dotted border-gray-50 rounded-t-sm">
      <p>&copy; {thisYear} <span className="font-bold pr-[0.15rem]">AOL</span>ar.no </p>
      <p className="hidden md:inline">&#124;</p>
      <p>This site is made with <a href="https://astro.build">Astro</a> &amp; <a href="https://tailwindcss.com/">Tailwindcss</a></p> 
      <p className="hidden md:inline">&#124;</p>
      <p>hosted with <a href="https://netlify.com">Netlify</a> &#x2799; <a href="https://app.netlify.com/sites/aolar/deploys" className="inline-block align-center"><img src="https://api.netlify.com/api/v1/badges/4ce45616-d7c6-4d16-bd5c-2eb5c9a5f300/deploy-status" /></a></p>
    </footer>
  )
}

export default Footer