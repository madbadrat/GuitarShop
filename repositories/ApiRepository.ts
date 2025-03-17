import axios from "axios";

const API_BASE_URL = 'http://192.168.0.100:8080';

export const sendOtp = async (phoneNumber) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/user/otp`, { phoneNumber });
        return response;
    } catch (error) {
        throw error;
    }
};

export const verifyOtp = async (phoneNumber, otpCode) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/user/verify-otp`, {
            phoneNumber,
            otpCode,
        });
        return response;
    } catch (error) {
        throw error;
    }
};
