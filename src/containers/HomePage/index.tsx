import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import rootAction from '@/actions';
import { IRootState } from '@/types/GlobalTypes';
import { IHomeState } from '@/types/HomeTypes';
import { HomePageContainer } from './style';

const HomePage: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const homeState: IHomeState = useSelector((state: IRootState) => state.home);
  useEffect(() => {
    dispatch(rootAction.homeActions.fetchTitle.request());
  }, []);
  return (
    <>
      {homeState.isLoading && <>Loading...</>}
      {homeState.hasError && <>error...</>}
      {homeState.title && <HomePageContainer>{homeState.title}</HomePageContainer>}
    </>
  );
};

export default HomePage;
