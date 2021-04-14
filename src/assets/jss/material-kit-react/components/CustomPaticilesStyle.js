const CustomParticilesStyle = {
  customParticiles: {
    height: "100%",
    width:"100%",
    
    position: "absolute",
    backgroundPosition: "top top",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",


  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after,&:before": {

      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "1000p"
  }
  
}
export default CustomParticilesStyle