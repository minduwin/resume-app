import PropTypes from 'prop-types';
import './show.css';

export default function ShowDisplay({ data }) {

    ShowDisplay.propTypes = {
        data: PropTypes.shape({
            name: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            aboutme: PropTypes.string.isRequired,
            experience: PropTypes.arrayOf(
                PropTypes.shape({
                    role: PropTypes.string.isRequired,
                    company: PropTypes.string.isRequired,
                    xpStart: PropTypes.string.isRequired,
                    xpEnd: PropTypes.string.isRequired,
                    xpDescrip: PropTypes.string.isRequired,
                })
            ).isRequired,
            education: PropTypes.arrayOf(
                PropTypes.shape({
                    formation: PropTypes.string.isRequired,
                    school: PropTypes.string.isRequired,
                    eduStart: PropTypes.string.isRequired,
                    eduEnd: PropTypes.string.isRequired,
                    eduDescrip: PropTypes.string.isRequired,
                })
            ).isRequired,
            skills1: PropTypes.string.isRequired,
            skills2: PropTypes.string.isRequired,
            skills3: PropTypes.string.isRequired,
            skills4: PropTypes.string.isRequired,
            skills5: PropTypes.string.isRequired,
        })
    }

    return (
        <div className='resumeContainer'>
            <div className='blackCard'>
                <div className='userPic'>
                    <img src="./src/assets/person-mock.svg" alt="person mock" />
                </div>
                <div className='aboutInfo'>
                    <h3>ABOUT ME</h3>
                    <p>{data.aboutme}</p>
                </div>
                <div className='skillsInfo'>
                    <h3>SKILLS</h3>
                    <p>- {data.skills1}</p>
                    <p>- {data.skills2}</p>
                    <p>- {data.skills3}</p>
                    <p>- {data.skills4}</p> 
                    <p>- {data.skills5}</p>
                </div>
            </div>
            <div className='whiteCard'>
                <div className='userInfo'>
                    <div className='candidate'>
                        <h1>{data.name.toUpperCase()}</h1>
                        <hr className='underline'></hr>
                    </div>
                    <div className='address'>
                        <h4>{data.address}</h4>
                        <h4>Phone: {data.phone}</h4>
                        <h4>Email: {data.email}</h4>
                    </div>
                </div>
                <div className='personXp'>
                    <h2>EXPERIENCE</h2>
                    {data.experience.map((exp, index) => (
                        <div className='xpData' key={index}>
                            <h4>{exp.role.toUpperCase()} ({exp.xpStart} - {exp.xpEnd})</h4>
                            <p>{exp.company}</p>
                            <p>{exp.xpDescrip}</p>
                        </div>
                    ))}
                </div>
                <div className='personEd'>
                    <h2>EDUCATION</h2>
                    {data.education.map((edu, index) => (
                        <div className='eduData' key={index}>
                            <h4>{edu.formation.toUpperCase()} ({edu.eduStart} - {edu.eduEnd})</h4>
                            <p>{edu.school}</p>
                            <p>{edu.eduDescrip}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}