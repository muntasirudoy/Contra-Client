


function SampleNextArrow(props) {

  const {onClick } = props;
    return (
     
        <div style={{backgroundL:"red"}}>
             <i style={{color:"white",fontSize:"26px",cursor:"pointer",position:"absolute", top:"50%",right:"00px",transform:"translateY(-50%)",
              padding:"10px 15px",border:"1px solid #fff",opacity:"0.5",zIndex:"111111" }} class="fas fa-chevron-right" onClick={onClick}  ></i> 
        </div>



    );
  }

  export default SampleNextArrow