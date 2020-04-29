import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h2>www.vir-za.com</h2>
                            <h3>+8801795815660</h3>
                            <div className="footer-menu">
                                <ul>
                                    <li><a href="/">Facebook</a></li>
                                    <li><a href="/">Twitter</a></li>
                                    <li><a href="/">Instagram</a></li>
                                    <li><a href="/">Linkedin</a></li>
                                </ul>
                            </div>
                            <div className="copyright-text">Lorem ipsum dolor sit.</div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
