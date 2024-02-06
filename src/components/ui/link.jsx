import Link from "next/link"

function RouteLink({href='/', text=''}) {
  return (
    <Link href={href} className="text-light hover:text-trend hover:underline transition">
        {text}
    </Link>
  )
}

export default RouteLink