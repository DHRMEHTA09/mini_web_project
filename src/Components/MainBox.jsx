// import React from "react";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import { Modal } from "react-bootstrap";

// const API_IMG="https://image.tmdb.org/t/p/w500/";
// const MovieBox =({title,poster_path, vote_average, release_date, overview})=>{

//       const [show, setShow]=useState(false);

//     const handleShow=()=>setShow(true);
//     const handleClose=()=>setShow(false);
//     return(
//         <>
        
//         <Card sx={{ maxWidth: 345,height:200 }}>
//       <CardMedia
        
//         sx={{ height: "80%",objectFit: "cover",backgroundPosition:"center" }}
//         image={API_IMG+poster_path}
//         title="green iguana"
//       />
//       <button type="button" className="btn btn-dark" onClick={handleShow} >View More</button>
//                   <Modal show={show} onHide={handleClose}>
//                       <Modal.Header closeButton>
//                         <Modal.Title></Modal.Title>
//                       </Modal.Header>
//                       <Modal.Body>
//                       <img className="card-img-top" style={{width:'14rem'}}src={API_IMG+poster_path} />
//                       <h3>{title}</h3>
//                       <h4>IMDb: {vote_average}</h4>
//                       <h5>Release Date: {release_date}</h5>
//                       <br></br>
//                       <h6>Overview</h6>
//                       <p>{overview}</p>
//                       </Modal.Body>
//                       <Modal.Footer>
//                           <Button variant="secondary" onClick={handleClose}>Close</Button>
//                       </Modal.Footer>
//                   </Modal>
//     </Card>

    

    

            

//         </>
//     );
// }
// export default MovieBox



import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Modal } from "react-bootstrap";

const API_IMG = "https://image.tmdb.org/t/p/w500/";
const MovieBox = ({ title, poster_path, vote_average, release_date, overview }) => {
 const [show, setShow] = useState(false);

 const handleShow = () => setShow(true);
 const handleClose = () => setShow(false);
 return (
    <>
      
      <Card sx={{ maxWidth: 500, height: 240 }}>

      <Card sx={{ maxWidth: 345, height: 200 }}>

        <CardMedia
          sx={{ height: "100%", backgroundImage: `url(${API_IMG + poster_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center center" }}
          image={API_IMG + poster_path}
          title="green iguana"
        />
          
        
      </Card>
      <button type="button" className="btn btn-dark" onClick={handleShow}>
            View More
          </button>
          <Modal show={show} onHide={handleClose}  style={{ maxWidth: '800px',backgroundColor:"teal", alignContent:"center" }}>
        <Modal.Header closeButton></Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        <Modal.Body>
          <img className="card-img-top" style={{ width: "14rem" }} src={API_IMG + poster_path} />
          <p>
          <h5>IMDb: {vote_average}
          <br />
          Release Date: {release_date}</h5>
          <h6>Overview:{overview}</h6>
          </p>
        </Modal.Body>
      </Modal>
      </Card>

      
    </>
 );
};
export default MovieBox;



// import React from "react";
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Skeleton from '@mui/material/Skeleton';

// const API_IMG = "https://image.tmdb.org/t/p/w500/";

// const MovieBox = ({ title, poster_path, vote_average, release_date, loading }) => {
//   return (
//     <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
//       {loading ? (
//         <Skeleton variant="rectangular" width={210} height={118} />
//       ) : (
//         <>
//           <img
//             style={{ width: 210, height: 118 }}
//             alt={title}
//             src={API_IMG + poster_path}
//           />

//           <Box sx={{ pr: 2 }}>
//             <Typography gutterBottom variant="body2">
//               {title}
//             </Typography>
//             <Typography display="block" variant="caption" color="text.secondary">
//               {release_date}
//             </Typography>
//             <Typography variant="caption" color="text.secondary">
//               {`${vote_average} Rating`}
//             </Typography>
//           </Box>
//         </>
//       )}
//     </Box>
//   );
// };

// MovieBox.propTypes = {
//   title: PropTypes.string.isRequired,
//   poster_path: PropTypes.string.isRequired,
//   vote_average: PropTypes.number.isRequired,
//   release_date: PropTypes.string.isRequired,
//   loading: PropTypes.bool,
// };

// export default MovieBox;
