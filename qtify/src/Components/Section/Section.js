import React,{ useEffect, useState} from "react";
import axios from "axios";
import styles from './section.module.css';
import { Typography } from "@mui/material";
import AlbumCard from "../Cards/Albums/AlbumCard";
import Carousel from "../Carousel/Carousel";

const Section=({title, fetchUrl})=>{
    const [albums,setAlbums]=useState([]);
    const[showAll, setShowAll]=useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchAlbums=async()=>{
            try{
                const response=await axios.get(fetchUrl);
                setAlbums(response.data)
            
            }catch(err){
                console.error("Error fetching albums:", err)
            }finally{
                setLoading(false);
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
                <Typography variant="subtitle2" onClick={handleToggle} sx={{color: "#34C94B", cursor: "pointer", fontWeight: 600, userSelect: "none"}}>
                    {showAll ? 'Collapse': 'Show All'}
                </Typography>
            </div>
            {loading ?(
                <Typography variant="body1" className={styles.loading}>
                    Loading albums...
                </Typography>
            ): showAll ?(
                  <div className={`${styles.grid} ${showAll ? styles.wrap : styles.scroll}`}>
              {albums.map(album =>(
                    <AlbumCard
                        key={album.id}
                        image={album.image}
                        name={album.title}
                        follows={album.follows} // Spread the album object to pass all properties
                    />
                    ))}
            </div>
            ):(
                <div className={styles.carouselWrapper}>
                    <Carousel
                        data={albums}
                        renderItem={(album) => (
                            <AlbumCard
                                key={album.id}
                                image={album.image}
                                name={album.title}
                                follows={album.follows} // Spread the album object to pass all properties
                            />
                        )}
                        breakpoints={{
                            320:{slidesPerView: 2},
                            640:{slidesPerView: 3},
                            768:{slidesPerView: 4},
                            1024:{slidesPerView: 5},
                            1280:{slidesPerView: 6},
                        }}
                    />
                </div>
            )}
          
        </div>
    )
}
export default Section;