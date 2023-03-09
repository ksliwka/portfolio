import classes from './Circle.module.css'

function Circle({ radius}){

   

    return <svg width={radius} height={radius}>
        <defs>
    <linearGradient id="myGradient" x1="1" x2="0" y1="0" y2="1">
      <stop offset="8%" stop-color="#eee2df" />
      <stop offset="100%" stop-color="#e86b61" />
    </linearGradient>
  </defs>
         
    <circle
      cx="50%"
      cy="50%"
      r="30%" 
      className="circle"
      fill='url(#myGradient)'
    />
  </svg>

}

export default Circle