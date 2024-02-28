import React from 'react'
import SearchContainer from './SearchContainer'
import AllBaners from './AllBaners'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Backdrop } from '@mui/material';
import AddBanner from './AddBanner';
import { disableAddBannerComponentShow } from '@/redux/AddBannerComponentShow';

const BannerPageContainer = () => {

  const { addBannerCompanentShowState } = useSelector(
    (state: RootState) => state.AddBannerComponentShow
  );

  const dispatch = useDispatch()

  return (
    <div
    className='w-full flex flex-col gap-[30px]'>

        <p
        className='text-[36px] font-bold'>
            Banners
        </p>

        <SearchContainer />

        <AllBaners />

        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={addBannerCompanentShowState}>
<AddBanner />
        </Backdrop>

    </div>
  )
}

export default BannerPageContainer