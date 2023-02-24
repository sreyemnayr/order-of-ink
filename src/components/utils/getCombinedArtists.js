// Artist Images
import hover_1 from '../../images/1_hover.png'
import default_1 from '../../images/1_default.png'
import selected_1 from '../../images/1_selected.png'
import hover_2 from '../../images/2_hover.png'
import default_2 from '../../images/2_default.png'
import selected_2 from '../../images/2_selected.png'
import hover_3 from '../../images/3_hover.png'
import default_3 from '../../images/3_default.png'
import selected_3 from '../../images/3_selected.png'
import hover_4 from '../../images/4_hover.png'
import default_4 from '../../images/4_default.png'
import selected_4 from '../../images/4_selected.png'
import hover_5 from '../../images/5_hover.png'
import default_5 from '../../images/5_default.png'
import selected_5 from '../../images/5_selected.png'
import hover_6 from '../../images/6_hover.png'
import default_6 from '../../images/6_default.png'
import selected_6 from '../../images/6_selected.png'
import hover_7 from '../../images/7_hover.png'
import default_7 from '../../images/7_default.png'
import selected_7 from '../../images/7_selected.png'
import hover_8 from '../../images/8_hover.png'
import default_8 from '../../images/8_default.png'
import selected_8 from '../../images/8_selected.png'
import hover_9 from '../../images/9_hover.png'
import default_9 from '../../images/9_default.png'
import selected_9 from '../../images/9_selected.png'
import hover_10 from '../../images/10_hover.png'
import default_10 from '../../images/10_default.png'
import selected_10 from '../../images/10_selected.png'
import hover_11 from '../../images/11_hover.png'
import default_11 from '../../images/11_default.png'
import selected_11 from '../../images/11_selected.png'
import hover_12 from '../../images/12_hover.png'
import default_12 from '../../images/12_default.png'
import selected_12 from '../../images/12_selected.png'
import hover_13 from '../../images/13_hover.png'
import default_13 from '../../images/13_default.png'
import selected_13 from '../../images/13_selected.png'
import hover_14 from '../../images/14_hover.png'
import default_14 from '../../images/14_default.png'
import selected_14 from '../../images/14_selected.png'

export const getCombinedArtists = () => {
    const Artists = ['AMAIA','ANINHA','ARCHITEX','BRADLEY', 'ESTEBAN','FABIO','FLOR','JOHANNA','KATUSZA','MERRY', 'NEAT ART','SZYMON','VULZ','YAIZA']

    const hover_images = ['hover:bg-artist-hover-1', 'hover:bg-artist-hover-2', 'hover:bg-artist-hover-3', 'hover:bg-artist-hover-4', 'hover:bg-artist-hover-5', 'hover:bg-artist-hover-6', 'hover:bg-artist-hover-7', 'hover:bg-artist-hover-8', 'hover:bg-artist-hover-9', 'hover:bg-artist-hover-10', 'hover:bg-artist-hover-11', 'hover:bg-artist-hover-12', 'hover:bg-artist-hover-13', 'hover:bg-artist-hover-14']
    const selected_images = ['bg-artist-selected-1', 'bg-artist-selected-2', 'bg-artist-selected-3', 'bg-artist-selected-4', 'bg-artist-selected-5', 'bg-artist-selected-6', 'bg-artist-selected-7', 'bg-artist-selected-8', 'bg-artist-selected-9', 'bg-artist-selected-10', 'bg-artist-selected-11', 'bg-artist-selected-12', 'bg-artist-selected-13', 'bg-artist-selected-14']
    const default_images = ['bg-artist-default-1', 'bg-artist-default-2', 'bg-artist-default-3', 'bg-artist-default-4', 'bg-artist-default-5', 'bg-artist-default-6', 'bg-artist-default-7', 'bg-artist-default-8', 'bg-artist-default-9', 'bg-artist-default-10', 'bg-artist-default-11', 'bg-artist-default-12', 'bg-artist-default-13', 'bg-artist-default-14']


    const combinedArtists = Artists.map((artist, index) => ({ name: artist, default_image: default_images[index], hover_image: hover_images[index], selected_image: selected_images[index], id: index }));
    
    // console.log(combinedArtists);
    

    return combinedArtists


}