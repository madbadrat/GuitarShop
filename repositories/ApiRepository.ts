import axios from "axios";
import { API_BASE_URL_ENV } from "@/config";

const API_BASE_URL = API_BASE_URL_ENV;

const handleError = (error) => {
    if (error.response) {
        return "Ошибка на сервере";
    } else if (error.request) {
        return "Ошибка сети";
    } else {
        return "Неизвестная ошибка";
    }
}

export const sendOtp = async (phoneNumber) => {
    if (!/^\d{10}$/.test(phoneNumber)) {
        throw new Error("Некорректный номер телефона");
    }
    try {
        const response = await axios.post(`${API_BASE_URL}/user/otp`, { phoneNumber });
        return response;
    } catch (error) {
        throw new Error(handleError(error));
    }
};

export const verifyOtp = async (phoneNumber, otpCode) => {
    if (!/^\d{10}$/.test(phoneNumber)) {
        throw new Error("Некорректный номер телефона");
    }
    if (!/^\d{3}$/.test(otpCode)) {
        throw new Error("Некорректный OTP-код");
    }
    try {
        const response = await axios.post(`${API_BASE_URL}/user/verify-otp`, {
            phoneNumber,
            otpCode,
        });
        return response;
    } catch (error) {
        throw new Error(handleError(error));
    }
};
