import { useState } from 'react';
import ShowDisplay from './show';
import Intro from './intro';
import './resume.css';

export default function Resume() {
    const [form, setForm] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        aboutme: '',
        experience: [],
        education: [],
        skills1: '',
        skills2: '',
        skills3: '',
        skills4: '',
        skills5: '',
    }); 
    const [isSubmit, setIsSubmit] = useState(false);
    const [active, setActive] = useState('person');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value});
    };

    const handleAddExp = () => {
        setForm({
            ...form,
            experience: [...form.experience, { role: '', company: '', xpStart: '', xpEnd: '', xpDescrip: '' }],
        });
    };

    const handleAddEduc = () => {
        setForm({
            ...form,
            education: [...form.education, { formation: '', school: '', eduStart: '', eduEnd: '' }],
        });
    };

    const handleSkills = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value});
    };

    const handleSubmit = () => {
        console.log(form);
        setIsSubmit(true);
    }

    const delXp = (index) => {
        setForm({
            ...form,
            experience: form.experience.filter((_, i) => i !== index)
        });
    };

    const delEdu = (index) => {
        setForm({
            ...form,
            education: form.education.filter((_, i) => i !== index)
        });
    };

    const resetBtn = () => {
        setForm({...form, 
            name: '',
            address: '',
            email: '',
            phone: '',
            aboutme: '',
            experience: [],
            education: [],
            skills1: '',
            skills2: '',
            skills3: '',
            skills4: '',
            skills5: '',
        })
    }

    return (
        <div className='container'>
            <div className='blockForm'>
                <nav className='buttonsApp'>
                    <button className='btnSvg' onClick={() => setActive('person')}>
                        <img src="./src/assets/personal.svg" alt="personal button" title='Personal' />
                    </button>
                    <button className='btnSvg' onClick={() => setActive('xperience')}>
                        <img src="./src/assets/xperience.svg" alt="experience button" title='Experience'/>
                    </button>
                    <button className='btnSvg' onClick={() => setActive('education')}>
                        <img src="./src/assets/educ.svg" alt="education button" title='Education'/>
                    </button>
                    <button className='btnSvg' onClick={() => setActive('skills')}>
                        <img src="./src/assets/skills.svg" alt="skills button" title='Skills'/>
                    </button>
                </nav>
                <div className='cards'>
                    {active === 'person' && 
                        <div className='personal'>
                            <h3>Basic Information</h3>
                            <div className='personalInput'>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id='name' name='name' size={45} value={form.name} onChange={handleChange} required/>
                            </div>
                            <div className='personalInput'>
                                <label htmlFor="email">Address: </label>
                                <input type="text" id='address' name='address' size={45} value={form.address} onChange={handleChange} required/>
                            </div>
                            <div className='personalInput'>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id='email' name='email' size={45} value={form.email} onChange={handleChange} required/>
                            </div>
                            <div className='personalInput'>
                                <label htmlFor="phone">Phone:</label>
                                <input type="text" id='phone' name='phone' size={45} value={form.phone} onChange={handleChange} required/>
                            </div>
                            <div className='personalText'>
                                <textarea type="text" id='aboutme' name='aboutme' 
                                    placeholder='Tell me about yourself...'
                                    rows={5} cols={30} 
                                    value={form.aboutme} onChange={handleChange}
                                >
                                </textarea>
                            </div>
                        </div>
                    }
                    {active === 'xperience' && 
                        <div className='xperience'>
                            <h3>Experiences</h3>
                            {form.experience.map((exp, index) => (
                                <div className='xpCard' key={index}>
                                    <div className='xpInput'>
                                        <label htmlFor={`experience[${index}].role`}>Role:</label>
                                        <input 
                                        type="text"
                                        id={`experience[${index}].role`}
                                        size={45}
                                        name={`experience[${index}].role`}
                                        value={exp.role}
                                        onChange={(e) => {
                                            const newExp = [...form.experience];
                                            newExp[index].role = e.target.value;
                                            setForm({ ...form, experience: newExp });
                                        }}
                                        required
                                        />
                                    </div>
                                    <div className="xpInput">
                                        <label htmlFor={`experience[${index}].company`}>Company:</label>
                                        <input 
                                            type="text"
                                            id={`experience[${index}].company`}
                                            size={45}
                                            name={`experience[${index}].company`}
                                            value={exp.company}
                                            onChange={(e) => {
                                                const newExp = [...form.experience];
                                                newExp[index].company = e.target.value;
                                                setForm({ ...form, experience: newExp });
                                            }}
                                            required
                                        />
                                    </div>
                                    <div className="xpInput">
                                        <label htmlFor={`experience[${index}].xpStart`}>Start:</label>
                                        <input 
                                            type="text"
                                            id={`experience[${index}].xpStart`}
                                            size={45}
                                            name={`experience[${index}].xpStart`}
                                            value={exp.xpStart}
                                            onChange={(e) => {
                                                const newExp = [...form.experience];
                                                newExp[index].xpStart = e.target.value;
                                                setForm({ ...form, experience: newExp });
                                            }}
                                            required
                                        />
                                    </div>
                                    <div className="xpInput">
                                        <label htmlFor={`experience[${index}].xpEnd`}>End:</label>
                                        <input 
                                            type="text"
                                            id={`experience[${index}].xpEnd`}
                                            size={45}
                                            name={`experience[${index}].xpEnd`}
                                            value={exp.xpEnd}
                                            onChange={(e) => {
                                                const newExp = [...form.experience];
                                                newExp[index].xpEnd = e.target.value;
                                                setForm({ ...form, experience: newExp });
                                            }}
                                            required
                                        />
                                    </div>
                                    <div className='xpText'>
                                        <textarea type="text" id='xpDescrip' name='xpDescrip' 
                                            placeholder='Brief description of the role...' 
                                            rows={5} cols={30} value={exp.xpDescrip} 
                                            onChange={(e) => {
                                                const newExp = [...form.experience];
                                                newExp[index].xpDescrip = e.target.value;
                                                setForm({ ...form, experience: newExp });
                                            }}
                                        >
                                        </textarea>
                                    </div>
                                    <button className='dltButton' onClick={() => delXp(index)} title='Delete Field'>x</button>
                                </div>
                            ))}
                            <button className='xpButton' onClick={handleAddExp}>+ Experience</button>
                        </div>
                    }
                    {active === 'education' && 
                        <div className='education'>
                            <h3>Education</h3>
                            {form.education.map((edu, index) => (
                                <div className='eduCard' key={index}>
                                    <div className='eduInput'>
                                        <label htmlFor={`education[${index}].formation`}>Formation:</label>
                                        <input 
                                        type="text"
                                        id={`education[${index}].formation`}
                                        size={45}
                                        name={`education[${index}].formation`}
                                        value={edu.formation}
                                        onChange={(e) => {
                                            const newEdu = [...form.education];
                                            newEdu[index].formation = e.target.value;
                                            setForm({ ...form, education: newEdu });
                                        }}
                                        required
                                        />
                                    </div>
                                    <div className="eduInput">
                                        <label htmlFor={`education[${index}].school`}>School:</label>
                                        <input 
                                            type="text"
                                            id={`education[${index}].school`}
                                            size={45}
                                            name={`education[${index}].school`}
                                            value={edu.school}
                                            onChange={(e) => {
                                                const newEdu = [...form.education];
                                                newEdu[index].school = e.target.value;
                                                setForm({ ...form, education: newEdu });
                                            }}
                                            required
                                        />
                                    </div>
                                    <div className="eduInput">
                                        <label htmlFor={`education[${index}].eduStart`}>Start:</label>
                                        <input 
                                            type="text"
                                            id={`education[${index}].eduStart`}
                                            size={45}
                                            name={`education[${index}].eduStart`}
                                            value={edu.eduStart}
                                            onChange={(e) => {
                                                const newEdu = [...form.education];
                                                newEdu[index].eduStart = e.target.value;
                                                setForm({ ...form, education: newEdu });
                                            }}
                                            required
                                        />
                                    </div>
                                    <div className="eduInput">
                                        <label htmlFor={`education[${index}].eduEnd`}>End:</label>
                                        <input 
                                            type="text"
                                            id={`education[${index}].eduEnd`}
                                            size={45}
                                            name={`education[${index}].eduEnd`}
                                            value={edu.eduEnd}
                                            onChange={(e) => {
                                                const newEdu = [...form.education];
                                                newEdu[index].eduEnd = e.target.value;
                                                setForm({ ...form, education: newEdu });
                                            }}
                                            required
                                        />
                                    </div>
                                    <div className='eduText'>
                                        <textarea type="text" id='eduDescrip' name='eduDescrip' 
                                            placeholder='Brief description of your education...' 
                                            rows={5} cols={30} value={edu.eduDescrip} 
                                            onChange={(e) => {
                                                const newEdu = [...form.education];
                                                newEdu[index].eduDescrip = e.target.value;
                                                setForm({ ...form, education: newEdu });
                                            }}
                                        >
                                        </textarea>
                                    </div>
                                    <button className='dltButton' onClick={() => delEdu(index)} title='Delete Field'>x</button>
                                </div>
                            ))}
                            <button className='eduButton' onClick={handleAddEduc}>+ Education</button>
                        </div>
                    }
                    {active === 'skills' && 
                        <div className='skillsAdd'>
                            <h3>Main Skills</h3>
                            <div className='skillsInput'>
                                <label htmlFor="name">Skills:</label>
                                <input type="text" id='skills1' name='skills1' size={45} value={form.skills1} onChange={handleSkills}/>
                            </div>
                            <div className='skillsInput'>
                                <label htmlFor="name">Skills:</label>
                                <input type="text" id='skills2' name='skills2' size={45} value={form.skills2} onChange={handleSkills}/>
                            </div>
                            <div className='skillsInput'>
                                <label htmlFor="name">Skills:</label>
                                <input type="text" id='skills3' name='skills3' size={45} value={form.skills3} onChange={handleSkills}/>
                            </div>
                            <div className='skillsInput'>
                                <label htmlFor="name">Skills:</label>
                                <input type="text" id='skills4' name='skills4' size={45} value={form.skills4} onChange={handleSkills}/>
                            </div>
                            <div className='skillsInput'>
                                <label htmlFor="name">Skills:</label>
                                <input type="text" id='skills5' name='skills5' size={45} value={form.skills5} onChange={handleSkills}/>
                            </div>
                        </div>
                    }
                </div>
                <div className='controlBtn'>
                    <button className='submitBtn' onClick={handleSubmit}>Submit</button>
                    <button className='resetBtn' onClick={resetBtn}>Reset</button>
                </div>
            </div>
            <div className="blockShow">
                {isSubmit ? (
                    <ShowDisplay data={form} />
                ) : (
                    <Intro />
                )}
            </div>
        </div>
    );
}