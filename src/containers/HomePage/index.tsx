import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import rootAction from '@/actions';
import { IRootState } from '@/types/GlobalTypes';
import { IHomeState } from '@/types/HomeTypes';

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
      {homeState.title && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">{homeState.title}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
