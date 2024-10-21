import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourseStart, addCourseSuccess, addCourseFailure } from '../../redux/newCourse/coursesSlice';
import { storage, db } from '../../fireBase/fireStore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

import './AddCourse.css';

const AddCourse: FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFile: React.Dispatch<React.SetStateAction<File | null>>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const uploadFile = (file: File, path: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, path);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        }
      );
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !price || !image || !video) {
      alert('Each field must be filled!');
      return;
    }

    setIsLoading(true);
    dispatch(addCourseStart());

    try {
      const [imageURL, videoURL] = await Promise.all([
        uploadFile(image, `courses/images/${image.name}`),
        uploadFile(video, `courses/videos/${video.name}`)
      ]);

      const courseData = {
        title,
        description,
        price,
        image: imageURL,
        video: videoURL,
        createdAt: new Date(),
      };

      await addDoc(collection(db, 'courses'), courseData);

      setTitle('');
      setDescription('');
      setPrice('');
      setImage(null);
      setVideo(null);

      dispatch(addCourseSuccess(courseData));
      alert('Course added successfully!');
    } catch (error) {
      console.error('Error adding course:', error);
      dispatch(addCourseFailure());
      alert('Failed to add the course.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='addcourse-container'>
      
      <div className='add-course-cute-star'></div>
      <form className='add-course-form' onSubmit={handleSubmit}>
        <div className='add-course-input-box'>
          <label className='addcourse-label'>Course name:</label>
          <input
            className='addcourse-input'
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required />
        </div>

        <div className='add-course-input-box'>
          <label className='addcourse-label'>Description:</label>
          <textarea
            className='addcourse-input'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required />
        </div>

        <div className='add-course-input-box'>
          <label className='addcourse-label'>Price:</label>
          <input
            className='addcourse-input'
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required />
        </div>

        <div className='add-course-input-box'>
          <label className='addcourse-label'>Thumbnail:</label>
          <input
            className='addcourse-input-file' 
            type="file" 
            accept="image/*" 
            onChange={(e) => handleFileChange(e, setImage)} 
            required />
        </div>

        <div className='add-course-input-box'>
          <label className='addcourse-label'>Video:</label>
          <input 
            className='addcourse-input-file' 
            type="file" 
            accept="video/*" 
            onChange={(e) => handleFileChange(e, setVideo)} 
            required />
        </div>

        <button className='addcourse-btn' type="submit" disabled={isLoading}>
          {isLoading ? 'Adding course...' : 'Add course'}
        </button>
      </form>
    </div>
  );
};

export default AddCourse;