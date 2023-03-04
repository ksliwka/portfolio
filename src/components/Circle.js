import classes from './Circle.module.css'

function Circle({ radius}){

    const size = radius * 2

    return <svg width={size} height={size}>
        <defs>
    <linearGradient id="myGradient">
      <stop offset="0%" stop-color="#FFC107" />
      <stop offset="100%" stop-color="#FF5722" />
    </linearGradient>
  </defs>
         
    <circle
      cx="50%"
      cy="50%"
      r={radius}
      fill="url(#myGradient)" 
      className="circle"
    />
  </svg>

}

export default Circle