function SamplePrevArrow(props) {
    const {onClick } = props;

    return (
     
        <div >
      <i style={{color:"white",fontSize:"26px",cursor:"pointer",position:"absolute",left:"00px",top:"50%",zIndex:"1111",transform:"translateY(-50%)",
              padding:"10px 15px",border:"1px solid #fff",opacity:"0.5"}} class="fas fa-chevron-left" onClick={onClick}></i>
   </div>



    );
  }

  export default SamplePrevArrow