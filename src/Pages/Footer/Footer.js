import React from 'react'
import {Link as Navigator} from "react-router-dom"
import "./Footer.css"
export default function Footer() {
  return (
    <footer>
        <article className="nombre">
            <Navigator to="/">
                <figure>
                    <h3>GIF<br/>LAND!</h3>
                </figure>
            </Navigator>
        </article>
    </footer>
  )
}
