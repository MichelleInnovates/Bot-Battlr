export const GET_BOTS_SUCCESS = "GET_BOTS_SUCCESS";
export const GET_BOTS_FAILURE = "GET_BOTS_FAILURE";
export const DELETE_BOT = "DELETE_BOT";

export const getBotsSuccess = (bots) => ({
  type: GET_BOTS_SUCCESS,
  payload: bots,
});

export const getBotsFailure = (error) => ({
  type: GET_BOTS_FAILURE,
  payload: error,
});

export const deleteBot = (id) => ({
  type: DELETE_BOT,
  payload: id,
});

export const getBots = () => async (dispatch) => {
  try {
    const response = await fetch("https://api.example.com/bots");
    if (!response.ok) {
      throw new Error("Failed to fetch bots");
    }
    const bots = await response.json();
    dispatch(getBotsSuccess(bots));
  } catch (error) {
    dispatch(getBotsFailure(error.message));
  }
};