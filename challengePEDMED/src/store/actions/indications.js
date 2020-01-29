import {pedMedApi} from '../../services/api';
import {GET_DATA, ERROR} from '../types';

export const getData = () => dispatch => {
  pedMedApi(
    sucess => {
      console.log('SUCESS-----', sucess);
      const {data} = sucess;
      if (data) {
        let res = data.reduce((group, element) => {
          let existObj = group.find(
            section => section.title === element.category.name.toUpperCase(),
          );
          if (existObj) {
            existObj.data.push(element.content);
          } else {
            group.push({
              title: element.category.name.toUpperCase(),
              data: [element.content],
            });
          }
          return group;
        }, []);

        dispatch({
          type: GET_DATA,
          payload: res,
        });
      }
    },
    error => {
      console.log('ERROR-----', error);
      dispatch({
        type: ERROR,
      });
    },
  );
};
