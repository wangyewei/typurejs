import { Component } from '@typure/core'
interface NavbarProps {
  title: string
}
export class NavBar extends Component {
  private readonly props: NavbarProps
  constructor() {
    super()
    this.props = JSON.parse(this.getAttribute('props')!)
  }

  render() {

    return `
    <p align="center">
      <h3 align="center">${this.props.title}</h3>
    </p>
    `
  }
}
