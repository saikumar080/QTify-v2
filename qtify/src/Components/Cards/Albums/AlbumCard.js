import React from "react";
import styles from './AlbumCard.module.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
const AlbumCard=({image, name, follows})=>{
    return(
       <div className={styles.wrapper}>
        <Card className={styles.card} elevation={2}>
            <CardMedia
                component="img"
                image={image}
                alt={name}
                className={styles.image}
            />
                <Chip
                label={`${follows} Follows`} 
                className={styles.chip}
                size="small"
                 sx={{ position:'absolute',bottom:8, left:8, backgroundColor: '#000000', color: '#FFFFFF', fontSize:'0.7rem',padding:'0 6px', borderRadius:'4px',fontWeight:500}}
                />
            </Card>    
            <Typography variant="subtitle1" className={styles.albumName}>
                {name}
            </Typography>
         
        </div> 
        
    )
}
export default AlbumCard;