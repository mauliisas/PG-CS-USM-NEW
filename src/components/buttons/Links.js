import Link from 'next/link'
const Links = ({ children, href, current }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <div className={`p-2 w-56 text-center ${current ? 'border-b-8 border-usm-primary-purple' : ''}`}>
      <a href={href} className={`text-center text-usm-primary-orange uppercase h2`}>{children}</a>
      </div>
    </Link>
  )
}

export default Links