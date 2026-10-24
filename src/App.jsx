import { Component } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Collection from './components/Collection'
import Story from './components/Story'
import Steps from './components/Steps'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'

class Safe extends Component {
  state = { error: null }
  static getDerivedStateFromError(error) {
    return { error }
  }
  render() {
    if (this.state.error) {
      return (
        <pre className="m-4 whitespace-pre-wrap rounded bg-red-50 p-4 text-sm text-red-700">
          Problem in {this.props.name}: {String(this.state.error.message)}
        </pre>
      )
    }
    return this.props.children
  }
}

export default function App() {
  return (
    <div id="top" className="relative">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-gold2/25 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-gold2/20 blur-3xl" />
      </div>

      <Safe name="Header"><Header /></Safe>
      <main>
        <Safe name="Hero"><Hero /></Safe>
        <Safe name="Collection"><Collection /></Safe>
        <Safe name="Story"><Story /></Safe>
        <Safe name="Steps"><Steps /></Safe>
        <Safe name="Contact"><Contact /></Safe>
      </main>
      <Safe name="Footer"><Footer /></Safe>
      <Safe name="WhatsAppButton"><WhatsAppButton /></Safe>
    </div>
  )
}