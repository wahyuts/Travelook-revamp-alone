import React,{useEffect} from 'react';
import HomeBanner from '../components/underHome/HomeBanner';
import HomeContent from '../components/underHome/HomeContent';
import HomeContentMobile from '../components/underHome/HomeContentMobile';
import {Desktop,Tablet,Mobile,Default} from '../util/ReactResponsiveHook';

//Redux
import {useDispatch,useSelector} from 'react-redux';
import {getAllDataHotel} from '../redux/actions/dataActions';

const HomePage = () => {
    // const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch(getAllDataHotel());
    // },[])

    // const {dataHotels} = useSelector (state => state.data);


    // const ArrGrouplocationHotel = dataHotels.map((hotels,i)=>{
    //     return(
    //         hotels.location.city
    //     )
    // });

    // const locationHotel = [...new Set(ArrGrouplocationHotel)]

    // console.log('lokasi hotel',locationHotel)

    // console.log('coba liat hotelnya',dataHotels)
    return ( 
        <div style={{position:'relative'}}>
            <HomeBanner/>
            <Desktop>
                <HomeContent/>
            </Desktop>
            <Tablet>
                <HomeContent/>
                {/* <HomeContentMobile/> */}
            </Tablet>
            <Mobile>
                <HomeContentMobile/>
            </Mobile>
        </div>
     );
}
 
export default HomePage;