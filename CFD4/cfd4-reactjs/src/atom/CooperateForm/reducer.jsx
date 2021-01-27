export default function Reducer(state, action) {
  switch (action.type) {
    case "GET_FORMDATA":
      console.log(state);
      return { ...state, data: action.data };
    case "SUBMIT":
      const data = action.data;
      const error = action.data;
      if (data.name === "") {
        error.name = "Họ và tên không được để trống";
      } else {
        error.name = "";
      }

      //phone
      if (data.phone === "") {
        error.phone = "Số điện thoại không được để trống";
      } else if (!/(0[3|5|7|8|9])+([0-9]{8})\b/.test(data.phone)) {
        error.phone = "Vui lòng điền đúng định dạng số điện thoại";
      } else {
        error.phone = "";
      }

      //email
      if (data.email === "") {
        error.email = "Email không được để trống";
      } else if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[gmail]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          data.email
        )
      ) {
        error.email = "Vui lòng điền đúng định dạng gmail";
      } else {
        error.email = "";
      }

      //website
      if (data.website === "") {
        error.website = "Website không được để trống";
      } else if (
        !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(
          data.website
        )
      ) {
        error.website = "Vui lòng điền đúng định dạng link website";
      }

      //alert
      console.log(state);
      return { ...state, error };

    default:
      break;
  }

  return state;
}
