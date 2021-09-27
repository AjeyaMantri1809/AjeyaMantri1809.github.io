import React from 'react';

export default function Resume(props) {

    if (props.data) {
        var skillmessage = props.data.skillmessage;
        var education = props.data.education.map(function (education) {
            return <div key={education.school}><h3>{education.school}</h3>
                <p className="info">{education.degree} <em className="date">{education.graduated}</em></p>
                <p><ul><li>{education.cap}</li><li>{education.coursework}</li><li>{education.specialprogram1}</li>
                <li>{education.specialprogram1honour}</li><li>{education.specialprogram2}</li>
                <li>{education.specialprogram2honour}</li><li>{education.others}</li></ul></p></div>
        })
        var work = props.data.work.map(function (work) {
            return <div key={work.company}><h3>{work.company}</h3>
                <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                <p><ul><li>{work.description1}</li><li>{work.description2}</li><li>{work.description3}</li><li>{work.description4}</li>
                </ul></p>
            </div>
        })
    }

    return (
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {education}
                        </div>
                    </div>
                </div>
            </div>


            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                    {work}
                </div>
            </div>

        </section>
    );
}
