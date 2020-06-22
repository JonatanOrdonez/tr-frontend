import Axios from "axios";

export const fetchDomain = async domain => {
  try {
    const response = await Axios.get(
      `http://localhost:4000/api/v1/analyze?host=${domain}`
    );
    return response.data;
  } catch (error) {
    const { code, message } = error.response.data;
    throw new MainException(code, message);
  }
};

export const fetchDomains = async () => {
  try {
    const response = await Axios.get(
      `http://localhost:4000/api/v1/analyze`
    );
    return response.data;
  } catch (error) {
    const { code, message } = error.response.data;
    throw new MainException(code, message);
  }
};

function MainException(code, message) {
  this.code = code;
  this.message = message;
}
