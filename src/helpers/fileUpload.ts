import axios from 'axios';
export const fileUpload = async (file: any, path: string) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dpdkjun0n/upload';

    const formData = new FormData();

    formData.append('upload_preset', `upload-${path}`)
    formData.append('file', file)

    try {
        const res = await axios.post(cloudUrl, formData)

        return res.data.secure_url
    } catch (error) {
        throw error;
    }
}