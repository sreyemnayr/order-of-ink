// Artist Images
import ArtistOne from '../../images/ArtistOne.png'
import ArtistTwo from '../../images/ArtistTwo.png'
import ArtistThree from '../../images/ArtistThree.png'
import ArtistFour from '../../images/ArtistFour.png'
import ArtistFive from '../../images/ArtistFive.png'
import ArtistSix from '../../images/ArtistSix.png'
import ArtistSeven from '../../images/ArtistSeven.png'
import ArtistEight from '../../images/ArtistEight.png'
import ArtistNine from '../../images/ArtistNine.png'
import ArtistTen from '../../images/ArtistTen.png'
import ArtistEleven from '../../images/ArtistEleven.png'
import ArtistTwelve from '../../images/ArtistTwelve.png'
import ArtistThirteen from '../../images/ArtistThirteen.png'
import ArtistFourteen from '../../images/ArtistFourteen.png'

export const getCombinedArtists = () => {
    const Artists = ['AMAIA','ANINHA','ARCHITEX','BRADLEY',
    'ESTEBAN','FABIO','FLOR','JOHANNA','KATUSZA','MERRY',
    'NEAT ART','SZYMON','VULZ','YAIZA']

    const ArtistImages = [ArtistOne, ArtistTwo, ArtistThree, ArtistFour, ArtistFive, 
        ArtistSix, ArtistSeven, ArtistEight, ArtistNine, ArtistTen, ArtistEleven, 
        ArtistTwelve, ArtistThirteen, ArtistFourteen]

    console.log(ArtistImages)


    const combinedArtists = Artists.map((artist, index) => ({ name: artist, image: ArtistImages[index], id: index }));
    console.log(Artists)

    return combinedArtists


}