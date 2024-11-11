import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  DELETE_TASK_API_URL,
  GET_TASKS_API_URL,
  POST_TASK_API_URL,
} from "../../utils/apiUrl";
import {
  deleteRequest,
  getRequest,
  postRequest,
} from "../../utils/requestMethods";

const getItemsFetchThunk = (actionType, apiURL) => {
  return createAsyncThunk(actionType, async (userId) => {
    // console.log(apiURL, userId);
    // return await getRequest(apiURL);
    const fullPath = `${apiURL}/${userId}`;
    return await getRequest(fullPath);
  });
};

// get_items data
export const fetchGetItemsData = getItemsFetchThunk(
  "fetchGetItems", // action type
  GET_TASKS_API_URL // 요청 url
); // thunk 함수 호출

const deleteItemFetchThunk = (actionType, apiURL) => {
  return createAsyncThunk(actionType, async (id) => {
    // console.log(apiURL, id);
    const options = {
      method: "DELETE",
    };
    const fullPath = `${apiURL}/${id}`;
    return await deleteRequest(fullPath, options);
  });
};

// delete_item
export const fetchDeleteItemData = deleteItemFetchThunk(
  "fetchDeleteItem",
  DELETE_TASK_API_URL
);

// post thunk function 정의
const postItemFetchThunk = (actionType, apiURL) => {
  return createAsyncThunk(actionType, async (postData) => {
    // console.log(postData);
    const options = {
      body: JSON.stringify(postData), // 표준 json 문자열로 변환
    };
    return await postRequest(apiURL, options);
  });
};

// post_item
export const fetchPostItemData = postItemFetchThunk(
  "fetchPostItem",
  POST_TASK_API_URL
);

// handleFulfilled 함수 정의 : 요청 성공시 상태 업데이트 로직을 별도의 함수로 정의
const handleFulfilled = (stateKey) => (state, action) => {
  state[stateKey] = action.payload; // action.payload에 응답 데이터가 들어있음
};

// handleRejected 함수 정의 : 요청 실패시 상태 업데이트 로직을 별도의 함수로 정의
const handleRejected = (state, action) => {
  console.log("Error", action.payload);
  state.isError = true;
};

// create slice
const apiSlice = createSlice({
  name: "apis", // slice 기능 이름
  initialState: {
    // 초기 상태 지정
    getItemsData: null,
    deleteItemData: null,
    postItemData: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetItemsData.fulfilled, handleFulfilled("getItemsData")) //요청 성공시
      .addCase(fetchGetItemsData.rejected, handleRejected) // 요청 실패시

      .addCase(fetchDeleteItemData.fulfilled, handleFulfilled("deleteItemData"))
      .addCase(fetchDeleteItemData.rejected, handleRejected)

      .addCase(fetchPostItemData.fulfilled, handleFulfilled("postItemData"))
      .addCase(fetchPostItemData.rejected, handleRejected);
  },
}); // slice 객체 저장

export default apiSlice.reducer;
