import React,{Component} from 'react'

import Head from 'next/head'
import Link from 'next/link'

class OverallLayout extends Component {
  constructor(props){
    super(props)
    this.state = {
      top: props.top || {
        title: 'Start',
        view:
          <div>
            <div>This is the start.</div>
          </div>
      },
      modal: props.modal,
      title: [props.title]
    }
    this.closeModal = this.closeModal.bind(this)
  }
  componentWillMount(){
    console.log('mounting')
  }
  componentWillReceiveProps(newProps){
    this.setState(state => {
      state.top = newProps.top
      state.modal = newProps.modal ? {
        title: newProps.modal.title,
        view: React.cloneElement(newProps.modal.view,{close:this.closeModal})
      } : null
      return state
    })
  }
  closeModal(){
    this.setState(state => {
      state.modal = null
      return state
    })
  }
  render(){
    const {top,modal} = this.state
    return (
      <div>
        <Head>
          <title>{modal ? modal.title : top.title}</title>
        </Head>
        <header>
          <Link href="/"><a>start</a></Link>
          <Link href="/middle"><a>middle</a></Link>
          <Link href="/end"><a>end</a></Link>
        </header>
        <div>
          {top.view}
          {modal ? modal.view : null}
        </div>
        <footer>
          <div>
            <Link href="/about"><a>about</a></Link>
            <Link href="/privacy"><a>privacy</a></Link>
          </div>
        </footer>
      </div>
    )
  }
}

export default OverallLayout
