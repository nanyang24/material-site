import React, { useState } from 'react'
import { navigate } from "@reach/router";
import { useSpring, animated as a } from 'react-spring'
import './barCard.scss'

function Card(props) {
  console.log(props)

  const [flipped, set] = useState(false)

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  const handleClick = () => {
    set(state => !state)

    navigate(props.path);
  }

  return (
    <div style={{
        height: '50px',
        width: '100px',
    }} onClick={handleClick}>
      <a.div className={`c back ${props.type}`} style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
      <a.div className={`c front ${props.type}`} style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
    </div>
  )
}

export default Card;