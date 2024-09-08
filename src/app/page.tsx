"use client"
import { useState } from 'react';

interface ResumeData {
  name: string;
  email: string;
  phone: string;
  nationality: string;
  religion: string;
  education: string;
  skills: string[]; // Explicitly setting skills as an array of strings
  experience: string;
}

const Resume = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    name: '',
    email: '',
    phone: '',
    nationality: '',
    religion: '',
    education: '',
    skills: [], // Initialize as an empty string array
    experience: '',
  });
  const [newSkill, setNewSkill] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setResumeData({
      ...resumeData,
      [name]: value,
    });
  };

  const handleSkillAdd = () => {
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, newSkill], // Now TypeScript knows this is a string array
    });
    setNewSkill('');
  };
  return (
    <div className="bg-blue-300">
      <div className="max-w-4xl mx-auto p-6 bg-black shadow-lg rounded-lg">

        <div>
          {/* Form to input resume data */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">
              <span className='border-b-4 border-red-600'>Personal Information</span>
            </h2>

            {/* Input field group with label */}
            <div className="flex justify-between space-x-2 items-center mb-2">
              <label className="p-1 text-xl w-28 text-center rounded-2xl bg-white text-black">Name:</label>
              <input
                type="text"
                required
                name="name"
                value={resumeData.name}
                onChange={handleInputChange}
                className="p-1 rounded-3xl w-36"
              />
            </div>

            <div className="flex space-x-2 items-center mb-2 justify-between">
              <label className="p-1 text-xl w-28 text-center rounded-2xl bg-white text-black">Email:</label>
              <input
                type="email"
                name="email"
                value={resumeData.email}
                onChange={handleInputChange}
                className="p-1 rounded-3xl w-36"
              />
            </div>

            <div className="flex justify-between items-center mb-2 space-x-2">
              <label className="p-1 text-xl w-28 text-center rounded-2xl bg-white text-black">Phone:</label>
              <input
                type="text"
                name="phone"
                value={resumeData.phone}
                onChange={handleInputChange}
                className="p-1 rounded-3xl w-36"
              />
            </div>

            <div className="flex items-center mb-2 justify-between space-x-2">
              <label className="p-1 text-xl w-28 text-center rounded-2xl bg-white text-black">Nationality:</label>
              <input
                type="text"
                name="nationality"
                value={resumeData.nationality}
                onChange={handleInputChange}
                className="p-1 rounded-3xl w-36"
              />
            </div>

            <div className="flex items-center mb-2 justify-between space-x-2">
              <label className="p-1 text-xl w-28 text-center rounded-2xl bg-white text-black">Religion:</label>
              <input
                type="text"
                name="religion"
                value={resumeData.religion}
                onChange={handleInputChange}
                className="p-1 rounded-3xl w-36"
              />
            </div>

          </div>

          <div className="mb-4 mt-10">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
              <span className='border-b-4 border-red-600'>Education</span>
            </h2>
            <div className="flex items-center justify-between space-x-2 mb-2">
              <label className="p-1 text-xl w-28 text-center rounded-2xl bg-white text-black">Education:</label>
              <input
                type="text"
                name="education"
                value={resumeData.education}
                onChange={handleInputChange}
                className="p-1 rounded-3xl w-36"
              />
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-center text-2xl font-bold text-blue-800 mb-4">
              <span className='border-b-4 border-red-600'>Skills</span>
            </h2>
            <div className="flex items-center justify-between space-x-2 mb-2">

             
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add Skill"
                className="p-1 rounded-3xl w-36"
              />
               <button
                className="p-1 text-xl w-28 text-center rounded-2xl bg-blue-500 text-black "
                onClick={handleSkillAdd}
              >
                Add Skill
              </button>
            </div>
            <ul className=" flex ">
              {resumeData.skills.map((skill, index) => (
                <li key={index} className='px-4 max-w-20 py-2 flex flex-row'>
                  <span className="text-white bg-red-700 flex flex-row rounded-lg px-4  py-1">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
              <span className='border-b-4 border-red-600'>Work Experience</span>
            </h2>
            <div className="flex items-center justify-between space-x-2 mb-2">
              <label className="p-1  w-28 text-center rounded-2xl bg-white text-black">
                Experience:
              </label>
              <textarea
                name="experience"
                value={resumeData.experience}
                onChange={handleInputChange}
                className=" rounded-3xl h-8 w-36"
              />
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <button className="text-2xl hover:bg-red-500 text-white flex justify-center border-4 p-1 bg-red-500 rounded-xl">
              Create resume
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6 bg-black shadow-lg rounded-lg mt-6">
        {/* Display the resume data */}
        <section className="mb-6">
          <h2 className="text-2xl text-blue-800 font-bold border-b-2 border-blue-500 pb-2 mb-4">
            Personal Information
          </h2>
          <div className="text-white">
            <p>Name: {resumeData.name}</p>
            <p>Email: {resumeData.email}</p>
            <p>Phone: {resumeData.phone}</p>
            <p>Nationality: {resumeData.nationality}</p>
            <p>Religion: {resumeData.religion}</p>

          </div>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 text-blue-800">
            Education
          </h2>
          <p className="text-white">{resumeData.education}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 text-blue-800 mb-4">
            Skills
          </h2>
          <ul className="text-white">
            {resumeData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-4 text-blue-900">
            Work Experience
          </h2>
          <p className="text-white">{resumeData.experience}</p>
        </section>
      </div>
    </div>
  );
};

export default Resume;
