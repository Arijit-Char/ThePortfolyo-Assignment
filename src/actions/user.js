import axios from 'axios';

export const getUser = () => async (dispatch) => {

    try {
        dispatch({ type: 'Get_User_Request' });

        const { data } = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');

        dispatch({ type: 'Get_User_Success', payload: data.user });


    } catch (error) {
        dispatch({ type: 'Get_User_Failure', payload: error.response.data.message });

    }

}
