import Link from 'next/link'

const Nav = () => {
  return (
    <div className="my-4 d-flex align-items-center">
      <img
        className="rounded-circle"
        width="60"
        src="/images/nav/f9796cb6495069a239407bf0e3d5c447.png"
      />
      <Link href="/">
        <a className="ms-2 fs-2 text-decoration-none text-reset">
          {process.env.NEXT_PUBLIC_SITE_NAME}
        </a>
      </Link>
    </div>
  )
}

export default Nav
