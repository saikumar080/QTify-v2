import React,{ useEffect, useState} from "react";
import axios from "axios";
import styles from './section.module.css';
import { Typography } from "@mui/material";
import AlbumCard from "../Cards/Albums/AlbumCard";

const Section=({title, fetchUrl})=>{
    const [albums,setAlbums]=useState([]);
    const[showAll, setShowAll]=useState(false);

    useEffect(()=>{
        const fetchAlbums=async()=>{
            try{
                const response=await axios.get(fetchUrl);
                setAlbums(response.data)
            
            }catch(err){
                console.error("Error fetching albums:", err)
            }
        };
        fetchAlbums();
    }, [fetchUrl]);

    const handleToggle=()=>setShowAll(prev=> !prev);
    
    
    return(
        <div className={styles.section}>
            <div className={styles.header}>
                <Typography variant="h6" className={styles.title}>
                    {title}
                </Typography>
                <Typography variant="text" onClick={handleToggle} sx={{color: "#34C94B", cursor: "pointer", fontWeight: 600, userSelect: "none"}}>
                    {showAll ? 'Collapse': 'Show All'}
                </Typography>
            </div>
            <div className={`${styles.grid} ${showAll ? styles.wrap : styles.scroll}`}>
                {albums.map(album =>(
                    <AlbumCard
                        key={album.id}
                        image={album.image}
                        name={album.name}
                        follows={album.follows}
                    />
                ))}
            </div>
        </div>
    )
}
export default Section;