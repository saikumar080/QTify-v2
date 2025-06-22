import React from "react";
import styles from './AlbumCard.module.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
const AlbumCard=({image, name, follows})=>{
    return(
       
        <Card className={styles.card}>
            <CardMedia
                component="img"
                image={image}
                alt={name}
                className={styles.image}
            />
            <CardContent className={styles.cardContent}>
                <Chip
                label={`${follows} Follows`} 
                className={styles.chip}
                size="small"
                />
                <Typography variant="subtitle1" className={styles.albumName}>
                    {name}
                </Typography>
            </CardContent> 
        </Card>
    )
}
export default AlbumCard;