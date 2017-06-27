import Link from 'next/link'

const Modal = ({close,children}) =>
  <div>
    <header>
      <Link><a>close</a></Link>
    </header>
    {children}
  </div>

export default Modal
