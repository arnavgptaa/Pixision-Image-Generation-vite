import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField , Loader } from '../components';
const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name:'',
    prompt:'',
    photo:'',
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false); 

  const generateImage = () => {

  }
  
  const handleSubmit = () => {

  }

  const handleChange = (e) => {
    //To make the text fields editable
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({...form, prompt: randomPrompt})
  }

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">Create imaginative and magnificent images through DALL-E AI and showcase them to the community.</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-16 max-w-3xl">
        <div className="flex flex-col gap-5 ">
          <FormField 
            labelName = "Your Name"
            type = "text"
            name = "name"
            placeholder = "John Doe"
            value = {form.name}
            handleChange = {handleChange}
          />
          <FormField 
            labelName = "Your prompt"
            type = "text"
            name = "prompt"
            placeholder = "A bear made of chocolate bars"
            value = {form.prompt}
            handleChange = {handleChange}
            isSurpriseMe
            handleSurpriseMe = {handleSurpriseMe}
          />

          {/* picture box */}
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 h-64 p-3 flex justify-center items-center ">
            
            {/* Placeholder for picture box */}
            {form.photo ? (

              <img src={form.photo} alt={form.prompt}  className="w-full h-full object-contain"/>

            ) : (

              <img src={preview} alt="preview" className="w-9/12 h-9/12 object-contain opacity-40" />
            )}

            {/* If image is getting generated */}
            {generatingImg && ( 

            <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
              <Loader />
            </div>

            )}
          </div>
        </div>
        
        {/* Generate Button */}
        <div className="mt-5 flex gap-5">
          <button 
            type="button" 
            onClick={generateImage} 
            className="text-white bg-[#136665] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            {generatingImg ? "Generating..." : "Generate"}
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">
            You can also share the image after generating in the community forum...
          </p>

          <button 
            type="submit"
            className="mt-3 text-white bg-[#ed771d] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
          {loading ? 'Sharing...' : 'Share with the community'}
          </button>
        </div>
      </form>

    </section>
  )
}

export default CreatePost